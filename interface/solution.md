> 创建interface.ts文件内容为：

```typescript
interface Person {
    name: string;
    age?: number;
    readonly gender: string;
    [propName: string]: any;
}
let person:Person = {
  name: 'supershy',
  age: 32,
  gender: 'male',
  location: "xi'an"
}

export default person
```
