import React from 'react';
import {Link} from 'react-router-dom';

import {
  HomeContainer,
  NameTitle,
  SubTitle,
  MainButton,
} from './Home.style';


const Home = () => {
  return (
    <HomeContainer>
      <NameTitle>Hi!</NameTitle>
      <NameTitle>I Am Tamara Muñoz</NameTitle>
      <SubTitle>FRONT-END DEVELOPER</SubTitle>

      <Link to="/profile">
        <MainButton>About me</MainButton>
      </Link>
    </HomeContainer>
  );
}

export default Home;
