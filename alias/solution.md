> 创建alias.ts文件内容为：

```typescript
type NameOrString = string : number;
function getType(name: NameOrString):string {
    return typeof name;
}

export default getType;
```
