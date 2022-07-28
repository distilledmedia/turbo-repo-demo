import Image from 'next/image';
import { ImageProps } from './Image.types';
export const Img = ({ src, alt, width, height, priority }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
};
