import { Observable } from "rxjs";

export function Subscribe(target: Observable<any>) {
    return function(t: any, key: string) {
        if(typeof t[key] === "function") {
            (target as any).subscriptions = (target as any).subscriptions ? (target as any).subscriptions : {};
            (target as any).subscriptions[t.name + "-" + key] = target.subscribe(t[key]);
        }
    }
}