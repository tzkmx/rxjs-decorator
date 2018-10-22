import { of } from "rxjs";

export function Observable(target: any, key: string, ddescriptor: PropertyDescriptor) {
    target[key] = of(target[key]);
}