import { mo } from "./../../db/minio";
import { handleError } from "../../utils/common";
import { Context } from "../../utils/types";

export const createMediaUrl = async (_parent: any, args: any, ctx: Context, _info: any) => {
  try {
    const { fileName } = args.input
    const isBucketExist = await mo.bucketExists("media");
    if (!isBucketExist) {
      await mo.makeBucket("media", "us-west-1");
      await mo.getBucketPolicy("Media");
      console.log("Bucket Created");
    } else {
      console.log("Bucket Exists");
    }

    const mediaPostPath = await mo.presignedPutObject("media", fileName);
    const mediaGetPath = await mo.presignedGetObject("media", fileName);

    return {
      mediaGetPath,
      mediaPostPath,
    };
  } catch (error) {
    handleError(error);
  }
};

export default {
  createMediaUrl,
};
