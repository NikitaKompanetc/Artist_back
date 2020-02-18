"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const www_module_1 = require("./www/www.module");
const config_1 = require("@nestjs/config");
const http_1 = require("./config/http");
async function bootstrap() {
    const app = await core_1.NestFactory.create(www_module_1.WwwModule);
    const options = app.get(config_1.ConfigService).get(http_1.CONFIG_TOKEN);
    app.enableCors(options.cors);
    await app.listen(options.server.port);
}
bootstrap();
//# sourceMappingURL=server.js.map