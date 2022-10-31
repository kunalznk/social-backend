import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const post = async (_parent: any, args: any, ctx: Context, _info: any) => {
  const { prisma, user } = ctx;
  // const { } = args.input;
  // can we use it here for post resolve
  // add post private option if account is private
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(args.id),
      },
    });
    return post;
  } catch (error) {
    handleError(error);
  }
};

export const posts = async (parent: any, args: any, ctx: Context, _info: any) => {
  const { prisma, user } = ctx;
  try {
    const posts = await prisma.post.findMany({
      where: {
        authorId: parent?.id ?? user?.id,
      },
    });
    return posts;
  } catch (error) {
    handleError(error);
  }
};

export default {
  post,
  posts,
};
