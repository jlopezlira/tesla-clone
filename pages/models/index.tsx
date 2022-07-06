import React, { useEffect, useState } from 'react';
import { TeslaVehicle } from '../../types/api';
import styled from 'styled-components';
import Header from '../../components/Header';
import * as services from '../../services';
import * as S from '../../components/ModelPageStyles'
import Image from 'next/image';

const ModelSPage = () => {
  const [data, setData] = useState<TeslaVehicle>();

  useEffect(() => {
    services.getModelData('s').then(setData);
  }, []);

  //test

  return (
    <S.PageContainer>
      <Header />
      <S.ContentWrapper>
        <S.CenteredContent>
          <div style={{width: '100%', height: '100%'}}>
            <Image src={'/images/teslas.jpeg'} alt="" layout="fill" />
          </div>
        </S.CenteredContent>
        <S.OptionsRightSidebar>
          <S.Title>{data?.name}</S.Title>
          <S.Text>Est. Delivery: Nov 2022 - Feb 2023</S.Text>
          <S.Features>
            <S.Feature>
              <S.Subtitle>375mi</S.Subtitle>
              <S.SmallText>Range (est.)</S.SmallText>
            </S.Feature>
            <S.Feature>
              <S.Subtitle>375mi</S.Subtitle>
              <S.SmallText>Top Speed</S.SmallText>
            </S.Feature>
            <S.Feature>
              <S.Subtitle>375mi</S.Subtitle>
              <S.SmallText>0-60 mph</S.SmallText>
            </S.Feature>
          </S.Features>
        </S.OptionsRightSidebar>
      </S.ContentWrapper>
    </S.PageContainer>
  );
};

const Content = styled.div`
  width: 100%;
`;

export default ModelSPage;
