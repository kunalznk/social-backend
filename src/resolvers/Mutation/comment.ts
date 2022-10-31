import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const createComment = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user } = ctx;
  const { postId, comment } = args.input;
  try {
    const Comment = await prisma.comment.create({
      data: {
        comment,
        postId: parseInt(postId),
        authorId: user?.id,
      },
    });

    return Comment;
  } catch (error) {
    handleError(error);
  }
};

const updateComment = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user } = ctx;
  const { commentId, comment } = args.input;
  try {
    const Comment = await prisma.comment.update({
      data: {
        comment,
      },
      where: {
        id: parseInt(commentId),
      },
    });

    return Comment;
  } catch (error) {
    handleError(error);
  }
};

const deleteComment = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user } = ctx;
  const { commentId } = args.input;
  try {
    await prisma.comment.delete({
      where: {
        id: parseInt(commentId),
      },
    });
    return true;
  } catch (error) {
    handleError(error);
  }
};

export default {
  createComment,
  updateComment,
  deleteComment,
};
