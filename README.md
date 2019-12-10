# NestJS .env config Module

![alt cover](https://github.com/AlariCode/nestjs-dotenv/raw/master/img/logo.jpg)

**More NestJS libs on [alariblog.ru](https://alariblog.ru)**

[![npm version](https://badgen.net/npm/v/nestjs-dotenv)](https://www.npmjs.com/package/nestjs-dotenv)
[![npm version](https://badgen.net/npm/license/nestjs-dotenv)](https://www.npmjs.com/package/nestjs-dotenv)
[![npm version](https://badgen.net/github/open-issues/AlariCode/nestjs-dotenv)](https://github.com/AlariCode/nestjs-dotenv/issues)
[![npm version](https://badgen.net/github/prs/AlariCode/nestjs-dotenv)](https://github.com/AlariCode/nestjs-dotenv/pulls)

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
import { ConfigService } from 'nestjs-dotenv';

constructor(
	private readonly configService: ConfigService
) {}
```

## Get env value

To get a value from .env file just call `get()` method:

```javascript
this.configService.get('JIRA_TOKEN');
```

-   JIRA_TOKEN - name of your key in `.env` file:

```
JIRA_TOKEN=0000000000000
```

## Reloading file

To reload env dynamically use `reload()` method:

```javascript
this.configService.reload();
```
