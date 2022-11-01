import { Context } from "./types";

import { allow, rule, IRules, shield, deny } from "graphql-shield";

const isAuthenticated = rule({ cache: "contextual" })(
  async (_parent: any, _args: any, ctx: Context, info: any) => {
    return ctx.user ? true : false;
  }
);

const Query = {
  "*": allow,

  user: isAuthenticated,
  users: isAuthenticated,

  post: isAuthenticated,
  posts: isAuthenticated,

  comment: isAuthenticated,
  comments: isAuthenticated,
};

const Mutation = {
  register: allow,
  login: allow,
  forgetPassword: allow,
  resetPassword: allow,
  logout: isAuthenticated,

  updateFollower: isAuthenticated,
  updateFollowing: isAuthenticated,

  createUser: allow,
  updateUser: isAuthenticated,
  deleteUser: isAuthenticated,

  createMediaUrl: isAuthenticated,
  createPost: isAuthenticated,
  updatePost: isAuthenticated,
  deletePost: isAuthenticated,

  likePost: isAuthenticated,

  createComment: isAuthenticated,
  updateComment: isAuthenticated,
  deleteComment: isAuthenticated,
};

const rules: IRules = {
  Query,
  Mutation,
};

const permissions = shield(rules);

export default permissions;
