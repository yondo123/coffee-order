import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
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

export const ImageHalf = styled.div`
  width: 50%;
  height: 50%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
