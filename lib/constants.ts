export type configType = 'number' | 'string' | 'boolean' | 'array' | 'object' | 'enum';
export type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

export const NO_ENUMOBJECT_ERROR = 'No enumObject provided for enum';
export const UNKNOWN_TYPE = 'Unknown type';