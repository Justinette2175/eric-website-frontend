import { AdvancedImage, responsive } from "@cloudinary/react";
import { useCloudinaryContext } from "../Contexts/CloudinaryContext";

type CloudinaryImageProps = {
  imageName: string;
};

export function CloudinaryImage({ imageName }: CloudinaryImageProps) {
  const { cld } = useCloudinaryContext();

  if (!cld) {
    return null;
  }

  const myImage = cld.image(imageName);

  return (
    <div>
      <AdvancedImage cldImg={myImage} plugins={[responsive({ steps: 200 })]} />
    </div>
  );
}
