import React from 'react';
import "./Paragraph.css"
import { Link } from 'react-router-dom';

function Paragraphs() {
  return (
    <div>
        <div>
            <div className='bodyText'>We are committed to helping you to create food that is both delicious and nutritious, and that meets the needs of your customers.</div>
            <div className='bodyTexts'>Unlock the potential of your food research and development portfolio with our expert consultancy services. We have a team of experienced and qualified food scientists and technologists who can help you with all aspects of food research and development, from ideation to commercialization.</div>
        </div>
        <div className='Featured'>
          <span className="bi bi-dash-lg"></span>
          <dt className='feaText'>Featured Products</dt>
          <span className="bi bi-dash-lg"></span>
        </div>

        <div>
          <div className=' cardOfPara row  '>
            <div className='Cards col-12 col-sm-6 '>
              <Link to="Chowmein"><img className='imgCard' src="Millet_pakoda_premix.png" alt="" /></Link>
            </div>
            <div className='Cards col-12 col-sm-6 '>
              <Link to="Kebab"><img className='imgCard' src="sam-moghadam-khamseh-i3A-se17VAg-unsplash.jpg" alt="" /></Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Paragraphs