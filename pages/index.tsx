import type { NextPage } from 'next';
import ContainerWithBgImg from '../components/ContainerWithBgImg';
import CustomHead from '../components/Head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <CustomHead />
      <ContainerWithBgImg src={'/images/M3-Homepage-Desktop-LHD.jfif'}>
        <Header />
      </ContainerWithBgImg>
    </>
  );
};

export default Home;

// Image JSX Element
