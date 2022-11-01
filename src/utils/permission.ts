import { Context } from "./types";

import { allow, rule, IRules, shield, deny } from "graphql-shield";

const isAuthenticated = rule({ cache: "contextual" })(
  async (_parent: any, _args: any, ctx: Context, info: any) => {
    return ctx.user ? true : false;
  }
);

const Query = {
  "*": allow,

};

const Mutation = {
  register: allow,
  login: allow,
  forgetPassword: allow,
  resetPassword: allow,
  logout: isAuthenticated,

};

const rules: IRules = {
  Query,
  Mutation,
};

const permissions = shield(rules);

export default permissions;
