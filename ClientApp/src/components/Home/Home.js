import React from 'react';
import { Container } from 'reactstrap';
import MainImage from '../../assets/images/main.png';
import School1 from '../../assets/images/school_1.jpg';
import School2 from '../../assets/images/school_2.jpg';
import School3 from '../../assets/images/school_3.jpg';

import './Home.css';

const Home = () => (
  <Container>
    <div>
      <section className='nav_section'>
        <div>
          <h1>
            GC Education <br></br>Curriculum Website
          </h1>
          <button>Get started</button>
        </div>
        <img height={400} src={MainImage} alt='123' />
      </section>
      <section className='middle_school'>
        <div>
          <h1>Middle School</h1>
          <p>
            At Stanford Online High school, high-achieving middle school
            students can pursue advanced coursework that challenges and prepares
            them for the rigors of our high school. The middle school curriculum
            extends the core values and components of our school’s academic
            program to grades 7 and 8.
          </p>
        </div>
        <div className='school_images'>
          <img height={250} src={School1} alt='123' />
          <img height={250} src={School2} alt='123' />
          <img height={250} src={School3} alt='123' />
        </div>
      </section>
    </div>
  </Container>
);

export default Home;
