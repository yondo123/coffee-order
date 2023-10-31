import styled from '@emotion/styled';

export const ImageWrapper = styled.div<{ placement?: string; width?: string | number; height?: string | number }>`
  width: ${({ width }) => (width ? `${width}` : '100%')};
  height: ${({ height }) => (height ? `${height}` : '100%')};

  img {
    display: block;
    ${({ placement }) => placement === 'center' && `object-fit: cover; width: 100%; height: 100%;`}
  }
`;

export const ImageCenter = styled.div`
  width: 128px;
  height: 128px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
