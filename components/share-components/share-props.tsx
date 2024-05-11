import React from 'react';
import Image from 'next/image';

interface ShareProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const ShareImageProps: React.FC<ShareProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default ShareImageProps;
