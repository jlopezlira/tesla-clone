import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const ImageContainer = styled.div`
  background-image: url("/images/M3-Homepage-Desktop-LHD.jfif");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const ContainerWithBgImg = ({
  src,
  children
}: {
  src: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ImageContainer>
      {children}
    </ImageContainer>
  );
};

export default ContainerWithBgImg;
