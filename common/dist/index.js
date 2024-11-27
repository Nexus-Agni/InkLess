"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
// Signup 
exports.signupInput = zod_1.default.object({
    name: zod_1.default.string().optional(),
    email: zod_1.default.string().email().min(1, "Email is required"),
    password: zod_1.default.string().min(1, "Password is required")
});
//Signin
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email().min(1, "Email is required"),
    password: zod_1.default.string().min(1, "Password is required")
});
// Create Blog 
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string().min(1, "Title is required"),
    content: zod_1.default.string().min(1, "Content is required")
});
// Update Blog
exports.updateBlogInput = zod_1.default.object({
    id: zod_1.default.string().min(1, "Id is required"),
    title: zod_1.default.string().min(1, "Title is required"),
    content: zod_1.default.string().min(1, "Content is required")
});
