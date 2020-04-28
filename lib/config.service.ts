import * as dotenv from 'dotenv';
import { configType, Enum, NO_ENUMOBJECT_ERROR, UNKNOWN_TYPE } from './constants';

export class ConfigService {
	private envConfig: { [prop: string]: string };

	constructor(path?: string) {
		this.reload(path);
	}

	public get(key: string) {
		return this.envConfig[key];
	}

	public getWithType<T>(key: string, type: configType, enumObject?: Enum<T>) {
		const value = this.envConfig[key];
		switch (type) {
			case 'number':
				return Number(value);
			case 'string':
				return value;
			case 'boolean':
				return value?.toLowerCase() === 'true';
			case 'array':
				return value.substr(1).substr(-1).split(',');
			case 'enum':
				if (!enumObject) {
					throw new Error(NO_ENUMOBJECT_ERROR);
				}
				return enumObject[value];
			case 'object':
				try {
					const obj = JSON.parse(value);
					return obj;
				} catch (error) {
					return error;
				}
			default:
				throw new Error(UNKNOWN_TYPE);
		}
	}

	public reload(path?: string) {
		this.envConfig = dotenv.config(path ? { path } : null).parsed;
	}
}
