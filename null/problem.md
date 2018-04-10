## Null 和 Undefined

在 TypeScript 中，可以使用 `null` 和 `undefined` 来定义这两个原始数据类型：

```typescript
let u: undefined = undefined;
let n: null = null;
```

`undefined` 类型的变量只能被赋值为 `undefined`，`null` 类型的变量只能被赋值为 `null`。

与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：

```typescript
// 这样不会报错
let num: number = undefined;
```

```
// 这样也不会报错
let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```typescript
let u: void;
let num: number = u;

// index.ts(2,5): error TS2322: Type 'void' is not assignable to type 'number'.
```

# 挑战

- 创建一个名为null.ts的文件
- 在此文件中创建一个`n`的变量，类型为null，值为null
- 对外默认提供此值
