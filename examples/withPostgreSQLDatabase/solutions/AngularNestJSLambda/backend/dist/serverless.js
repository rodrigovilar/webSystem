"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const aws_serverless_express_1 = __importDefault(require("aws-serverless-express"));
const express_1 = __importDefault(require("express"));
const app_module_1 = require("./app.module");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const expressApp = express_1.default();
        const adapter = new platform_express_1.ExpressAdapter(expressApp);
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, adapter);
        yield app.init();
        return aws_serverless_express_1.default.createServer(expressApp);
    });
}
exports.bootstrap = bootstrap;
let cachedServer;
exports.handler = (event, context) => {
    if (!cachedServer) {
        bootstrap().then(server => {
            cachedServer = server;
            return aws_serverless_express_1.default.proxy(server, event, context);
        });
    }
    else {
        return aws_serverless_express_1.default.proxy(cachedServer, event, context);
    }
};
//# sourceMappingURL=serverless.js.map