---
name: "Shawn Design System"
description: "B2B 后台设计规范。使用 Element Plus 组件 + 统一视觉规范生成页面。AI 必读。"
---

# Shawn Design System

> B2B 管理后台设计规范。紧凑、务实、信息密集型风格。
> 使用 Element Plus v2.8.5 组件，页面模板自带完整样式。

---

## 硬规则

1. **禁止** Tailwind CSS、Lucide/Heroicons 图标、CDN 引入任何 CSS 框架
2. **使用** Element Plus 组件（el-table、el-form、el-dialog 等）
3. **模板自带样式** — 复制模板后只需注入少量变量
4. **字体栈**: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif
5. **主色**: #1764E8 | **成功**: #67C23A | **警告**: #E6A23C | **危险**: #F56C6C
6. **分页标准**: 默认 50 条，选项 20/50/100/200/500，所有页面统一

---

## AI 生成代码流程

当用户要求生成 B2B 后台页面时，按以下步骤执行：

### Step 1: 确定页面类型

根据用户需求选择匹配的模板：

| 用户说 | 选择模板 |
|--------|---------|
| "列表页"、"管理页"、"表格页" | `templates/list-standard.html` |
| "多筛选"、"复杂筛选"、"多按钮" | `templates/list-multi-filter.html` |
| "可勾选"、"批量操作"、"自定义列" | `templates/list-custom-table.html` |
| "统计"、"审批"、"tabs 切换列表" | `templates/list-stats-tabs.html` |
| "详情"、"查看" + 有 tabs | `templates/detail-tabs.html` |
| "详情"、"查看" + 无 tabs | `templates/detail-info.html` |
| "抽屉"、"侧滑详情" | `templates/detail-drawer.html` |
| "仪表盘"、"首页"、"统计" | `templates/dashboard.html` |
| "新建"、"编辑"、"表单页" | `templates/form-page.html` |
| "弹框"、"对话框"、"模态框" | `templates/dialog-form.html` |

### Step 2: 复制模板

读取对应模板文件的完整内容，作为生成代码的基础。

### Step 3: 注入 CSS 变量

在模板 `<style>` 块的 `:root` 中，注入以下变量（**必须包含，不可省略**）：

```css
:root {
  --primary-1: #f3f6fe;
  --primary-2: #e6edfc;
  --primary-3: #a5bff2;
  --primary-4: #7da4ec;
  --primary-5: #3678e2;
  --primary-6: #1764e8;
  --primary-7: #1250ba;
  --primary: #1764E8;
  --primary-light: rgba(23, 100, 232, 0.08);
  --success: #67C23A;
  --warning: #E6A23C;
  --danger: #F56C6C;
  --text-primary: rgba(0, 0, 0, 0.85);
  --text-secondary: rgba(0, 0, 0, 0.65);
  --text-tertiary: rgba(0, 0, 0, 0.45);
  --text-disabled: rgba(0, 0, 0, 0.25);
  --bg-page: #f5f7fa;
  --bg-card: #ffffff;
  --bg-hover: rgba(0, 0, 0, 0.04);
  --bg-active: rgba(0, 0, 0, 0.06);
  --bg-header: #fafafa;
  --divider: rgba(0, 0, 0, 0.08);
}
```

### Step 4: 替换内容

- 替换表格列定义（el-table-column）为用户实际字段
- 替换筛选项为用户实际筛选条件
- 替换示例数据为用户实际数据结构
- 替换按钮文字和操作
- **保留所有 class 名称和 DOM 结构不变**

### Step 5: 选择组件变体

当页面中使用 Element Plus 组件时，参考 `templates/component-variants.html` 选择合适的变体：

