import Image, { ImageProps } from 'next/image';
import { FC } from 'react';


const ScalableImage: FC<ScalableImageProps> = ({
  className = '',
  containerClassName = '',
  src,
  alt = '',
  isLoading = false,
  ...props
}) => {
  return (
    <div className={`relative ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full ${className}`}
        style={{ objectFit: 'cover' }}
        {...props}
      />
    </div>
  );
};

interface ScalableImageProps extends Omit<ImageProps, 'src' | 'loading'> {
  className?: string;
  containerClassName?: string;
  skrimClassName?: string;
  isLoading?: boolean;
  src: string;
}

export default ScalableImage;

