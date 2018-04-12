> 创建assertion.ts文件内容为：

```typescript
function getLength(age: string | number): number {
  return (<string>age).length || (<number>age).toString().length;
}

export default getLength;
```
