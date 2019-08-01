import { Inject } from '@nestjs/common';
import { NEST_CONFIG_PROVIDER } from './constants';

export function ConfigInjection() {
	return Inject(NEST_CONFIG_PROVIDER);
}
