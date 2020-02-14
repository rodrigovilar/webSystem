"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const book_http_module_1 = require("./book/book-http.module");
const database_module_1 = require("./database/database.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [graphql_1.GraphQLModule.forRootAsync({
                useFactory: () => {
                    const schemaModuleOptions = {};
                    if (process.env.NODE_ENV !== 'production' || process.env.IS_OFFLINE) {
                        schemaModuleOptions.autoSchemaFile = 'src/schema.gql';
                    }
                    else {
                        schemaModuleOptions.typePaths = ['dist/*.gql'];
                    }
                    return Object.assign({ context: ({ req }) => ({ req }), playground: true, introspection: true }, schemaModuleOptions);
                },
            }),
            book_http_module_1.BookHttpModule,
            database_module_1.DatabaseModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map