"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 2000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.post('/kapier/api/gmail/watch', (req, res) => {
    console.log(`Recieved notification from gmail: `, req.body);
});
app.listen(PORT, () => {
    console.log(`Server Listening on port: ${PORT}`);
});