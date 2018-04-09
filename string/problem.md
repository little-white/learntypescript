## 字符串

使用 `string` 定义字符串类型：

```typescript
let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
```

编译结果：

```typescript
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
```

其中`` ` 用来定义 [ES6 中的模板字符串](http://es6.ruanyifeng.com/#docs/string#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2)，`${expr}` 用来在模板字符串中嵌入表达式。

# 挑战

* 创建一个名为string.ts的文件
* 在此文件中创建一个`name`的变量，类型为布数值，值为supershy
* 对外默认提供此值