| 场景 | 推荐变体 |
|------|---------|
| 紧凑表格（数据密集） | 行高 40px，字号 13px |
| 标准表格 | 行高 48px，字号 14px |
| 筛选表单 | inline 模式，label 放 placeholder |
| 详情信息 | el-descriptions border 模式，label 背景 #fafafa |
| 弹框表单 | label-width: 100px，间距 12px |
| 状态标签 | el-tag success/warning/danger/info |
| 操作按钮 | 带图标 link 按钮，gap: 6px |
| 分页 | 默认 50 条，选项 20/50/100/200/500 |

详细示例见 `templates/component-variants.html`。

### Step 6: 应用组件二次开发样式

如果页面需要紧凑型组件效果，参考 `templates/component-overrides.html` 中的样式：

**紧凑表格（行高 40px）：**
```css
.compact-table .el-table {
  --el-table-header-bg-color: #fafafa;
  --el-table-header-text-color: rgba(0,0,0,0.65);
  font-size: 13px;
}
.compact-table .el-table td.el-table__cell {
  padding: 8px 0;
}
```

**紧凑表单（label 100px，间距 12px）：**
```css
.compact-form .el-form-item {
  margin-bottom: 12px;
}
.compact-form .el-form-item__label {
  font-size: 13px;
  color: rgba(0,0,0,0.65);
}
```

**详情展示（label 背景 #fafafa）：**
```css
.detail-descriptions .el-descriptions__label {
  font-size: 13px;
  color: rgba(0,0,0,0.65);
  background: #fafafa;
}
```

---

## Token 速查

### 主色阶（7级）

| Token | 值 | 用途 |
|-------|-----|------|
| `--primary-1` | #f3f6fe | 最浅背景 |
| `--primary-2` | #e6edfc | 浅背景、标签底色 |
| `--primary-3` | #a5bff2 | 禁用状态 |
| `--primary-4` | #7da4ec | 辅助 |
| `--primary-5` | #3678e2 | hover |
| `--primary-6` | #1764e8 | **主色 ★** |
| `--primary-7` | #1250ba | active/pressed |

### 状态色

| Token | 值 | 用途 |
|-------|-----|------|
| `--success` | #67C23A | 成功状态 |
| `--warning` | #E6A23C | 警告状态 |
| `--danger` | #F56C6C | 危险状态 |

### 文字色（rgba 透明度方案）

| Token | 值 | 用途 |
|-------|-----|------|
| `--text-primary` | rgba(0,0,0,0.85) | 主标题、正文 |
| `--text-secondary` | rgba(0,0,0,0.65) | 次强调 |
| `--text-tertiary` | rgba(0,0,0,0.45) | 次要、辅助 |
| `--text-disabled` | rgba(0,0,0,0.25) | 置灰、禁用 |

### 背景色

| Token | 值 | 用途 |
|-------|-----|------|
| `--bg-page` | #f5f7fa | 页面背景 |
| `--bg-card` | #ffffff | 卡片背景 |
| `--bg-hover` | rgba(0,0,0,0.04) | 悬停背景 |
| `--bg-active` | rgba(0,0,0,0.06) | 激活背景 |
| `--bg-header` | #fafafa | 表头/标签背景 |
| `--divider` | rgba(0,0,0,0.08) | 分割线 |

### 阴影

| Token | 值 | 用途 |
|-------|-----|------|
| `--shadow-sm` | 0 1px 2px rgba(0,0,0,0.06) | 卡片默认 |
| `--shadow-md` | 0 4px 12px rgba(0,0,0,0.08) | 下拉、悬浮 |
| `--shadow-lg` | 0 8px 24px rgba(0,0,0,0.12) | 弹窗 |
| `--shadow-xl` | 0 16px 48px rgba(0,0,0,0.16) | 全屏弹窗 |

### 圆角

| Token | 值 | 用途 |
|-------|-----|------|
| `--radius-sm` | 2px | 小元素 |
| `--radius-md` | 4px | 按钮、输入框 |
| `--radius-lg` | 8px | 卡片、弹框 |
| `--radius-xl` | 12px | 大卡片 |

