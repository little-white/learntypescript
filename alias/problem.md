# 类型别名

类型别名用来给一个类型起个新名字。

## 简单的例子

```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
```

上例中，我们使用 `type` 创建类型别名。

类型别名常用于联合类型。

# 挑战

* 创建一个名为alias.ts的文件
* 在此文件中创建一个类型为字符串和数值的联合类型，名为NameOrString
* 创建一个名为getType的函数，参数为name类型为NameOrString，返回值为name的类型
* 对外默认提供此方法
