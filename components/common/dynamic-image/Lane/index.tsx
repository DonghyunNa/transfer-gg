import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src'> & {
  lane: string;
};

function DynamicImage({ lane, ...props }: Props) {
  return <Image width='20' height='20' {...props} src={`/lane/${lane}.png`} />;
}

export default DynamicImage;
