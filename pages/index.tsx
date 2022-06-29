import type { NextPage } from 'next';
import BackgroundContainer from '../components/BackgroundContainer';
import CustomHead from '../components/Head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <CustomHead title={'Tesla clone'}/>
      <BackgroundContainer src={'/images/M3-Homepage-Desktop-LHD.jfif'}>
        <Header />
      </BackgroundContainer>
    </>
  );
};

export default Home;

// Image JSX Element
