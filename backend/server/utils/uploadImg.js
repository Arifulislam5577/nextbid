import { v2 as cloudinary } from "cloudinary";
export const uplaodImg = async (img) => {
  const folder = "/NEXTBID";
  const imageConfig = {
    height: 550,
    width: 1092,
    folder,
    crop: "fit",
    quality: 90,
  };

  try {
    const imgObj = await cloudinary.uploader.upload(img, imageConfig);
    return imgObj.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
