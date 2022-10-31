import authMutation from "./auth";
import mediaMutation from "./minio";
import userMutation from "./user";
import postMutation from "./post";
import commentMutation from "./comment";
import likeMutation from "./like"

export default {
  ...authMutation,
  ...mediaMutation,
  ...userMutation,
  ...postMutation,
  ...commentMutation,
  ...likeMutation
};
