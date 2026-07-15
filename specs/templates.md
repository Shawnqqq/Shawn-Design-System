# 页面模板指南

> 页面模板使用指南。帮助 AI 选择合适的模板。
> 模板文件见 templates/ 目录。

---

## 1. 模板选择决策树

```
用户需求
    │
    ▼
是否为列表页？
    │
    ├── 是 → 需要统计卡片？
    │        ├── 是 → list-stats-tabs.html
    │        └── 否 → 需要多行筛选？
    │                 ├── 是 → list-multi-filter.html
    │                 └── 否 → list-standard.html
    │
    └── 否 → 是否为详情页？
             ├── 是 → 需要多标签页？
             │        ├── 是 → detail-tabs.html
             │        └── 否 → 需要抽屉展示？
             │                 ├── 是 → detail-drawer.html
             │                 └── 否 → detail-info.html
             │
             └── 否 → 是否为表单页？
                      ├── 是 → 需要弹框？
                      │        ├── 是 → dialog-form.html
                      │        └── 否 → form-page.html
                      │
                      └── 否 → 是否为仪表盘？
                               ├── 是 → dashboard.html
                               └── 否 → 回退到 Token 规范
```

---

## 2. 模板详细说明

### 2.1 列表页（标准）

**文件：** `templates/list-standard.html`

**适用场景：** 筛选栏 + 表格 + 分页的标准 CRUD 列表，需要批量操作的列表

**布局结构：** 筛选栏（el-form inline）→ 表格（el-table）→ 分页（el-pagination）→ 可选批量操作栏

**关键组件：** el-form（inline）、el-table、el-pagination

---

### 2.2 列表页（多筛选多按钮）

**文件：** `templates/list-multi-filter.html`

**适用场景：** 多行筛选条件、级联选择器、多个操作按钮（刷新、收藏、导出、设置）

**布局结构：** 多行筛选区 → 操作按钮组 → 表格 → 分页

**关键组件：** el-cascader、el-button（文字按钮）、el-dropdown（设置菜单）

---

### 2.3 列表页（统计+tabs）

**文件：** `templates/list-stats-tabs.html`

**适用场景：** 顶部有可点击统计卡片、Tab 切换不同状态、每个 Tab 有独立筛选项

**布局结构：** 统计卡片（含趋势）→ Tabs 切换 → 筛选栏 + 表格 + 分页

**关键组件：** el-card（统计卡片）、el-tabs、el-table

---

### 2.4 详情页（tabs）

**文件：** `templates/detail-tabs.html`

**适用场景：** 复杂实体的详情查看、需要多标签页展示不同维度信息

**布局结构：** Banner 卡片（标题、状态、操作按钮）→ Tabs 切换 → 各 Tab 内容区

**关键组件：** el-card（Banner）、el-tabs、el-descriptions

---

### 2.5 详情页（信息展示）

**文件：** `templates/detail-info.html`

**适用场景：** 字段较少的详情展示、使用 Descriptions 组件展示信息

**布局结构：** Banner 卡片 → Descriptions 描述列表 → 可选关联信息

**关键组件：** el-card（Banner）、el-descriptions

---

### 2.6 详情页（抽屉）

**文件：** `templates/detail-drawer.html`

**适用场景：** 快速预览详情（不离开列表页）、完整详情查看（含 Tabs）

**布局结构：** 列表页 + 抽屉（640px 快速预览 / 980px 完整详情）

**关键组件：** el-drawer、el-descriptions、el-tabs

---

### 2.7 数据仪表盘

**文件：** `templates/dashboard.html`

**适用场景：** 数据概览和分析、统计卡片 + 图表 + 数据表格

**布局结构：** 统计卡片（4 个）→ 图表区域（ECharts）→ 数据表格

**关键组件：** el-card（统计卡片）、ECharts、el-table

---

### 2.8 独立表单页

**文件：** `templates/form-page.html`

**适用场景：** 独立的创建/编辑页面、需要返回导航、支持预览模式切换

**布局结构：** 返回导航 + 标题 → 分区表单 → 操作按钮

**关键组件：** el-button（返回）、el-form、el-card（分区）

---

### 2.9 弹框表单

**文件：** `templates/dialog-form.html`

**适用场景：** 弹窗内的表单操作、标准弹框表单、多步骤弹框表单

**布局结构：** 弹框容器（el-dialog）→ 表单或多步骤表单

**关键组件：** el-dialog、el-form、el-steps（多步骤）

---

## 3. 模板组合指南

当页面需要组合多个模板的局部时：

- **列表页 + 弹框表单**：list-standard.html 的表格 + dialog-form.html 的弹框
- **详情页 + 抽屉**：detail-tabs.html 的详情 + detail-drawer.html 的抽屉
- **表单页 + 预览**：form-page.html 的表单 + 预览模式

---

## 4. 无模板时的降级策略

当没有模板匹配需求时（如前台页面、复杂场景）：

**必须遵守的规范：**
- 颜色：主色 #1764E8，文字色 rgba 方案，背景 #f5f7fa
- 字号：12/14/16/20px 四级字阶
- 间距：4/8/12/16/20/24/32px 间距体系
- 圆角：2/4/8/12px 四级圆角
- 阴影：sm/md/lg/xl 四级阴影

**参考文件：** `specs/tokens.md`、`specs/components.md`
