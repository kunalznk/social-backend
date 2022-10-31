import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const createPost = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user } = ctx;
  const { title, content, mediaPath, mediaFormat, tagUsers } = args.input;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        mediaFormat,
        mediaPath,
        authorId: user?.id,
        Tag: {
          create: tagUsers.map((userId: number) => {
            return { userId };
          }),
        },
      },
    });
    return post;
  } catch (error) {
    handleError(error);
  }
};

const updatePost = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user } = ctx;
  const { postId, title, content, tagUsers } = args.input;
  // to check if owner of post is updating it ?
  try {
    if (tagUsers?.length > 0) {
      const taggedUsers = await prisma.tag.findMany({
        where: {
          userId: {
            in: tagUsers,
          },
        },
      });

      // here filter which tags are remove and added accordingly update it
    }
    const post = await prisma.post.update({
      where: {
        id: parseInt(postId),
      },
      data: {
        title,
        content,
        // Tag :
      },
    });
    return post;
  } catch (error) {
    handleError(error);
  }
};

const deletePost = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user } = ctx;
  const { postId } = args.input;
  try {
    await prisma.post.deleteMany({
      where: {
        authorId: user?.id,
        id: parseInt(postId),
      },
    });
    return true;
  } catch (error) {
    handleError(error);
  }
};

export default {
  createPost,
  updatePost,
  deletePost,
};
