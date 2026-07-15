#!/usr/bin/env node

/**
 * shawn-design-spec 安装脚本
 *
 * 使用方式：
 *   npx shawn-design-spec install [--global|--local]
 *
 * 选项：
 *   --global  安装到 ~/.agents/skills/（默认，所有项目可用）
 *   --local   安装到当前项目的 .agents/skills/（仅当前项目可用）
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'shawn-design-spec';

// 解析参数
const args = process.argv.slice(2);
const isLocal = args.includes('--local');
const isGlobal = args.includes('--global') || !isLocal;

// 源目录（npm 包所在位置）
const sourceDir = path.resolve(__dirname, '..');

// 目标目录
let targetDir;
if (isLocal) {
  targetDir = path.resolve(process.cwd(), '.agents/skills', SKILL_NAME);
} else {
  targetDir = path.resolve(os.homedir(), '.agents/skills', SKILL_NAME);
}

// 需要复制的文件/目录
const filesToCopy = [
  'SKILL.md',
  'references',
  'assets'
];

// 递归复制目录
function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`  ⚠ 跳过 ${src}（不存在）`);
    return;
  }

  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// 主逻辑
console.log(`\n📦 shawn-design-spec 安装器\n`);
console.log(`源目录: ${sourceDir}`);
console.log(`目标目录: ${targetDir}`);
console.log(`安装模式: ${isLocal ? 'local（当前项目）' : 'global（全局）'}\n`);

// 检查源目录
if (!fs.existsSync(path.join(sourceDir, 'SKILL.md'))) {
  console.error('❌ 错误: 找不到 SKILL.md，请确保在正确的目录下运行');
  process.exit(1);
}

// 创建目标目录
fs.mkdirSync(targetDir, { recursive: true });

// 复制文件
let copiedCount = 0;
for (const file of filesToCopy) {
  const srcPath = path.join(sourceDir, file);
  const destPath = path.join(targetDir, file);

  if (!fs.existsSync(srcPath)) {
    console.log(`  ⚠ 跳过 ${file}（不存在）`);
    continue;
  }

  console.log(`  📄 复制 ${file}...`);
  copyRecursive(srcPath, destPath);
  copiedCount++;
}

console.log(`\n✅ 安装完成！已复制 ${copiedCount} 个文件/目录到:\n   ${targetDir}\n`);

// 提示
if (isGlobal) {
  console.log('💡 提示: 已全局安装，所有项目都可以使用此 skill。');
  console.log('   ZCode 会自动发现 ~/.agents/skills/ 下的 skill。\n');
} else {
  console.log('💡 提示: 已本地安装，仅当前项目可以使用此 skill。');
  console.log('   ZCode 会自动发现 .agents/skills/ 下的 skill。\n');
}

console.log('🔗 项目地址: https://github.com/your-org/shawn-design-spec');
console.log('📖 使用说明: 参考 SKILL.md 中的 AI 工作流程\n');
