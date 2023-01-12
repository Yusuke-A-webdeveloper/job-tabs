import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <p>
        Copy right {new Date().getFullYear()} JPENwebdeveloper. All Right
        Reserved
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  height: 40px;
  background: var(--title-bg);
  p {
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
`;

export default Footer;
