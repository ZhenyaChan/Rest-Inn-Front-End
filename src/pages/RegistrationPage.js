import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const RegistrationPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
      <section id="register-section">
          <div class="container">
            <h1>Register</h1>
            <form action="">
              <div className="form-control">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />
 
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" />
              </div>


              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
                <label htmlFor="conPassword">Confirm Password</label>
                <input type="password" id="conPassword" />
              </div>

              <div className="form-control">
                <button className="btn" type="submit">Create Account</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;