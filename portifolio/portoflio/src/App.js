import React from "react";
import "./assets/css/main.css";
import "./assets/css/noscript.css";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(45, 77, 71)" }} className="landing">

      {/* Header */}
      <header id="header" className="alt">
        <h1 style={{ backgroundColor: "rgb(50, 58, 55)" }}>
          <a href="/">PORTFOLIO</a>
        </h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a href="#menu" className="menuToggle">
                <span>Menu</span>
              </a>
              <div id="menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/generic">Generic</a></li>
                  <li><a href="/elements">Elements</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#">Log In</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section id="banner">
        <div className="inner">
          <h2 style={{ backgroundColor: "rgb(45, 51, 51)" }}>
            WELCOME MY PORTFOLIO
          </h2>
          <p>THIS IS MY WORK PLACE</p>
        </div>
        <a href="#one" className="more scrolly">
          Learn More
        </a>
      </section>

      {/* About */}
      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>ABOUT ME</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
              eleifend.
            </p>
          </header>
          <ul className="icons major">
            <li><span className="icon fa-gem major style1" /></li>
            <li><span className="icon fa-heart major style2" /></li>
            <li><span className="icon solid fa-code major style3" /></li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="two" className="wrapper alt style2">
        <section className="spotlight">
          <div className="image">
            <img src="images/pic01.jpg" alt="Project 1" />
          </div>
          <div className="content">
            <h2>Magna primis lobortis</h2>
            <p>Aliquam ut ex ut augue consectetur interdum.</p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src="images/pic02.jpg" alt="Project 2" />
          </div>
          <div className="content">
            <h2>Tortor dolore feugiat</h2>
            <p>Aliquam ut ex ut augue consectetur interdum.</p>
          </div>
        </section>

        <section className="spotlight">
          <div className="image">
            <img src="images/pic03.jpg" alt="Project 3" />
          </div>
          <div className="content">
            <h2>Augue eleifend aliquet</h2>
            <p>Aliquam ut ex ut augue consectetur interdum.</p>
          </div>
        </section>
      </section>

      {/* CTA */}
      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Arcue ut vel commodo</h2>
            <p>Aliquam ut ex ut augue consectetur interdum.</p>
          </header>
          <ul className="actions stacked">
            <li><a href="#" className="button fit primary">Activate</a></li>
            <li><a href="#" className="button fit">Learn More</a></li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <ul className="icons">
          <li><a href="#" className="icon brands fa-twitter" /></li>
          <li><a href="#" className="icon brands fa-facebook-f" /></li>
          <li><a href="#" className="icon brands fa-instagram" /></li>
          <li><a href="#" className="icon brands fa-dribbble" /></li>
          <li><a href="#" className="icon solid fa-envelope" /></li>
        </ul>
        <ul className="copyright">
          <li>Email: EVANAYELE7@GMAIL.COM</li>
          <li>Contact: 0982834527</li>
        </ul>
      </footer>

    </div>
  );
}

export default App;