### 布局宽度

| 场景 | 宽度 |
|------|------|
| 大屏布局 | 1440px |
| 标准布局 | 1280px |
| 弹框/中等内容区 | 980px |
| 抽屉/小弹框 | 720px |
| el-dialog（表单） | 720px |
| el-dialog（复杂内容） | 980px |
| el-drawer（表单） | 480px |
| el-drawer（详情） | 640px |

---

## 页面模板（11 个）

模板文件在 `templates/` 目录下。每个模板自带完整 `<style>` 块，可独立打开预览。

### 列表页

| 模板 | 文件 | 适用场景 |
|------|------|---------|
| 列表页（标准） | `templates/list-standard.html` | 筛选+表格+分页，最常见的列表页 |
| 列表页（多筛选多按钮） | `templates/list-multi-filter.html` | 多行筛选+多操作按钮+表格 |
| 列表页（含自定义表格） | `templates/list-custom-table.html` | 可勾选列+批量操作+表格 |
| 列表页（统计+tabs） | `templates/list-stats-tabs.html` | 顶部统计卡+tabs切换+表格 |

### 详情页

| 模板 | 文件 | 适用场景 |
|------|------|---------|
| 详情页（tabs） | `templates/detail-tabs.html` | banner+多标签页+详情内容 |
| 详情页（信息展示） | `templates/detail-info.html` | banner+描述列表+分区信息 |
| 详情页（抽屉） | `templates/detail-drawer.html` | 抽屉内表单或详情展示 |

### 其他

| 模板 | 文件 | 适用场景 |
|------|------|---------|
| 数据仪表盘 | `templates/dashboard.html` | 统计卡片+图表占位+数据表格 |
| 独立表单页 | `templates/form-page.html` | 返回按钮+分区表单+提交按钮 |
| 弹框（el-dialog） | `templates/dialog-form.html` | 弹框内嵌表单 |
| 组件二次开发示例 | `templates/component-overrides.html` | el-table/el-form/el-descriptions 样式调整参考 |
| 组件变体展示 | `templates/component-variants.html` | 8大类组件的各种场景变体（输入/选择/表格/表单/描述/标签/按钮/分页） |

---

## Element Plus 使用规范

### 列表页结构

```html
<div class="page-container">
  <div class="filter-container">
    <el-form :inline="true">
      <el-form-item>
        <el-input placeholder="搜索名称" prefix-icon="Search" />
      </el-form-item>
      <el-form-item>
        <el-select placeholder="状态" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table-container">
    <el-table :data="list" border stripe>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="status" label="状态">
        <template #default="{ row }">
          <el-tag :type="row.status === '启用' ? 'success' : 'danger'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="180">
        <template #default>
          <el-button link type="primary">编辑</el-button>
          <el-button link type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-bar">
      <span class="pagination-total">共 {{ total }} 条</span>
      <el-pagination
        v-model:current-page="page"
        v-model:page-size="pageSize"
        :page-sizes="[20, 50, 100, 200, 500]"
        :total="total"
        layout="sizes, prev, pager, next, jumper"
      />
    </div>
  </div>
</div>
```

### 详情页结构

```html
<div class="page-container">
  <div class="detail-banner">
    <div class="banner-header">
      <h2 class="banner-title">标题</h2>
      <el-tag type="success">状态</el-tag>
    </div>
    <div class="banner-meta">创建人：xxx | 创建时间：xxx</div>
    <div class="banner-actions">
      <el-button>编辑</el-button>
      <el-button>返回</el-button>
    </div>
  </div>
  <div class="content-card">
    <el-tabs>
      <el-tab-pane label="基础信息">
        <el-descriptions :column="2" border>
          <el-descriptions-item label="名称">值</el-descriptions-item>
        </el-descriptions>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
```

### 表格规范

