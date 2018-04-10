# 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

## 什么是类型推论

以下代码虽然没有指定类型，但是会在编译的时候报错：

```typescript
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```typescript
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查**：

```typescript
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

> 原文请访问[类型推论](https://ts.xcatliu.com/basics/type-inference.html)

# 挑战

* 创建一个名为inference.ts的文件
* 在此文件中创建一个`name`的变量，没有类型，值为supershy
* 对外默认提供此值
