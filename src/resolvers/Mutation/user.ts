import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const updateUser = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user: User } = ctx;
  const { input } = args;

  try {
    const user = await prisma.user.update({
      data: input,
      where: {
        id: User?.id,
      },
    });

    return user;
  } catch (error) {
    handleError(error);
  }
};

const deleteUser = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user: User } = ctx;

  try {
    await prisma.user.delete({
      where: {
        id: User?.id,
      },
    });

    // delete post comment likes tags from system;

    return true;
  } catch (error) {
    handleError(error);
  }
};

const updateFollower = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  try {
    const { prisma, user: User } = ctx;
    const { followingId, status } = args.input;

    if (status) {
      // add entry to follower table
      // update follwer will handle acccept or reject if acc is private

      await prisma.follower.upsert({
        create: {
          userId: User?.id,
          followerId: followingId,
          isAccepted: User.isPublic,
        },
        update: {
          isAccepted: true,
        },
        where: {
          user_followe_key: {
            userId: User?.id,
            followerId: followingId,
          },
        },
      });
    } else {
      await prisma.follower.delete({
        where: {
          user_followe_key: {
            userId: User?.id,
            followerId: parseInt(followingId),
          },
        },
      });
    }
    return true;
  } catch (error) {
    handleError(error);
  }
};

const updateFollowing = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  try {
    const { prisma, user: User } = ctx;
    const { followingId } = args.input;

    await prisma.follower.delete({
      where: {
        user_followe_key: {
          userId: User?.id,
          followerId: parseInt(followingId),
        },
      },
    });

    return true;
  } catch (error) {
    handleError(error);
  }
};

export default {
  updateUser,
  deleteUser,
  updateFollower,
  updateFollowing,
};
