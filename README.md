# NestJS .env config Module

NestJS .env package allows you easily use .env file to store your app configs.

```bash
npm i nestjs-dotenv
```

Then register module in your root app.module

```javascript
import { ConfigModule } from 'nestjs-dotenv';

@Module({
	imports: [
		// ...
		ConfigModule.forRoot(),
	],
})
export class AppModule {}
```

It will load `.env` file from your project root. If you need to change it's path just pass it to `forRoot` method like this:

```javascript
ConfigModule.forRoot(myPath);
```

To use ConfigService in any service or controller just inject it with `@ConfigInjection` decorator in the constructor:

```javascript
import { ConfigService, ConfigInjection } from 'nestjs-dotenv';

constructor(
	@ConfigInjection() private readonly configService: ConfigService
) {}
```

To get a value from .env file just call `get()` method:

```javascript
this.configService.get('JIRA_TOKEN');
```

-   JIRA_TOKEN - name of your key in `.env` file:

```
JIRA_TOKEN=0000000000000
```
