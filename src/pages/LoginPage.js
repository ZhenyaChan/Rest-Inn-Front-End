import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const LoginPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <section id="login-section">
          <div className="container">
            <h1>Login</h1>
            <form action="">
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="text" id="email" />
              
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>

              <div className="form-control">
                <button className="btn" type="submit">Login</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;