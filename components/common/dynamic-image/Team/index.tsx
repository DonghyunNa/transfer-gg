import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

type Props = ImageProps & {
  src: string;
};

function DynamicImage({ src, ...props }: Props) {
  const [isError, setError] = useState(false);
  return (
    <Image
      src={isError ? '/logo.png' : `/team/${src}.png`}
      onError={() => setError(true)}
      width='20'
      height='20'
      {...props}
    />
  );
}

export default DynamicImage;
