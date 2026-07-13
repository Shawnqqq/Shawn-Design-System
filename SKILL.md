---
name: "Shawn Design System"
description: "B2B 后台设计规范。使用 Element Plus 组件 + 统一视觉规范生成页面。"
---

# Shawn Design System

> B2B 管理后台设计规范。紧凑、务实、信息密集型风格。
> 使用 Element Plus v2.8.5 组件，页面模板自带完整样式。

## 硬规则

1. **禁止** Tailwind CSS、Lucide/Heroicons 图标、CDN 引入任何 CSS 框架
2. **使用** Element Plus 组件（el-table、el-form、el-dialog 等）
3. **模板自带样式** — 复制模板后只需注入少量变量（见下方 Token 速查）
4. **字体栈**: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', sans-serif
5. **主色**: #1764E8 | **成功**: #67C23A | **警告**: #E6A23C | **危险**: #F56C6C

## Token 速查

AI 生成页面时，在 `<style>` 顶部写入用到的变量（按需，不必全部写入）：

```css
:root {
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
  --bg-header: #fafafa;
  --divider: rgba(0, 0, 0, 0.08);
}
```

完整 Token 参考见 `tokens.css`。

## 页面模板（10 种）

根据用户需求选择匹配的模板，复制 HTML 后替换内容。模板文件在 `templates/` 目录下。

| # | 模板 | 文件 | 适用场景 |
|---|------|------|---------|
| 1 | 列表页（标准） | `templates/list-standard.html` | 筛选+表格+分页，最常见的列表页 |
| 2 | 列表页（多筛选多按钮） | `templates/list-multi-filter.html` | 多行筛选+多操作按钮+表格 |
| 3 | 列表页（含自定义表格） | `templates/list-custom-table.html` | 可勾选列+批量操作+表格 |
| 4 | 列表页（统计+tabs） | `templates/list-stats-tabs.html` | 顶部统计卡+tabs切换+表格 |
| 5 | 详情页（tabs） | `templates/detail-tabs.html` | banner+多标签页+详情内容 |
| 6 | 详情页（信息展示） | `templates/detail-info.html` | banner+描述列表+分区信息 |
| 7 | 详情页（抽屉） | `templates/detail-drawer.html` | 抽屉内表单或详情展示 |
| 8 | 数据仪表盘 | `templates/dashboard.html` | 统计卡片+图表占位+数据表格 |
| 9 | 独立表单页 | `templates/form-page.html` | 返回按钮+分区表单+提交按钮 |
| 10 | 弹框（el-dialog） | `templates/dialog-form.html` | 弹框内嵌表单 |

## Element Plus 使用规范

### 列表页结构

```html
<div class="page-container">
  <div class="filter-container">
    <el-form :inline="true">
      <el-form-item label="名称"><el-input placeholder="请输入" /></el-form-item>
      <el-form-item label="状态"><el-select placeholder="请选择" /></el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="table-container">
    <el-table :data="list" border stripe>
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="status" label="状态" />
      <el-table-column label="操作" fixed="right" width="180">
        <template #default>
          <el-button link type="primary">编辑</el-button>
          <el-button link type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination layout="total, sizes, prev, pager, next" :total="100" />
  </div>
</div>
```

### 详情页结构

```html
<div class="page-container">
  <div class="detail-banner">
    <div class="banner-title">标题</div>
    <div class="banner-meta"><el-tag>状态</el-tag> 创建时间：2024-01-01</div>
  </div>
  <el-tabs>
    <el-tab-pane label="基础信息">
      <el-descriptions :column="2" border>
        <el-descriptions-item label="名称">值</el-descriptions-item>
      </el-descriptions>
    </el-tab-pane>
  </el-tabs>
</div>
```

### 弹框/抽屉

- **el-dialog** 宽度: 720px（表单）或 980px（复杂内容），圆角 8px
- **el-drawer** 宽度: 480px（表单）或 640px（详情）
- 弹框/抽屉头部加底部分割线，body 内边距 20px

### 表格规范

- 行高 48px
- 表头背景 #fafafa
- 使用 border 和 stripe 属性
- 操作列 fixed="right"
- 分页居右，显示 total

### 表单规范

- label-width: 120px
- 表单项间距 16px
- 按钮区放在表单底部，padding-top: 16px，加顶部分割线
- 主按钮用 type="primary"，取消按钮用默认样式

## 间距规范

- 页面容器 padding: 20px
- 筛选区与表格区间距: 16px
- 弹框/抽屉内边距: 20px
- 卡片间距: 16px
- 按钮间距: 8px

## 字号规范

- 12px: 辅助文字、表格单元格
- 14px: 正文默认、表单标签
- 16px: 小标题、卡片标题
- 20px: 标题
- 24px: 大标题
- 32px: 页面标题

## 字重规范

- 400 (Regular): 正文
- 500 (Medium): 强调文字、表单标签
- 600 (Semibold): 标题
- 700 (Bold): 页面标题、重点突出
