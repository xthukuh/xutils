/**
 * Custom `JSON.stringify` with extended custom replacer
 * - Default value for `undefined` value argument
 * - Fix `Error`, `Set`, `Map` stringify
 * - Circular reference fixes
 *
 * @param value  Parse value (`undefined` value is replaced with `_undefined` argument substitute value)
 * @param space  Indentation space
 * @param _undefined  Default `undefined` argument `value` substitute (default `null`)
 * @returns
 */
export declare const _jsonStringify: (value: any, space?: string | number | null | undefined, _undefined?: any) => string;
/**
 * Custom `JSON.parse` with error catch and default result on parse failure
 *
 * @param value
 * @param _default
 * @returns
 */
export declare const _jsonParse: (value: string, _default?: any) => any;
/**
 * Clone value via json stringify and parse
 *
 * @param value  Parse value
 * @param space  Indentation space
 * @param _undefined  Default `undefined` argument `value` substitute (default `null`)
 */
export declare const _jsonClone: <TReturn extends unknown>(value: any, space?: string | number | undefined, _undefined?: any) => TReturn;
