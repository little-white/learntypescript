> 创建function.ts文件内容为：

```typescript
function greeting(greetings: string = 'hello', name: string): string {
  return greetings + ' ' + name
}

export default greeting;
```
