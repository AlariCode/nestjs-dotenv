import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import { NEST_CONFIG_PROVIDER } from './constants';

@Global()
@Module({})
export class ConfigModule {
	static forRoot(path?: string): DynamicModule {
		const configServiceProvider: Provider = {
			provide: NEST_CONFIG_PROVIDER,
			useFactory: () => new ConfigService(path),
		};
		return {
			module: ConfigModule,
			providers: [configServiceProvider],
			exports: [configServiceProvider],
		};
	}
}
