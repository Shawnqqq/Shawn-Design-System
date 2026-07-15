# shawn-design-spec — 设计规范索引

> 分层索引 + 速查表。详细定义见 specs/ 下对应文件。

---

## 目录

- [1. Token 速查](#1-token-速查)
- [2. 组件速查](#2-组件速查)
- [3. 布局速查](#3-布局速查)
- [4. 场景速查表](#4-场景速查表)

---

## 1. Token 速查

### 1.1 色彩

| Token | 值 | 用途 |
|-------|-----|------|
| `@color-primary` | #1764E8 | 主色、链接、选中态 |
| `@color-success` | #67C23A | 成功、完成、通过 |
| `@color-warning` | #E6A23C | 警告、进行中 |
| `@color-danger` | #F56C6C | 错误、删除、高优先级 |
| `@text-primary` | rgba(0,0,0,0.85) | 标题、正文 |
| `@text-secondary` | rgba(0,0,0,0.65) | 次要文字、label |
| `@text-muted` | rgba(0,0,0,0.45) | 辅助文字、placeholder |
| `@page-bg` | #f5f7fa | 页面背景（body） |
| `@card-bg` | #fff | 卡片、弹框背景 |
| `@table-header-bg` | #fafafa | 表头、标签页头 |

→ 详细色阶、状态色组合 → `specs/tokens.md#1-色彩`

### 1.2 字号

| 字号 | 字重 | 用途 |
|------|------|------|
| 12px | 400 | 辅助文字、表格单元格、标签 |
| 14px | 400 | 正文默认 |
| 16px | 500 | section-title、卡片标题 |
| 20px | 600 | 页面标题 |

→ 详细行高、文字样式模式 → `specs/tokens.md#2-字体`

### 1.3 间距

| 值 | 用途 |
|-----|------|
| 4px | 最小间距 |
| 8px | 紧凑间距、按钮 gap |
| 12px | 表单项间距、filter-bar padding |
| 16px | 卡片内边距、section 间距 |
| 20px | 页面 padding、卡片内边距 |
| 24px | 大间距 |
| 32px | 区块间距 |

→ 详细布局间距、页面宽度断点 → `specs/tokens.md#3-间距`

### 1.4 圆角 & 阴影

| Token | 值 | 用途 |
|-------|-----|------|
| sm | 2px | 小元素 |
| md | 4px | 按钮、输入框 |
| lg | 8px | 卡片、弹框 |
| xl | 12px | 大卡片 |

→ 详细阴影等级、hover 交互效果 → `specs/tokens.md#4-圆角与阴影`

---

## 2. 组件速查

### 2.1 表格

| 参数 | 值 |
|------|-----|
| 行高（紧凑） | 40px，font-size 12px |
| 行高（标准） | 48px，font-size 14px |
| 表头背景 | #fafafa，font-weight 500 |
| 边框色 | rgba(0,0,0,0.06) |
| 操作列 | link 按钮，无 icon，用 el-divider 分隔 |
| 选择列 | type="selection", width="46", fixed="left" |

→ 详细变体 → `specs/components.md#1-表格`

### 2.2 表单

| 参数 | 值 |
|------|-----|
| label-width | 100px-120px |
| label-position | right（默认） |
| 表单项间距 | 16px（标准）/ 12px（紧凑） |
| 输入框宽度 | max-width 480px |
| 按钮区 | border-top 分割，padding-top 16px，text-align right |

→ 详细变体 → `specs/components.md#2-表单`

### 2.3 弹框/抽屉

| 参数 | 值 |
|------|-----|
| dialog 宽度 | 720px（标准）/ 480px（简单）/ 640px（中等） |
| drawer 宽度 | 640px（快速预览）/ 980px（完整详情） |
| header | padding 16px 20px，border-bottom |
| body | padding 16px 20px |
| footer | padding-top 12px，text-align right |

→ 详细变体 → `specs/components.md#3-弹框与抽屉`

### 2.4 分页

| 参数 | 值 |
|------|-----|
| 默认 pageSize | 50 |
| 选项 | 20/50/100/200/500 |
| 布局 | sizes, prev, pager, next, jumper |
| 字号 | --el-pagination-font-size 12px |

→ 详细用法 → `specs/components.md#4-分页`

---

## 3. 布局速查

| 场景 | 推荐模板 | 文件 |
|------|---------|------|
| 筛选+表格+分页 | 列表页（标准） | `templates/list-standard.html` |
| 多行筛选+多操作按钮 | 列表页（多筛选多按钮） | `templates/list-multi-filter.html` |
| 顶部统计+tabs切换 | 列表页（统计+tabs） | `templates/list-stats-tabs.html` |
| 复杂实体详情 | 详情页（tabs） | `templates/detail-tabs.html` |
| 字段较少的详情 | 详情页（信息展示） | `templates/detail-info.html` |
| 快速预览/完整详情 | 详情页（抽屉） | `templates/detail-drawer.html` |
| 数据概览和分析 | 数据仪表盘 | `templates/dashboard.html` |
| 独立创建/编辑 | 独立表单页 | `templates/form-page.html` |
| 弹窗内表单 | 弹框表单 | `templates/dialog-form.html` |
| 无匹配模板 | 回退到 Token 规范 | → `specs/tokens.md` |

→ 详细布局决策树 → `specs/templates.md`

---

## 4. 场景速查表

| 我要... | 查这个 |
|---------|--------|
| 设置页面背景色 | `@page-bg: #f5f7fa` |
| 设置文字颜色 | `@text-primary/secondary/muted` |
| 选择字号 | 12px（辅助）/ 14px（正文）/ 16px（标题）/ 20px（页面标题） |
| 设置卡片圆角 | `border-radius: 8px` |
| 设置卡片阴影 | `box-shadow: 0 1px 2px rgba(0,0,0,0.06)` |
| 做一个列表页 | → `templates/list-standard.html` |
| 做一个详情页 | → `templates/detail-tabs.html` 或 `detail-info.html` |
| 做一个表单页 | → `templates/form-page.html` 或 `dialog-form.html` |
| 做一个弹框 | dialog 宽度 720px，header/body padding 16px 20px |
| 做一个抽屉 | drawer 宽度 640px/980px，footer padding-top 12px |
| 设置分页 | pageSize 50，选项 20/50/100/200/500 |
| 写 Vue 代码 | → `specs/code-standards.md` |
| 写 API 接口 | → `specs/code-standards.md#2-api-规范` |
| 写 SQL 建表 | → `specs/code-standards.md#3-sql-规范` |
