import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TeslaVehicle } from '../types/api';
import styled from 'styled-components';
import Header from '../components/Header';
// import getData from './api/models'

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const ModelSPage = () => {
  const [data, setData] = useState<TeslaVehicle>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/models');
      setData(data);
    })();
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
};

// export async function getServerSideProps() {
//   // Call an external API endpoint to get posts
//   const data = await getData()

//   return {
//     props: {
//       data
//     }
//   };
// }

export default ModelSPage;
