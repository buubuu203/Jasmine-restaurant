import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='J letter'>
      </img>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>
          About us
        </h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'>
        </img>
        <p className='p__opensans'>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img className='' alt='about knife' src={images.knife}></img>
      </div>


      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>
          Our history
        </h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img'>
        </img>
        <p className='p__opensans'>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
