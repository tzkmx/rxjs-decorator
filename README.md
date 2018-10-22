# RxJS-Decorator
Decorators for RxJS

example

```ts
import { Obserable, Subscribe } from "rxjs-decorator";
class Cat {
    @Obserable
    private weight: number = 10;

    @Subscribe(this.weight)
    private Log(x) {
        console.log(x);
    }
}
```