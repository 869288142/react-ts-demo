
// export function memorize<T extends (str: string) => string> (fn : T):T {
//     const cache = {}
//     type fnReturnType =  ReturnType<T>;
//     type fnParametersType =  Parameters<T>;
//     return function(...args: fnParametersType): fnReturnType {
//         return cache[args.join("")] || cache[args].apply(this, args)
//     }
// }