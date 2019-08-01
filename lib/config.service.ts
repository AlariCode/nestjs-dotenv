import * as dotenv from 'dotenv';

export class ConfigService {
	private readonly envConfig: { [prop: string]: string };

	constructor(path?: string) {
		this.envConfig = dotenv.config(path ? { path } : null).parsed;
	}

	get(key: string): string {
		return this.envConfig[key];
	}
}
