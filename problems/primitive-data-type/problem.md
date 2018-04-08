# 原始数据类型

JavaScript 的类型分为两种：原始数据类型（[Primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)）和对象类型（Object types）。

原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 [ES6 中的新类型 `Symbol`](http://es6.ruanyifeng.com/#docs/symbol)。

本节主要介绍**前五种**原始数据类型在 TypeScript 中的应用。

## 布尔值

布尔值是最基础的数据类型，在 TypeScript 中，使用 `boolean` 定义布尔值类型：

```javascript
let isDone: boolean = false;

// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过
```

注意，使用构造函数 `Boolean` 创造的对象**不是**布尔值：

```javascript
let createdByNewBoolean: boolean = new Boolean(1);

// index.ts(1,5): error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
// 后面约定，注释中标出了编译报错的代码片段，表示编译未通过
```

事实上 `new Boolean()` 返回的是一个 `Boolean` 对象：

```javascript
let createdByNewBoolean: Boolean = new Boolean(1);
```

直接调用 `Boolean` 也可以返回一个 `boolean` 类型：

```javascript
let createdByBoolean: boolean = Boolean(1);
```

在 TypeScript 中，`boolean` 是 JavaScript 中的基本类型，而 `Boolean` 是 JavaScript 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样，不再赘述。

# 挑战

创建一个名为boolean.ts的文件，并在文件中创建一个`isFile`的变量，类型为布尔，值为true

```typescript
let isFile:boolean = true

export default isFile
```
