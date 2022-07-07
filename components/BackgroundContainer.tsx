import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const ImageContainer = styled.div<{src: string}>`
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const BackgroundContainer = ({
  src,
  children
}: {
  src: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ImageContainer src={src}>
      {children}
    </ImageContainer>
  );
};

export default BackgroundContainer;
