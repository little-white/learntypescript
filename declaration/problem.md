# 声明文件

当使用第三方库时，我们需要引用它的声明文件。

## 声明语句

假如我们想使用第三方库，比如 jQuery，我们通常这样获取一个 `id` 是 `foo` 的元素：

```typescript
$('#foo');
// or
jQuery('#foo');
```

但是在 TypeScript 中，我们并不知道 `$` 或 `jQuery` 是什么东西：

```typescript
jQuery('#foo');

// index.ts(1,1): error TS2304: Cannot find name 'jQuery'.
```

这时，我们需要使用 `declare` 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：

```typescript
declare var jQuery: (string) => any;

jQuery('#foo');
```

`declare` 定义的类型只会用于编译时的检查，编译结果中会被删除。

上例的编译结果是：

```typescript
jQuery('#foo');
```

## 声明文件

通常我们会把类型声明放到一个单独的文件中，这就是声明文件：

```typescript
// jQuery.d.ts

declare var jQuery: (string) => any;
```

> 我们约定声明文件以 `.d.ts` 为后缀。

然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：

```typescript
/// <reference path="./jQuery.d.ts" />

jQuery('#foo');
```

## 第三方声明文件

当然，jQuery 的声明文件不需要我们定义了，已经有人帮我们定义好了：[jQuery in DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jquery/index.d.ts)。

我们可以直接下载下来使用，但是更推荐的是使用工具统一管理第三方库的声明文件。

社区已经有多种方式引入声明文件，不过 [TypeScript 2.0 推荐使用 @types 来管理](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)。

@types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：

```shell
npm install @types/jquery --save-dev
```

可以在[这个页面](http://microsoft.github.io/TypeSearch/)搜索你需要的声明文件。

# 挑战

* 创建一个名为declaration.ts的文件
* 用declaration声明一个`name`的变量，类型为字符串。
* name赋值为'qiqi'
* 对外默认提供此值
