import Image, { ImageProps } from 'next/image';


export default function ScalableImage({
  className = '',
  containerClassName = '',
  src,
  alt = '',
  width,
  height,
  isLoading = false,
  ...props
}: ScalableImageProps) {
  return (
    <div
      className={`relative ${containerClassName}`}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
      }}
    >
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
  isLoading?: boolean;
  src: string;
  width?: number;
  height?: number;
}