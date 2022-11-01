import authQuery from "./auth";
import userQuery from "./user";
import postQuery from "./post";
import commentQuery from "./comment";
export default {
  ...authQuery,
  ...userQuery,
  ...postQuery,
  ...commentQuery,
};
