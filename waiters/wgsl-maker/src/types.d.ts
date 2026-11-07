import { Context } from "./context";
import { context, toWGSL } from "./symbols";

export interface wgsl_representation {
    [toWGSL](context: Context): string;
    [context]: Set<Context>;
}
