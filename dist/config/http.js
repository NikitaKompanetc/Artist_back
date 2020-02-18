"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.CONFIG_TOKEN = 'http';
exports.default = config_1.registerAs(exports.CONFIG_TOKEN, () => {
    return {
        cors: {
            origin: true,
            methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            exposedHeaders: ['Link'],
            credentials: true,
        },
        server: {
            port: process.env.PORT || 8000,
        },
    };
});
//# sourceMappingURL=http.js.map