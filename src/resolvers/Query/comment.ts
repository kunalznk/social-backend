import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const comment = async (_parent: any, args: any, ctx: Context, _info: any) => {
  const { prisma, user } = ctx;
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: parseInt(args.id),
      },
    });
    return comment;
  } catch (error) {
    handleError(error);
  }
};

export const comments = async (parent: any, args: any, ctx: Context, _info: any) => {
  const { prisma, user } = ctx;
  const {} = args.input;
  try {
    const comments = await prisma.comment.findMany({
      where: {
        postId: parent?.id
      }
    });
    return comments;
  } catch (error) {
    handleError(error);
  }
};

export default {
  comment,
  comments,
};
