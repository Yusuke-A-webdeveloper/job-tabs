import styled from 'styled-components';

const Btns = ({ jobs, setValue, value }) => {
  return (
    <Wrapper className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={index}
            className={`btn ${value === index && 'active'}`}
            onClick={() => setValue(index)}
          >
            {item.company}
          </button>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .btn {
    background: none;
    border: none;
    margin: 10px;
    padding: 10px;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  .btn.active {
    border-left: 2px solid rgba(162, 28, 175, 1);
    color: rgba(0, 0, 0, 1);
  }
  @media (max-width: 700px) {
    .btn {
      margin: 5px;
      font-size: 20px;
    }
  }
`;

export default Btns;
