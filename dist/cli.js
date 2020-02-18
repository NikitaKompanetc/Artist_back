"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nestjs_command_1 = require("nestjs-command");
const cli_module_1 = require("./cli/cli.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(cli_module_1.CliModule, {
        logger: false,
    });
    return app.select(nestjs_command_1.CommandModule).get(nestjs_command_1.CommandService).exec();
}
bootstrap();
//# sourceMappingURL=cli.js.map