# 数组的类型

在 TypeScript 中，数组类型有多种定义方式，比较灵活。

## 「类型 + 方括号」表示法

最简单的方法是使用「类型 + 方括号」来表示数组：

```typescript
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

数组的项中**不允许**出现其他的类型：

```typescript
let fibonacci: number[] = [1, '1', 2, 3, 5];

// index.ts(1,5): error TS2322: Type '(number | string)[]' is not assignable to type 'number[]'.
//   Type 'number | string' is not assignable to type 'number'.
//     Type 'string' is not assignable to type 'number'.
```

上例中，`[1, '1', 2, 3, 5]` 的类型被推断为 `(number | string)[]`，这是联合类型和数组的结合。

数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：

```typescript
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8');

// index.ts(2,16): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

上例中，`push` 方法只允许传入 `number` 类型的参数，但是却传了一个 `string` 类型的参数，所以报错了。

## 数组泛型

也可以使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：

```typescript
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

关于泛型，可以参考[泛型](https://ts.xcatliu.com/advanced/generics.html)一章。

## 用接口表示数组

接口也可以用来描述数组：

```typescript
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

`NumberArray` 表示：只要 `index` 的类型是 `number`，那么值的类型必须是 `number`。

## any 在数组中的应用

一个比较常见的做法是，用 `any` 表示数组中允许出现任意类型：

```typescript
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
```

## 类数组

类数组（Array-like Object）不是数组类型，比如 `arguments`：

```typescript
function sum() {
    let args: number[] = arguments;
}

// index.ts(2,7): error TS2322: Type 'IArguments' is not assignable to type 'number[]'.
//   Property 'push' is missing in type 'IArguments'.
```

事实上常见的类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等：

```typescript
function sum() {
    let args: IArguments = arguments;
}
```

关于内置对象，可以参考[内置对象](https://ts.xcatliu.com/basics/built-in-objects.html)一章。
# 挑战

* 创建一个名为array.ts的文件
* 在此文件中创建一个`numberArr`的变量，类型为数值类型数组，值为[1, 2, 3]
* 在此文件中创建一个`unionArr`的变量，类型为数值和字符串联合类型数组，值为[1, 'qiqi', 3]
* 在此文件中创建一个`anyArr`的变量，类型为任意类型数组，值为[1, 'qiqi', true]
* 对外提供这三个值
