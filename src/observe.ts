import { of } from "rxjs";

export function Observable(target: any, key: string) {
    target[key] = of(target[key]);
}