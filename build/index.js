"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const npm_check_updates_1 = __importDefault(require("npm-check-updates"));
(async () => {
    const upgrades = await (0, npm_check_updates_1.default)();
    console.log(upgrades);
})();
//# sourceMappingURL=index.js.map