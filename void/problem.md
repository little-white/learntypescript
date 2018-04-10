## 空值

JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 `void` 表示没有任何返回值的函数：

```typescript
function alertName(): void {
    alert('My name is Tom');
}
```

声明一个 `void` 类型的变量没有什么用，因为你只能将它赋值为 `undefined` 和 `null`：

```typescript
let unusable: void = undefined;
```

# 挑战

* 创建一个名为void.ts的文件
* 在此文件中创建一个`unusable`的变量，类型为void，值为undefined
* 对外默认提供此值
