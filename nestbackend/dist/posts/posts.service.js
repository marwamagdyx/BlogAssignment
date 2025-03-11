"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_schema_1 = require("./post.schema");
let PostService = class PostService {
    postModel;
    constructor(postModel) {
        this.postModel = postModel;
    }
    async createPost(title, content) {
        const newPost = new this.postModel({ title, content });
        return newPost.save();
    }
    async likePost(postId) {
        const post = await this.postModel.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        post.likes.push('anonymous');
        await post.save();
        return 'Post liked';
    }
    async addComment(postId, comment) {
        const post = await this.postModel.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        post.comments.push(comment);
        await post.save();
        return post;
    }
    async getCommentsByPostId(postId) {
        const post = await this.postModel.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        return post.comments;
    }
    async fetchPosts() {
        return this.postModel.find().sort({ createdAt: -1 }).exec();
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostService);
//# sourceMappingURL=posts.service.js.map