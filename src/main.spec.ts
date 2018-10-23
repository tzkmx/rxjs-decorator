import { Subscribe, Observable } from "./main";
import { Observable as O } from "rxjs";

test("default", () => {
    class T {
        @Observable
        public a: string = "";
    }

    let t = new T();
    console.log(t.a);
})