- 行高 48px（标准）或 40px（紧凑）
- 表头背景 #fafafa
- 使用 border 和 stripe 属性
- 操作列 fixed="right"
- 分页居右，显示 total
- 默认每页 50 条

### 表单规范

- label-width: 120px（标准）或 100px（紧凑）
- 表单项间距 16px（标准）或 12px（紧凑）
- 按钮区放在表单底部，padding-top: 16px，加顶部分割线
- 主按钮用 type="primary"，取消按钮用默认样式
- 输入框 focus 时边框色 #1764e8

### 弹框/抽屉

- **el-dialog** 宽度: 720px（表单）或 980px（复杂内容），圆角 8px
- **el-drawer** 宽度: 480px（表单）或 640px（详情）
- 弹框/抽屉头部加底部分割线，body 内边距 20px
- 样式覆盖见 `components/overrides.css`

---

## 设计规范

### 字号

| 字号 | 字重 | 用途 |
|------|------|------|
| 12px | 400 | 辅助文字、表格单元格 |
| 13px | 400 | 紧凑表格、表单标签 |
| 14px | 400 | 正文默认 |
| 16px | 600 | 小标题、卡片标题 |
| 20px | 600 | 标题 |
| 24px | 700 | 大标题 |
| 32px | 700 | 页面标题 |

### 间距

| 场景 | 值 |
|------|-----|
| 页面容器 padding | 20px |
| 筛选区与表格区间距 | 16px |
| 弹框/抽屉内边距 | 20px |
| 卡片间距 | 16px |
| 按钮间距 | 8px |
| 表单项间距 | 16px（标准）/ 12px（紧凑） |

### 阴影

| 级别 | 值 | 用途 |
|------|-----|------|
| sm | 0 1px 2px rgba(0,0,0,0.06) | 卡片默认 |
| md | 0 4px 12px rgba(0,0,0,0.08) | 下拉、悬浮 |
| lg | 0 8px 24px rgba(0,0,0,0.12) | 弹窗 |
| xl | 0 16px 48px rgba(0,0,0,0.16) | 全屏弹窗 |

---

## 文件结构

```
├── SKILL.md                      # 本文件（AI 指令源）
├── README.md                     # 人类可读文档
├── tokens.css                    # Token 定义参考（AI 读取，不引入项目）
├── templates/                    # 页面模板（自带完整样式）
│   ├── list-standard.html        # 列表页（标准）
│   ├── list-multi-filter.html    # 列表页（多筛选多按钮）
│   ├── list-custom-table.html    # 列表页（含自定义表格）
│   ├── list-stats-tabs.html      # 列表页（统计+tabs）
│   ├── detail-tabs.html          # 详情页（tabs）
│   ├── detail-info.html          # 详情页（信息展示）
│   ├── detail-drawer.html        # 详情页（抽屉）
│   ├── dashboard.html            # 数据仪表盘
│   ├── form-page.html            # 独立表单页
│   ├── dialog-form.html          # 弹框（el-dialog）
│   └── component-overrides.html  # 组件二次开发示例
├── components/
│   └── overrides.css             # Element Plus 样式覆盖（dialog/drawer）
├── preview/                      # 旧组件预览（参考用）
├── snippets/
│   └── nav-logo.html             # Logo
└── assets/icons/                 # 图标资源
```

---

## 使用方式

### 给开发者

1. 不需要安装任何依赖
2. 参考 `templates/` 下的模板编写页面
3. 将 `tokens.css` 中的 CSS 变量复制到项目全局样式中（或按需注入到组件 style）
4. 引入 `components/overrides.css` 统一弹框/抽屉样式
5. 使用 Element Plus 组件，遵循上述规范

### 给 AI

1. 读取本 SKILL.md 了解规范
2. 根据用户需求选择模板
3. 复制模板 → 注入 CSS 变量 → 替换内容
4. 参考 `component-overrides.html` 应用组件二次开发样式
5. 产出：风格统一的 Vue/HTML 页面
