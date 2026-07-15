# 组件规范

> Element Plus 组件使用规范。速查版见 DESIGN-SPEC.md。
> 组件预览文件见 preview/ 目录。

---

## 1. 表格

### 关键参数

| 参数 | 值 | 说明 |
|------|-----|------|
| 行高（紧凑） | 40px | font-size: 12px |
| 行高（标准） | 48px | font-size: 14px |
| 表头背景 | #fafafa | font-weight: 500 |
| 边框色 | rgba(0,0,0,0.06) | border-color |
| 操作列 | link 按钮 | 无 icon，用 el-divider 分隔 |
| 选择列 | type="selection" | width="46", fixed="left" |

### 变体

| 变体 | 文件 | 说明 |
|------|------|------|
| 紧凑表格 | `preview/component-table.html` | 40px 行高，12px 字号 |
| 标准表格 | `preview/component-table.html` | 48px 行高，14px 字号 |
| 操作列 | `preview/component-table.html` | link 按钮，无 icon |
| 合计行 | `preview/component-table.html` | show-summary 属性 |
| 展开行 | `preview/component-table.html` | type="expand" |

---

## 2. 表单

### 关键参数

| 参数 | 值 | 说明 |
|------|-----|------|
| label-width | 100px-120px | 根据字段数量调整 |
| label-position | right | 默认右对齐 |
| 表单项间距 | 16px（标准）/ 12px（紧凑） | margin-bottom |
| 输入框宽度 | max-width 480px | 限制最大宽度 |
| 按钮区 | border-top 分割 | padding-top 16px, text-align right |

### 变体

| 变体 | 文件 | 说明 |
|------|------|------|
| 水平表单 | `preview/component-form.html` | label 在左侧 |
| 垂直表单 | `preview/component-form.html` | label 在上方 |
| 行内表单 | `preview/component-form.html` | inline 属性 |
| 紧凑表单 | `preview/component-form.html` | 12px 间距 |
| 描述列表 | `preview/component-descriptions.html` | el-descriptions 组件 |

---

## 3. 弹框与抽屉

### Dialog 关键参数

| 参数 | 值 | 说明 |
|------|-----|------|
| 标准宽度 | 720px | 标准表单 |
| 简单宽度 | 480px | 简单表单 |
| 中等宽度 | 640px | 中等复杂度 |
| header | padding 16px 20px | border-bottom |
| body | padding 16px 20px | |
| footer | padding-top 12px | text-align right |

### Drawer 关键参数

| 参数 | 值 | 说明 |
|------|-----|------|
| 快速预览 | 640px | 查看详情 |
| 完整详情 | 980px | 含 Tabs |
| header | padding 16px 20px | border-bottom |
| body | padding 16px 20px | |
| footer | padding-top 12px | text-align right |

---

## 4. 分页

### 关键参数

| 参数 | 值 | 说明 |
|------|-----|------|
| 默认 pageSize | 50 | 默认每页50条 |
| 选项 | 20/50/100/200/500 | page-sizes |
| 布局 | sizes, prev, pager, next, jumper | layout 属性 |
| 字号 | 12px | --el-pagination-font-size |

### 用法

```vue
<el-pagination
  v-model:current-page="currentPage"
  v-model:page-size="pageSize"
  :page-sizes="[20, 50, 100, 200, 500]"
  :total="total"
  layout="sizes, prev, pager, next, jumper"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
/>
```

---

## 5. 输入组件

### Input

| 变体 | 说明 |
|------|------|
| 基础输入框 | el-input |
| 带图标 | prefix/suffix slot |
| 搜索框 | clearable + Search icon |
| 文本域 | type="textarea" |
| 数字输入 | el-input-number |

→ 预览：`preview/component-input.html`

### Select

| 变体 | 说明 |
|------|------|
| 基础选择器 | el-select |
| 带标签 | label 属性 |
| 多选 | multiple 属性 |
| 可搜索 | filterable 属性 |

→ 预览：`preview/component-select.html`

### Checkbox / Switch / Slider / Cascader / TimePicker / Segmented

→ 预览：`preview/component-checkbox.html` / `component-switch.html` / `component-slider.html` / `component-cascader.html` / `component-timepicker.html` / `component-segmented-picker.html`

---

## 6. 展示组件

### Tag

| 变体 | 说明 |
|------|------|
| 按颜色 | type 属性（success/warning/danger/info/primary） |
| 按尺寸 | size 属性（large/default/small） |
| 按效果 | effect 属性（dark/light/plain） |
| 可关闭 | closable 属性 |

→ 预览：`preview/component-status-tag.html`

### Avatar / Badge / Progress / Descriptions

→ 预览：`preview/component-avatar.html` / `component-badge.html` / `component-progress.html` / `component-descriptions.html`

---

## 7. 反馈组件

### Message

```javascript
// CDN 环境
ElementPlus.ElMessage.success('操作成功')
ElementPlus.ElMessage.error('操作失败')

// 项目环境
import { ElMessage } from 'element-plus'
ElMessage.success('操作成功')
```

→ 预览：`preview/component-message.html` / `component-alert.html`

---

## 8. 导航组件

Breadcrumb / Anchor / Steps / Tabs

→ 预览：`preview/component-breadcrumb.html` / `component-anchor.html` / `component-steps.html` / `component-tabs.html`

---

## 9. 浮层组件

Tooltip / Dropdown

→ 预览：`preview/component-tooltip.html` / `component-dropdown.html`
