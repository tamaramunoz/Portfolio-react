import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #EB73FF6B;
  background: linear-gradient(180deg, rgba(235, 115, 255, 0.42) 14.68%, rgba(253, 151, 255, 0.42) 27.19%, rgba(127, 115, 255, 0.42) 82.85%, rgba(33, 55, 255, 0.42) 97.18%);
  background: -moz-linear-gradient(top, #EB73FF6B, #2138FF6B);
  background: linear-gradient(180deg, rgba(235, 115, 255, 0.42) 14.68%, rgba(253, 151, 255, 0.42) 27.19%, rgba(127, 115, 255, 0.42) 82.85%, rgba(33, 55, 255, 0.42) 97.18%);
  padding-left: 4rem;
`;

export const NameTitle = styled.div`
  font-family: Fredoka One;
  font-size: 65px;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-align: left;
  color: var(--primary-color);
`;

export const SubTitle = styled.div`
  font-family: Fredoka One;
  font-size: 70px;
  font-weight: 400;
  letter-spacing: 0.125em;
  text-align: left;
  color: var(--yellow);
  text-shadow: -7px 6px 0px rgba(113, 76, 166, 0.87);
`;

export const MainButton = styled.div`
  color: var(--primary-color);
  background: #548455c9
  background: linear-gradient(180deg, rgba(235, 115, 255, 0.42) 14.68%, rgba(253, 151, 255, 0.42) 27.19%, rgba(127, 115, 255, 0.42) 82.85%, rgba(33, 55, 255, 0.42) 97.18%);
  background: -moz-linear-gradient(top, #EB73FF6B, #2138FF6B);
  background: linear-gradient(180deg, rgba(235, 115, 255, 0.42) 14.68%, rgba(253, 151, 255, 0.42) 27.19%, rgba(127, 115, 255, 0.42) 82.85%, rgba(33, 55, 255, 0.42) 97.18%);
  border: none;
  box-shadow: -10px 12px 0px rgba(14, 12, 136, 0.56);
  border-radius: 50px;
  padding: 1rem 3rem;
  font-family: 'Source Sans Pro', sans-serif;
`;
