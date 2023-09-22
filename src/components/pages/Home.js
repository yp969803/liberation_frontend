import React from 'react'
import home1 from '../../assets/home1.jpg'
import union from '../../assets/union.png'
import lic from '../../assets/lic.png'
import reliance from '../../assets/reliance.png'
import nestle from '../../assets/nestle.png'
import { Link } from 'react-router-dom'
import '../../styles/home.css'
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'
import rect1 from '../../assets/rect1.png'
import rect2 from '../../assets/rect2.png'
import rect3 from '../../assets/rect3.png'
const Home = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" id='carousel'>
          <div className="carousel-item active">
            <img src={home1} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <p className='p1'>DIGITAL CORPORATE TRAINING</p>
              <h3 className='h1'>Transforming buisness to compete for tomorrow.</h3>
              <p><Link to="/contact" className="btn mt-3" id="btn1">Contact Us</Link></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home1} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <p className='p1'>DIGITAL CORPORATE TRAINING</p>
              <h3 className='h1'>Transforming buisness to compete for tomorrow.</h3>
              <p><Link to="/contact" className="btn mt-3" id="btn1">Contact Us</Link></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home1} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <p className='p1'>DIGITAL CORPORATE TRAINING</p>
              <h3 className='h1'>Transforming buisness to compete for tomorrow.</h3>
              <p><Link to="/contact" className="btn mt-3" id="btn1">Contact Us</Link></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container" id="companyContainer">
        <div className="col px-2">
          <img src={union} alt='' />
        </div>
        <div className="col  px-3">
          <img src={nestle} alt='' />
        </div>
        <div className="col px-3">
          <img src={reliance} alt='' />
        </div>
        <div className="col px-3">
          <img src={lic} alt='' />
        </div>
        <div className="col px-3">
          <img src={union} alt='' />
        </div>
        <div className="col px-3">
          <img src={nestle} alt='' />
        </div>
        <div className="col px-3">
          <img src={reliance} alt='' />
        </div>

      </div>
      <div className="row p-2">
        <div className="col-12 col-md-12 col-lg-4 ">
          <div className="card text-white text-center bg-dark pb-2">
            <i className="bi bi-patch-minus-fill"></i>
            <h3 className="card-title">Benefit1</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos excepturi voluptates ducimus nihil nesciunt nulla iusto mollitia cum enim! Inventore amet optio quam laudantium quae, alias explicabo animi, ipsa sit praesentium saepe laboriosam mollitia magnam adipisci. Dicta, incidunt reprehenderit!
            </p>
            <button className="btn btn-warning text-dark btn2 text-center">Read More</button>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4 ">
          <div className="card text-white text-center bg-dark pb-2">
            <i className="bi bi-patch-minus-fill"></i>
            <h3 className="card-title">Benefit2</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos excepturi voluptates ducimus nihil nesciunt nulla iusto mollitia cum enim! Inventore amet optio quam laudantium quae, alias explicabo animi, ipsa sit praesentium saepe laboriosam mollitia magnam adipisci. Dicta, incidunt reprehenderit!
            </p>
            <button className="btn btn-warning text-dark btn2">Read More</button>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <div className="card text-white text-center bg-dark pb-2">
            <i className="bi bi-patch-minus-fill"></i>
            <h3 className="card-title">Benefit3</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos excepturi voluptates ducimus nihil nesciunt nulla iusto mollitia cum enim! Inventore amet optio quam laudantium quae, alias explicabo animi, ipsa sit praesentium saepe laboriosam mollitia magnam adipisci. Dicta, incidunt reprehenderit!
            </p>
            <button className="btn btn-warning text-dark btn2">Read More</button>
          </div>
        </div>
      </div>

      <div className="container p-2" >
        <h4 className='text-center display-5 '>The Liberal difference end</h4>
        <h4 className='text-center display-5 '>with it coaches</h4>
        <div id="card1">
          <div className="col-12 col-md-6 col-lg-3 mx-4 my-2 p-2 ">
            <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body ">
                <img src={person1} alt='' className="img-fluid rounded-circle" />
                <h3 className="card-title py-2">Jack Wilson</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et animi voluptate aut ipsam aperiam, corporis obcaecati odio distinctio dolores?</p>
                <p className="socials">
                  <i className="bi bi-twitter text-center mx-1"> </i>
                  <i className="bi bi-facebook text-center mx-1"> </i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-4 my-2 p-2">
            <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <img src={person2} alt='' className="img-fluid rounded-circle" />
                <h3 className="card-title py-2">Jeff Geering</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et animi voluptate aut ipsam aperiam, corporis obcaecati odio distinctio dolores?</p>
                <p className="socials">
                  <i className="bi bi-twitter text-center mx-1"> </i>
                  <i className="bi bi-facebook text-center mx-1"> </i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mx-4 my-2 p-2">
            <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <img src={person3} alt='' className="img-fluid rounded-circle" />
                <h3 className="card-title py-2">Maria Thomas</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam et animi voluptate aut ipsam aperiam, corporis obcaecati odio distinctio dolores?</p>
                <p className="socials">
                  <i className="bi bi-twitter text-center mx-1"> </i>
                  <i className="bi bi-facebook text-center mx-1"> </i>
                </p>
              </div>
            </div>
          </div>
        </div>


        <button type="button" className="btn btn-info" id='btn2'>Find more about us</button>

      </div>
      <div className="col p-2">
        <div className="row">
          <div className="col px-5">
            <p className='text-start text-secondary'>OUR SOUTIONS</p>
            <p className="display-2 my-0">Digitaly Powered,</p>
            <p className="display-2 my-0">Career Insppired,</p>
            <p className="display-2 my-0">Consulting Firm</p>
          </div>
          <div className="col x-5">
            <p className='text-start text-secondary my-5'>Lorem ipsum riores natus nobis, incidunt excepturi quos consectetur atque saepe officiis! Modi repudiandae repellendus eaque nisi similique.</p>
          </div>
        </div>
        <div id="card1">
          <div cassName="card">
            <img src={rect1} cassName="card-img-top" alt="Fissure in Sandstone" />
            <div cassName="card-body">
              <h5 cassName="card-title">Card title</h5>
              <p cassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#!" cassName="btn btn-primary">Button</a>
            </div>
          </div>

          <div cassName="card">
            <img src={rect2} cassName="card-img-top" alt="Fissure in Sandstone" />
            <div cassName="card-body">
              <h5 cassName="card-title">Card title</h5>
              <p cassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#!" cassName="btn btn-primary">Button</a>
            </div>
          </div>
          L
          <div cassName="card">
            <img src={rect3} cassName="card-img-top" alt="Fissure in Sandstone" />
            <div cassName="card-body">
              <h5 cassName="card-title">Card title</h5>
              <p cassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#!" cassName="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
