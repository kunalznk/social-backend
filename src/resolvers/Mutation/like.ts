import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const likePost = async (_parent: any, args: any, ctx: Context, _info: any) => {
  const { prisma, user } = ctx;
  const { isLike, postId } = args.input;
  try {
    if (isLike) {
      const likes = await prisma.like.create({
        data: {
          postId: parseInt(postId),
          userId: user?.id,
        },
      });
    } else {
      await prisma.like.delete({
        where: {
          post_like_key: {
            postId: parseInt(postId),
            userId: user?.id,
          },
        },
      });
    }

    return true;
  } catch (error) {
    handleError(error);
  }
};

export default {
  likePost,
};
