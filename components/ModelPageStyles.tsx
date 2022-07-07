import styled from 'styled-components';

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  position: relative;
`;

const OptionsRightSidebar = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 1px;
`

const Subtitle = styled.h5`
  font-size: 20px;
  font-weight: 600;
  margin: 12px 0;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 12px 0;
`

const SmallText = styled.span`
  font-size: 12px;
  font-weight: 300;
`

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export {
  PageContainer,
  ContentWrapper,
  OptionsRightSidebar,
  CenteredContent,
  Title,
  Subtitle,
  Text,
  SmallText,
  Features,
  Feature
};
