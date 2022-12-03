"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// const DIST_DIR = path.join(__dirname, '/dist');
const HTML_FILE = path_1.default.join(__dirname, 'game.html');
app.use(express_1.default.static(__dirname));
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
