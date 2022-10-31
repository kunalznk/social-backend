import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

export const likes = async (parent: any, _args: any, ctx: Context, _info: any) => {
  const { prisma, user } = ctx;
  
  try {
    const likes = await prisma.like.findMany({
        where:{
            postId: parent.id
        }
    })
    return likes;
  } catch (error) {
    handleError(error);
  }
};

