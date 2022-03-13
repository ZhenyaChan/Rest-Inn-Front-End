import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AboutPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
      <Header />
      <main>
        <section id="about-section">
          <div className="container">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia porro aperiam fugit rerum sed sequi excepturi esse animi, ipsum explicabo soluta at quaerat, quidem accusantium velit. Voluptatibus ipsum sapiente facere!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;