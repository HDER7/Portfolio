/* eslint-disable jsx-a11y/alt-text */
import './App.css';

function App() {
  return (
    <>
      <header className="header">
          <nav className="navbar">
              <div className="navbar-container container">
                  <div>
                      <h1 className="navbar-brand">Heider Rivas</h1>
                  </div>
                  <ul className="menu-items">
                      <li><a href="#about">About</a></li>
                      <li><a href="#my-works">Portfolio</a></li>
                      <li><a href="#contact-me">Contact</a></li>
                  </ul>
              </div>
          </nav>
          <div className="home-content" id="home-page">
              <div className="name">
                  <h1>Hi, I'm Heider</h1>
                  <p>A Web Developer in training.</p>
              </div>
              <div className="angle-down-icon">
                  <a href="#about"><i className="fas fa-angle-down"></i></a>
              </div>
          </div>
      </header>
      <section className="about-me" id="about">
          <div className="container">
              <div className="about-content">
                  <div className="left-content">
                      <div>
                          <h1 className="about-heading">About Me</h1>
                      </div>
                      <img src="http://127.0.0.1:5500/public/Me.png"/>
                      <p>I am 18 year old, <a href="https://www.tdea.edu.co">TDEA</a> student studied at Carrasquilla College.
                          I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new
                          things; the more, the better.
                      </p>
                      <div className="work-arrow">
                          <p><a href="#my-works">Check out my work <i className="fas fa-arrow-down"></i></a></p>
                      </div>
                  </div>
              <div className="skills">
                  <div className="right-content">
                      <div>
                          <h1 className="skills-heading">My Skills</h1>
                      </div>
                      <div className="skills-bar">
                          <div className="bar">
                              <div className="info">
                                  <span>HTML</span>
                              </div>
                              <div className="progress-line"><span className="html"></span></div>
                              <div className="bar">
                              <div className="info">
                                  <span>CSS</span>
                              </div>
                              <div className="progress-line"><span className="css"></span></div>
                              <div className="bar">
                              <div className="info">
                                  <span>BOOTSTRAP</span>
                              </div>
                              <div className="progress-line"><span className="bootstrap"></span></div>
                              <div className="bar">
                              <div className="info">
                                  <span>JAVASCRIPT</span>
                              </div>
                              <div className="progress-line"><span className="javascript"></span></div>
                              <div className="bar">
                                  <div className="info">
                                      <span>TYPESCRIPT</span>
                                  </div>
                                  <div className="progress-line"><span className="type"></span></div>
                                  <div className="bar">
                                      <div className="info">
                                          <span>REACT</span>
                                      </div>
                                      <div className="progress-line"><span className="react"></span></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="work-arrow-2">
              <p><a href="#my-works">Check out my work <i className="fas fa-arrow-down"></i></a></p>
          </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section id="my-works">
          <div className="portfolio">
              <div className="proj-heading">
                  <h1>Portfolio</h1>
              </div>
              <div className="portfolio-content container">
                  <div className="proj-1">
                      <img src="http://127.0.0.1:5500/src/Captura%20de%20pantalla%202.png"/>
                          <div className="proj1-details">
                              <i className="fab fa-html5"></i>
                              <i className="fab fa-css3-alt"></i>
                              <i className="fab fa-js"></i>
                              <h2>Notes</h2>
                              <p>Build Using HTML,CSS,JS</p>
                              <button><a href="http://127.0.0.1:5500/src/Block%20de%20notas/Untitled-1.html" target="blank">View <i className="fas fa-external-link-alt"></i></a></button>
                          </div>
                      </div>
                      <div className="proj-2">
                          <img src="http://127.0.0.1:5500/src/Captura%20de%20pantalla%20.png"/>
                          <div className="proj2-details">
                              <i className="fab fa-html5"></i>
                              <i className="fab fa-css3-alt"></i>
                              <i className="fab fa-js"></i>
                              <h2>Calculator</h2>
                              <p>Build Using HTML,CSS,JS</p>
                              <button><a href="http://127.0.0.1:5500/src/%231.html" target="blank">View <i className="fas fa-external-link-alt"></i></a></button>
                          </div>
                      </div>
                      <div className="more-work">
                  </div>    
              </div>
          </div>
      </section>
      <div className="contact" id="contact-me">
          <div className="container">
              <div className="contact-content">
                  <h2>Contact Me</h2>
                  <p className="mail">Get in touch with me <i className="fas fa-arrow-right"></i><a href="mailto:heiderarb@gmail.com"> heiderarb@gmail.com</a></p>
                  <p className="links">Or find me on:</p>
                  <a href="https://www.linkedin.com/in/heider-andres-rivas-baldosea-a0b59a18b/" target="blank"><i className="fab fa-linkedin">Linkedin</i></a>
                  <a href="a" ><i className="fab fa-github"></i> Github</a>
                  <a href="https://twitter.com/ImHder" target="blank"><i className="fab fa-twitter"> Twitter</i></a>
                  <a href="https://www.instagram.com/heiderbc/" target="blank"><i className="fab fa-instagram"></i> Instagram</a>
              </div>
          </div>
        </div>
    </>
  );
}
export default App;
