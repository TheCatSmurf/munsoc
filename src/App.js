import React, { useState } from 'react';
import './App.css';


// Import images
import thumbnail1 from './images/thumbnail1.jpg';
import thumbnail2 from './images/thumbnail2.jpeg';
import thumbnail3 from './images/thumbnail3.jpeg';
import thumbnail4 from './images/thumbnail4.jpg';
import thumbnail5 from './images/thumbnail5.jpeg';
import thumbnail6 from './images/thumbnail6.jpg';
import caricature1 from './images/caricature1.jpg';
import caricature2 from './images/caricature2.jpg';
import caricature3 from './images/caricature3.jpg';
import { Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// Import Modal
import Modal from 'react-modal';
import QuizGame from './components/QuizGame.js';

Modal.setAppElement('#root'); // This is for accessibility purposes

const handleLinkClick = (e) => {
  e.target.classList.add('gavel-click');

  // Remove the class after the animation completes to reset
  setTimeout(() => {
      e.target.classList.remove('gavel-click');
  }, 200); // Match the duration of the animation in milliseconds
};

function App() {
  // State to manage modal visibility and selected image
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1>MUNSoc</h1>
        </div>
        <nav className="App-nav">
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About Us</a>
          <a href="#contact" onClick={handleLinkClick}>Contact Us</a>
          <a href="#join" onClick={handleLinkClick}>Join Us</a>
        </nav>
      </header>

      <main className="App-body">
        {/* Article Boxes */}
        <div className="article-box">
          <img className="article-thumbnail" src={thumbnail1} alt="Article 1" />
          <div className="article-headline">Take a look at the most iconic moments throughout the FIFA World Cups</div>
        </div>
        
        <div className="article-box">
          <img className="article-thumbnail" src={thumbnail2} alt="Article 2" />
          <div className="article-headline">Israel and Hezbollah trade their most intense fire in months and then pull back</div>
        </div>
        <br />
        <div className="article-box">
          <img className="article-thumbnail" src={thumbnail4} alt="Article 4" />
          <div className="article-headline">Reviving Diplomacy: MEC's First Post-COVID MUN Sparks Unforgettable Moments and Connections </div>
        </div>
          



        {/* Caricature Section */}
        <section className="caricature-section">
          <h2 style={{ color: 'white' }}>Caricatures</h2>
          <div className="caricature-box" onClick={() => openModal(caricature1)}>
            <img className="caricature-image" src={caricature1} alt="Caricature 1" />
            <div className="caricature-title">Pee-suasive Politics</div>
          </div>
          <div className="caricature-box" onClick={() => openModal(caricature2)}>
            <img className="caricature-image" src={caricature2} alt="Caricature 2" />
            <div className="caricature-title">Out on a Limb</div>
          </div>
          <div className="caricature-box" onClick={() => openModal(caricature3)}>
            <img className="caricature-image" src={caricature3} alt="Caricature 3" />
            <div className="caricature-title">Uncle's Sketchy Business: Drawing the Line at Arrest!</div>
          </div>
        </section>
        <QuizGame />  
      </main>

      <footer className="App-footer">
        <div className="social-media-links">
          <h3>Follow Us:</h3>
          <a href="https://www.instagram.com/mec_munsoc/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <Instagram />
          </a>
          <a href="https://x.com/reachmecmun?lang=en" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <Twitter/>
          </a>
          <a href="https://www.linkedin.com/company/mecmunsoc/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <LinkedIn />
          </a>
        </div>
        <p>© 2024 MUNSoc. All Rights Reserved </p>
      </footer>

      {/* Modal for Enlarged Image */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal" overlayClassName="Overlay">
        <button onClick={closeModal} style={{ float: 'right', background: 'none', border: 'none', color: 'white', fontSize: '24px' }}>×</button>
        <img src={selectedImage} alt="Enlarged" style={{ width: '100%', height: 'auto' }} />
      </Modal>
    </div>
  );
}



export default App;
