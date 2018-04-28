# 字符串字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

## 简单的例子

```typescript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

// index.ts(7,47): error TS2345: Argument of type '"dbclick"' is not assignable to parameter of type 'EventNames'.
```

上例中，我们使用 `type` 定了一个字符串字面量类型 `EventNames`，它只能取三种字符串中的一种。

注意，**类型别名与字符串字面量类型都是使用 type 进行定义。**

# 挑战

* 创建一个名为advancealias.ts的文件
* 在此文件中定义一个字符串字面量类型，名为Name，共有三种字符串：qiqi，supershy，little-white
* 创建一个名为hi的函数，参数为name类型为Name，返回值'hi' + name
* 对外默认提供此方法
