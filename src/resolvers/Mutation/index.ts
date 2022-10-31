import authMutation from "./auth";
import userMutation from "./user";

export default {
  ...authMutation,
  ...userMutation,
};
