import { ImagePaths } from "@/src/types";
import { Image, ImageSource } from "expo-image";

const transactionsImages: Record<ImagePaths, ImageSource> = {
  salary: require("../../assets/icons/salary.svg"),
  gift: require("../../assets/icons/gift.svg"),
  market: require("../../assets/icons/market.svg"),
  savings: require("../../assets/icons/savings.svg"),
  transport: require("../../assets/icons/transport.svg"),
  rent: require("../../assets/icons/rent.svg"),
  medicine: require("../../assets/icons/medicine.svg"),
  food: require("../../assets/icons/food.svg"),
  entrertainment: require("../../assets/icons/entrertainment.svg"),
  other: require("../../assets/icons/savings.svg"),
};

interface CustomImageProps {
  imagePath: ImagePaths;
}

const CustomImage = ({ imagePath }: CustomImageProps) => {
  return (
    <Image
      source={transactionsImages[imagePath]}
      style={{ width: 24, height: 24 }}
      tintColor={"white"}
      contentFit="contain"
    />
  );
};

export default CustomImage;
