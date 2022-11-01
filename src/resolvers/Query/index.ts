import userQuery from "./user";
import postQuery from "./post";
import commentQuery from "./comment";
export default {
  ...userQuery,
  ...postQuery,
  ...commentQuery,
};
