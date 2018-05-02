# 元组

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

元组起源于函数编程语言（如 F#）,在这些语言中频繁使用元组。

## 简单的例子

定义一对值分别为 `string` 和 `number` 的元组：

```typescript
let xcatliu: [string, number] = ['Xcat Liu', 25];
```

当赋值或访问一个已知索引的元素时，会得到正确的类型：

```typescript
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
xcatliu[1] = 25;

xcatliu[0].slice(1);
xcatliu[1].toFixed(2);
```

也可以只赋值其中一项：

```typescript
let xcatliu: [string, number];
xcatliu[0] = 'Xcat Liu';
```

但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。

```typescript
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
```

```typescript
let xcatliu: [string, number] = ['Xcat Liu'];

// index.ts(1,5): error TS2322: Type '[string]' is not assignable to type '[string, number]'.
//   Property '1' is missing in type '[string]'.
```

```typescript
let xcatliu: [string, number];
xcatliu = ['Xcat Liu'];
xcatliu[1] = 25;

// index.ts(2,1): error TS2322: Type '[string]' is not assignable to type '[string, number]'.
//   Property '1' is missing in type '[string]'.
```

## 越界的元素

当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型：

```typescript
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];
```

上面的例子中，数组的第三项满足联合类型 `string | number`。

```typescript
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
xcatliu.push('http://xcatliu.com/');
xcatliu.push(true);

// index.ts(4,14): error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

当访问一个越界的元素，也会识别为元组中每个类型的联合类型：

```typescript
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25, 'http://xcatliu.com/'];

console.log(xcatliu[2].slice(1));

// index.ts(4,24): error TS2339: Property 'slice' does not exist on type 'string | number'.
```

之前提到过，[如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的属性或方法。](https://ts.xcatliu.com/basics/union-types.html#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95)

# 挑战

* 创建一个名为tuple.ts的文件
* 在此文件中定义一对值分别为 string 和 number 的元组`something`，值为['hello world', 123, 'test']
* 对外默认提供此值
