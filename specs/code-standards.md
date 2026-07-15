# 代码规范

> Vue/API/SQL 代码规范，确保代码结构一致。

---

## 1. Vue 规范

### 1.1 Composition API 结构顺序

`<script setup>` 内必须按以下顺序排列：

1. Import 区域（未引入的组件及时删除）
2. Props / Emits 定义
3. 生命周期 hooks（onMounted 等）
4. 组合式业务逻辑（按功能分块，用注释分隔）

示例：
```javascript
<script setup>
// 导入区
import { ref, computed, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

// Props
const props =defineProps({})

// 生命周期
onMounted(() => {})

// —————————————————— 功能1：列表表格数据相关 ——————————————————
const tableLoading = ref(false)
const tableData = ref([])

const getListData = () => { /* ... */ }

// —————————————————— 功能2：新增/编辑相关 ——————————————————
const dialogVisible = ref(false)
// ...
</script>
```

### 1.2 CSS/Less 命名规范

- 顶层容器：`.page-container`
- 每个逻辑区块：`<section class="xxx-section">`
- 内部结构：`.xxx-header` / `.xxx-header-title` / `.xxx-content` / `.xxx-content-list` / `.xxx-content-item`
- 所有类名全小写，kebab-case
- 类名描述"是什么"而非"看起来怎样"
- 样式必须用根类名包裹（Less 嵌套）
- 必须开启 `<style lang="less" scoped>`

### 1.3 代码风格约束

- 禁止提交 `console.log`、`debugger`（提交前必须删除）
- 注释精简、克制，只保留有价值的信息
- 优先使用 `const`，仅在需要重新赋值时用 `let`
- 删除无用代码（包括注释掉的大段代码）
- 异步操作必须处理 loading/error 状态

### 1.4 异步操作标准

所有接口请求必须包含完整的 loading 生命周期管理：

```javascript
// 方式1：async/await + try/catch/finally
const fetchData = async () => {
  loading.value = true
  try {
    const res = await api.get(...)
    data.value = res.data
  } catch (err) {
    ElMessage.error('加载失败')
  } finally {
    loading.value = false
  }
}

// 方式2：mixAxios 链式调用
const fetchData = () => {
  loading.value = true
  mixAxios.get(...)
    .then((response) => { data.value = response.data })
    .finally(() => { loading.value = false })
}
```

---

## 2. API 规范

### 2.1 响应格式

成功响应：`{ data: { ... } }`

```javascript
// 返回列表
return { data: { list: [], pagination: { current_page: 1, total: 20, page_size: 10 } } }
// 返回成功消息
return { data: { message: "创建成功" } }
```

失败响应：`{ code: 0, data: { message: "..." } }`

```javascript
catch (error) {
  return { code: 0, data: { message: "操作失败: 字段不能为空" } }
}
```

### 2.2 时间字段处理

时间字段（如 `created_at`）必须通过 `formatTime()` 格式化后再返回。

### 2.3 其他规定

- 新增接口通过分组区分模块，后台接口命名需增加 `admin` 前缀
- 废弃接口及时下架或备注
- 查询数据时，默认不返回 `deleted_at` 非空的记录
- 多表操作、批量处理时，使用事务处理

---

## 3. SQL 规范

### 3.1 命名规范

- 表名：小写字母 + 下划线分隔，如 `user_info`、`training_class`
- 字段名：小写字母 + 下划线分隔
- 布尔字段：`is_` 前缀，如 `is_enabled`
- 时间字段：`_at` 后缀，如 `created_at`
- 状态字段：`_status` 后缀，如 `audit_status`

### 3.2 通用字段

每张表必须包含：

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | INT | 主键，自增 |
| `created_at` | TIMESTAMP | 创建时间 |
| `updated_at` | TIMESTAMP | 更新时间 |

可选字段：`deleted_at`、`created_by`、`updated_by`

### 3.3 数据类型选择

| 场景 | MySQL | 达梦 (DM) |
|------|-------|-----------|
| 主键 id | INT(11) | INT |
| 状态/布尔 | TINYINT | NUMBER(1) |
| 金额 | DECIMAL(10,2) | DECIMAL(10,2) |
| 时间 | TIMESTAMP | TIMESTAMP |

### 3.4 约束和默认值

- 主键、必填字段：`NOT NULL`
- 可选字段：`NULL DEFAULT NULL`
- 状态字段：`DEFAULT 0`
- 每个字段必须添加 `COMMENT '说明'`

### 3.5 MySQL 示例

```sql
CREATE TABLE `training_class` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `class_name` VARCHAR(255) NOT NULL COMMENT '班级名称',
  `status` TINYINT NULL DEFAULT 0 COMMENT '状态：0-未开班 1-进行中 2-已结业',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) COMMENT = '培训班级';
```

### 3.6 达梦 (DM) 示例

```sql
CREATE TABLE `training_class` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `class_name` VARCHAR(255) NOT NULL COMMENT '班级名称',
  `status` NUMBER(1) NULL DEFAULT 0 COMMENT '状态：0-未开班 1-进行中 2-已结业',
  `created_at` TIMESTAMP NULL DEFAULT SYSTIMESTAMP COMMENT '创建时间',
  `updated_at` TIMESTAMP NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
);
```

### 3.7 反模式清单

| 反模式 | 正确做法 |
|--------|---------|
| 字段名用驼峰 | 统一用下划线分隔 |
| 缺少 COMMENT | 每个字段必须加注释 |
| 时间字段用 DATETIME | 统一用 TIMESTAMP |
| 状态字段用 VARCHAR | 用 TINYINT / NUMBER(1) |
| 缺少 created_at/updated_at | 每张表必须包含 |
| 主键用 UUID 且无索引 | 用 INT 自增，或 UUID 加索引 |
