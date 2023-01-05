import { v2 as cloudinary } from "cloudinary";
export const uplaodImg = async (img) => {
  const folder = "/NEXTBID";
  const imageConfig = {
    height: 1080,
    width: 1920,
    folder,
    crop: "fit",
    quality: 90,
  };

  const imgObj = await cloudinary.uploader.upload(img, imageConfig);

  return imgObj.secure_url;
};
