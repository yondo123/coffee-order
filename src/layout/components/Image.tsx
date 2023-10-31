import { ImageWrapper } from '@layout/mixins/image';

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  placement?: 'center';
}

export const Image = ({ src, alt = 'image', height = '100%', width = '100%', placement, ...restProps }: ImageProps) => {
  return (
    <ImageWrapper placement={placement} width={width} height={height}>
      <img src={src} alt={alt} width={width} height={height} {...restProps} />
    </ImageWrapper>
  );
};
