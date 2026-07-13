# Shawn Design System

B2B 管理后台设计规范。紧凑、务实、信息密集型风格。

## 定位

设计规范工程，不是组件库。为 AI 和开发者提供统一的视觉规范，保证生成的页面风格一致。

- 基于 Element Plus v2.8.5 组件
- 页面模板自带完整样式，复制即可用
- 只有少量品牌变量需要注入

## 快速开始

### AI 使用

1. 读取 `SKILL.md` 了解设计规范
2. 根据需求选择 `templates/` 下的模板
3. 复制模板 HTML，替换文字和数据
4. 在 `<style>` 顶部注入用到的 CSS 变量（参考 `tokens.css`）

### 开发者使用

1. 引入 `components/overrides.css` 统一弹框/抽屉样式
2. 页面结构参照 `templates/` 下的模板
3. 使用 Element Plus 组件，遵循 SKILL.md 中的规范

## 设计 Token

| 类别 | 变量 | 值 |
|------|------|-----|
| 主色阶 1 | `--primary-1` | #f3f6fe（最浅背景） |
| 主色阶 2 | `--primary-2` | #e6edfc（浅背景） |
| 主色阶 3 | `--primary-3` | #a5bff2（禁用状态） |
| 主色阶 4 | `--primary-4` | #7da4ec（辅助） |
| 主色阶 5 | `--primary-5` | #3678e2（hover） |
| 主色阶 6 | `--primary-6` | #1764e8（主色 ★） |
| 主色阶 7 | `--primary-7` | #1250ba（active） |
| 主色 | `--primary` | #1764E8 |
| 成功 | `--success` | #67C23A |
| 警告 | `--warning` | #E6A23C |
| 危险 | `--danger` | #F56C6C |
| 主文字 | `--text-primary` | rgba(0,0,0,0.85) |
| 次文字 | `--text-secondary` | rgba(0,0,0,0.65) |
| 辅助文字 | `--text-tertiary` | rgba(0,0,0,0.45) |
| 禁用文字 | `--text-disabled` | rgba(0,0,0,0.25) |
| 页面背景 | `--bg-page` | #f5f7fa |
| 卡片背景 | `--bg-card` | #ffffff |
| 分割线 | `--divider` | rgba(0,0,0,0.08) |

完整 Token 定义见 `tokens.css`。

## 页面模板

| 模板 | 文件 | 适用场景 |
|------|------|---------|
| 列表页（标准） | `templates/list-standard.html` | 筛选+表格+分页 |
| 列表页（多筛选多按钮） | `templates/list-multi-filter.html` | 多行筛选+多操作按钮 |
| 列表页（含自定义表格） | `templates/list-custom-table.html` | 可勾选列+批量操作 |
| 列表页（统计+tabs） | `templates/list-stats-tabs.html` | 顶部统计+tabs切换 |
| 详情页（tabs） | `templates/detail-tabs.html` | banner+多标签页 |
| 详情页（信息展示） | `templates/detail-info.html` | banner+描述列表 |
| 详情页（抽屉） | `templates/detail-drawer.html` | 抽屉内表单/详情 |
| 数据仪表盘 | `templates/dashboard.html` | 统计卡+图表+表格 |
| 独立表单页 | `templates/form-page.html` | 返回+分区表单 |
| 弹框（el-dialog） | `templates/dialog-form.html` | 弹框内表单 |

## 设计规范

### 字体

```
font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif
```

| 字号 | 用途 |
|------|------|
| 12px | 辅助文字、表格单元格 |
| 14px | 正文默认 |
| 16px | 小标题 |
| 20px | 标题 |
| 24px | 大标题 |
| 32px | 页面标题 |

### 间距

- 页面内边距: 20px
- 卡片间距: 16px
- 按钮间距: 8px
- 表单标签宽度: 120px

### 分页标准

- 默认每页: 50 条
- 可选: 20 / 50 / 100 / 200 / 500
- 所有页面统一此标准

### 阴影

| 级别 | 值 | 用途 |
|------|-----|------|
| sm | 0 1px 2px rgba(0,0,0,0.06) | 卡片默认 |
| md | 0 4px 12px rgba(0,0,0,0.08) | 下拉、悬浮 |
| lg | 0 8px 24px rgba(0,0,0,0.12) | 弹窗 |

## 文件结构

```
├── SKILL.md           # AI 指令源
├── README.md          # 本文档
├── tokens.css         # Token 定义参考
├── templates/         # 10 个页面模板
├── components/
│   └── overrides.css  # Element Plus 样式覆盖
├── snippets/
│   └── nav-logo.html  # Logo
└── assets/icons/      # 图标资源
```

## 约束

- **禁止** Tailwind CSS、Lucide/Heroicons 图标、CDN CSS 框架
- **使用** Element Plus 组件 + 内联 SVG 图标
- **字体** 使用系统字体栈，不引入外部字体
