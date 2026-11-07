import { context } from "./symbols";

export enum Context {
    TYPE_DEFINITION,
    TYPE,
    SCALAR,
    VALUE
}
export namespace Context {
    export function is(a: any, ctx: Context){
        return a[context]!==undefined&&a[context]===ctx; 
    }
}
export default Context