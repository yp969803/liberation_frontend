import React from 'react'
import mainLogo from '../../assets/liberation_logo.png'
import '../../styles/footer.css'
const Footer = () => {
  return (
    <footer className="bg-dark p-2 text-ce">
        <div className="container p-5">
            <div className="row">
                <div className="col p-2">
                  
                   <img src={mainLogo} alt='' className='img-fluid'/>
                   <p className='text-start text-secondary my-2 fs-6 py-2'>World class to improve your buisness</p>
                   <p className='text-start text-secondary my-6'>Enter your Email <i className="bi bi-arrow-right" style={{color:'rgba(35,35,35,1)'}}></i></p>
                   <p className='text-start text-secondary my-6'>facebook/email/twitter</p>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col">
                      <p className='text-start text-white fs-5'>Our Company</p>
                      <p className='text-start text-secondary py-2 fs-6 my-0'>Our Company</p>
                      <p className='text-start text-secondary fs-6'>Mission</p>
                      <p className='text-start text-secondary fs-6'>Services</p>
                      <p className='text-start text-secondary fs-6'>Our Team</p>
                      <p className='text-start text-secondary fs-6'>Our Partners</p>
                      <p className='text-start text-secondary fs-6'>Careers</p>
                    </div>
                    <div className="col">
                    <p className='text-start text-white fs-5'>Industries</p>
                      <p className='text-start text-secondary py-2 fs-6 my-0'>Industries</p>
                      <p className='text-start text-secondary fs-6'>Finance</p>
                      <p className='text-start text-secondary fs-6'>Education</p>
                      <p className='text-start text-secondary fs-6'>Legal</p>
                      <p className='text-start text-secondary fs-6'>Non Profit</p>
                      <p className='text-start text-secondary fs-6'>Startups</p>
                    </div>
                    <div className="col">
                    <p className='text-start text-white fs-5'>Contact</p>
                    <p className='text-start text-secondary fs-6 my-0'>Inquiry</p>
                    <p className='text-start text-white fs-6'>emai@liberationcoaches.com</p>
                    
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </footer>
  )
}

export default Footer
