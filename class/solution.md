> 创建class.ts文件内容为：

```typescript
abstract class Animal {
    protected name;
    public constructor(name) {
        this.name = name;
    }
    public abstract hello();
}

class Person extends Animal {
  public hello(){
    return 'hello ' + this.name;
  }
}

export default Person;
```
