import React from 'react';
import './Body.css';
import Projects from '../Projects/Projects'
import FadeInSection from '../FadeInSection/FadeInSection';


function Body() {
  return (
    <FadeInSection>
      <div className='bodyContainer'>
        <Projects />
      </div>
    </FadeInSection>
  );
}

export default Body;
