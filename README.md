# shawn-design-spec

B2B 管理后台设计规范 + 代码规范。紧凑、务实、信息密集型风格。

## 这是什么

为 AI 和开发者提供统一视觉规范和代码规范的工程。基于 Element Plus v2.8.5，保证生成的页面风格一致、代码结构统一。

**不是组件库，是设计规范。** 不需要安装依赖，只需要遵循规范中定义的 Token、间距、字号、颜色、交互模式和代码规范。

### 核心文件

| 文件 | 作用 |
|------|------|
| `SKILL.md` | 入口文件（AI 第一个读的）：硬规则 + Token 速查 + 工作流程 + 文件索引 |
| `DESIGN-SPEC.md` | 分层索引 + 速查表（Token/组件/布局/场景） |
| `specs/tokens.md` | Token 详细定义（色阶、字体行高、间距场景等） |
| `specs/components.md` | Element Plus 组件规范（表格/表单/弹框等） |
| `specs/templates.md` | 页面模板使用指南（何时用哪个模板） |
| `specs/code-standards.md` | Vue/API/SQL 代码规范 |
| `index.html` | 可视化导航（浏览器打开预览） |

## 使用方式

### 方式一：AI 开发时参考

AI 在生成 B2B 后台页面时：

1. 先读 `SKILL.md` 了解硬规则和工作流程
2. 根据任务查 `DESIGN-SPEC.md` 索引 → 定位到具体 spec 文件
3. 按需读取 `specs/` 下的详细文件
4. 参考 `templates/` 和 `preview/` 生成代码

### 方式二：开发者手动参考

1. 打开 `index.html`，浏览「主题」和「组件」标签页，了解视觉规范
2. 打开 `DESIGN-SPEC.md`，查阅需要的规范和 CSS 代码片段
3. 将 CSS 变量复制到项目全局样式中

## 三层规范

### 第一层：基础 Token

| 类别 | 内容 | 详细定义 |
|------|------|---------|
| 色彩 | 主色 #1764E8 + 状态色 + 文字色 rgba 方案 | `specs/tokens.md#1-色彩` |
| 字体 | 12-24px 字阶 + 系统字体栈 | `specs/tokens.md#2-字体` |
| 间距 | 4-64px 间距体系 + 常用布局间距 | `specs/tokens.md#3-间距` |
| 圆角 & 阴影 | 2/4/8/12px 圆角 + 4 级阴影 | `specs/tokens.md#4-圆角与阴影` |

### 第二层：组件规范

| 分类 | 组件 | 详细规范 |
|------|------|---------|
| 输入 | Input / Select / Checkbox / Switch / Slider / Cascader / TimePicker / Segmented | `specs/components.md` |
| 展示 | Table / Icon / Avatar / Badge / Progress / StatusTag / Descriptions | `specs/components.md` |
| 反馈 | Alert / Message / Modal / Drawer / Tooltip / Dropdown | `specs/components.md` |
| 导航 | Breadcrumb / Anchor / Pagination / Steps / Tabs | `specs/components.md` |
| 布局 | TopNav / Sidenav / PageHeader / Form | `specs/components.md` |

### 第三层：页面布局参考

| 模板 | 文件 | 适用场景 |
|------|------|---------|
| 列表页（标准） | `templates/list-standard.html` | 筛选+表格+分页 |
| 列表页（多筛选多按钮） | `templates/list-multi-filter.html` | 多行筛选+多操作按钮 |
| 列表页（统计+tabs） | `templates/list-stats-tabs.html` | 顶部统计+tabs切换 |
| 详情页（tabs） | `templates/detail-tabs.html` | banner+多标签页 |
| 详情页（信息展示） | `templates/detail-info.html` | banner+描述列表 |
| 详情页（抽屉） | `templates/detail-drawer.html` | 抽屉内表单/详情 |
| 数据仪表盘 | `templates/dashboard.html` | 统计卡+图表+表格 |
| 独立表单页 | `templates/form-page.html` | 返回+分区表单 |
| 弹框表单 | `templates/dialog-form.html` | 弹框内表单 |

## 文件结构

```
shawn-design-spec/
├── SKILL.md                    # 入口文件
├── DESIGN-SPEC.md              # 分层索引 + 速查表
├── specs/                      # 详细规范文件
│   ├── tokens.md               # Token 详细定义
│   ├── components.md           # 组件规范
│   ├── templates.md            # 模板指南
│   └── code-standards.md       # 代码规范
├── templates/                  # 页面模板（9 个）
├── preview/                    # 组件预览（34 个）
├── index.html                  # 可视化导航
├── README.md                   # 本文件
└── colors_and_type.css         # 完整 CSS 变量定义
```
