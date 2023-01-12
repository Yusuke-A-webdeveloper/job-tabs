import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Btns from './components/Btns';
import Footer from './components/Footer';
import Main from './components/Main';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { id, title, dates, duties, company } = jobs[value];

  return (
    <Wrapper>
      <div className="title">
        <h1>job exeperience</h1>
      </div>
      <article>
        <Btns jobs={jobs} setValue={setValue} value={value} />
        <Main
          key={id}
          dates={dates}
          title={title}
          duties={duties}
          company={company}
        />
      </article>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .title {
    position: relative;
    width: 100%;
    height: 80px;
    background: var(--title-bg);
    h1 {
      text-align: center;
      color: #fff;
      padding: 25px;
      font-size: 25px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  article {
    display: grid;
    grid-template-columns: 1fr 5fr;
    width: 100%;
    height: calc(100vh - 120px);
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
  }
  @media (max-width: 700px) {
    article {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 415px) {
    position: relative;
    width: 100%;
    height: 130vh;
    article {
      height: calc(130vh - 120px);
    }
    h2 {
      font-size: 20px;
    }
  }
  @media (max-width: 670px) and (max-height: 415px) {
    position: relative;
    width: 100%;
    height: 180vh;
    article {
      height: calc(180vh - 120px);
    }
  }
`;

export default App;
