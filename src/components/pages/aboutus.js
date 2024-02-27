import React from 'react';
import '../../App.css';
import './aboutus.css';

export default function AboutUs() {

  return (
    <section className='about-section'>
      <div className='about-container'>
        <div className='row'>

          <div className='col-md-12 text-center'>
            <h2 className='about-title'>The Team Behind Oak Digital</h2>
              <p className='about-text'>We are Oak Digital.</p>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>

              <img src='images/camille_photo.jpg' className='team-img' alt='team pic' />
              <h3>CAMILLE ABOU KHALIL</h3>
              <div className='team-info'>
                <h4>CEO and Founding Partner</h4>
                <p>As CEO and Founding Partner, Camille brings visionary leadership and unparalleled expertise to Oak Digital. With a proven track record of innovation and strategic insight, he spearheads our mission to revolutionize the IT and digital sector through Oak's unique approach. Under his guidance, we're driving unprecedented growth and shaping the future of digitalization.</p>

                <ul className='team-icon'>

                  <li><a href='https://www.linkedin.com/in/laura-naderimehr/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin-in'></i></a></li>
                  <li><a href='https://twitter.com/LauraNaderimehr' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'></i></a></li>
                  <li><a href='https://github.com/LauraNaderimehr' target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i></a></li>


                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>

              <img src='images/laura-img.jpeg' className='team-img' alt='team pic' />
              <h3>LAURA NADERIMEHR</h3>
              <div className='team-info'>
                <h4>Associate and Web Developer</h4>
                <p>Our Web Developer and Associate, Laura, is a tech-savvy dynamo dedicated to crafting seamless online experiences. With a keen eye for detail and a passion for innovation, she plays a pivotal role in bringing our digital vision to life. From coding brilliance to creative problem-solving, she is integral to our success, ensuring our online presence remains cutting-edge and user-centric.</p>

                <ul className='team-icon'>

                  <li><a href='https://www.linkedin.com/in/laura-naderimehr/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin-in'></i></a></li>
                  <li><a href='https://twitter.com/LauraNaderimehr' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'></i></a></li>
                  <li><a href='https://github.com/LauraNaderimehr' target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i></a></li>


                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-md-4'>
            <div className='team-item'>

              <img src='images/antoine-img.png' className='team-img' alt='team pic' />
              <h3>ANTOINE ORTEGA</h3>
              <div className='team-info'>
                <h4>Independent Associate</h4>
                <p>Our Web Developer, Antoine, is a digital maestro dedicated to refining online experiences. As an Independent Associate, he contributes expertise in coding and design, elevating our digital presence. With a knack for innovation and a commitment to excellence, he helps shape our online identity, ensuring it remains dynamic and engaging.</p>

                <ul className='team-icon'>

                  <li><a href='https://www.linkedin.com/in/laura-naderimehr/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin-in'></i></a></li>
                  <li><a href='https://twitter.com/LauraNaderimehr' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'></i></a></li>
                  <li><a href='https://github.com/LauraNaderimehr' target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i></a></li>


                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
