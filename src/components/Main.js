import styled from 'styled-components';

const Main = ({ title, company, dates, duties }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <h4>{dates}</h4>
      <p>{duties}</p>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 800px;
  h2 {
    color: #a21caf;
    font-size: 30px;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  h3 {
    color: #fff;
    background: #d946ef;
    width: 25%;
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
  }
  h4 {
    color: #d946ef;
    font-size: 15px;
    margin-bottom: 20px;
  }
  p {
    color: #a3a3a3;
  }
  @media (max-width: 700px) {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }
`;

export default Main;
