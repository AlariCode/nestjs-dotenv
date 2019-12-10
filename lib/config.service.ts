import * as dotenv from 'dotenv';

export class ConfigService {
	private envConfig: { [prop: string]: string };

	constructor(path?: string) {
		this.reload(path);
	}

	public get(key: string): string {
		return this.envConfig[key];
	}

	public reload(path?: string) {
		this.envConfig = dotenv.config(path ? { path } : null).parsed;
	}
}
