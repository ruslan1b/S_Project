import styled from 'styled-components';

export const Box = styled.div`
  background: #b3dcfd;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Container = styled.div`
    max-width: 1000px;
    flex: 0 0 auto;
    height: 100%;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;

`;

export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 0.8rem;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 1rem;
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
`;