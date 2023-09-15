import React, { useState } from 'react';
import Modal from 'react-modal'; 
import './Navbar.css';
import Logo from '../images/whole.png';
import Search from '../images/search.png';
import Group from '../images/group3.png';
import facebook from '../images/facelogo.png';
import Google from '../images/googlesearch.png';

const Navbar = ({className}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false); // Track the current form state

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <img className="navbar-brand" src={Logo} width='150px' height='30px' alt="Logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className='search-contain'>
          <div className='search-box'>
            <img src={Search} alt="Search Icon" />
            <input type='text' placeholder='Search for your favorite groups in ATG' />
          </div>
        </div>

        <div className='login-register'>
          <div className='drop-box'>
            <h6>Create account <span onClick={openModal} className='free'>.It's free</span></h6>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={isSignIn ? "Sign In" : "Sign Up"} 
        ariaHideApp={false}
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-header">
          <div className='green'>
            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
          </div>
          <button type="button" className="close" onClick={closeModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                {isSignIn ? (
                  <form>
                    <h1>Sign In</h1>
                    <input className='input1' type='email' placeholder='Email' /><br></br>
                    <input className='input1' type='password' placeholder='Password' /><br></br>
                    <button className='button-s'>Sign In</button>
                  </form>
                ) : (
                  <form>
                    <h1>Create Account</h1>
                    <div className='user'>
                      <input type='text' placeholder='First Name' />
                      <input type='text' placeholder='Last Name' />
                    </div>
                    <input className='input1' type='email' placeholder='Email' /><br></br>
                    <input className='input1' type='password' placeholder='Password' /><br></br>
                    <input className='input1' type='password' placeholder='Confirm Password' />
                    <br></br>
                    <button className='button-s'>{isSignIn ? "Sign In" : "Sign Up"}</button>
                  </form>
                )}
                <div className='face'>
                  <h6> <img src={facebook} alt="Facebook" /> Sign up with FACEBOOK</h6>
                </div>
                <div className='google'>
                  <h6> <img src={Google} alt="Google" /> Sign up with GOOGLE</h6>
                </div>
              </div>
              <div className='col-md-5'>
                <h6>
                  {isSignIn ? (
                    <>
                      Don't have an account? <span onClick={toggleForm}>Create Account</span>
                    </>
                  ) : (
                    <>
                      Already have an account? <span onClick={toggleForm}>Sign In</span>
                    </>
                  )}
                </h6>
                <img src={Group} alt="Group" /><br></br>
                <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
