import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import avt from './assets/avt.jpg';
import SimpleModal from './components/SimpleModal';
import React, { useState } from 'react';

function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const playDemo = (title, link) => {
    setTitle(title);
    setLink(link);
    openModal();
  }

  return (
    <div className="App container-fluid">

      <header className="container py-3 px-3 px-lg-5">
        <div className="row align-items-center">
          <div className="col-6 col-lg-2">
            <h3 className="title-port m-0">Portfolio</h3>
          </div>
          <div className="col-6 col-lg-10">
            <nav className="navbar navbar-expand-lg justify-content-end">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="bi bi-list"></i>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-5 px-3 px-lg-5">

        {/* About */}
        <div id="about" className="row justify-content-center">
          {/* Avatar bên trái */}
          <div className="col-12 col-md-10 d-flex align-items-end gap-3">
            <img src={avt} alt="Avatar" className="avatar" />

            {/* Bong bóng message */}
            <div className="message-box">
              <div className="box-title mb-2">About me</div>
              <div className="box-content">
                Hi! <strong>I'm Dương, a final-year Software Engineering student</strong> with a passion
                for full stack development. I enjoy learning new things and turning
                ideas into practical, meaningful projects.
              </div>
              <div className="subtitle my-3">
                IUH - <span>Software Engineering</span> - 8/2021 - 12/2025
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div id="skills" className="row justify-content-center my-5">
          {/* Avatar bên trái */}
          <div className="col-12 col-md-10 d-flex align-items-end gap-3">
            <img src={avt} alt="Avatar" className="avatar" />

            {/* Bong bóng message */}
            <div className="message-box">
              <div className="box-title mb-2">Skills</div>

              <div className="box-content">
                I have experience across the full stack, with a strong focus on backend development.
                I’ve worked with backend technologies like <strong>Java (Spring Boot)</strong> and <strong>Node.js</strong>, and built interfaces using <strong>ReactJS</strong> and <strong>React Native</strong>.
                I'm comfortable working with both relational (<strong>MSSQL</strong>) and NoSQL (<strong>MongoDB</strong>) databases.
                I also have hands-on experience with cloud services (<strong>AWS</strong>), containerization using <strong>Docker</strong>, and development on <strong>Ubuntu</strong>.
                Additionally, I use <strong>Git</strong> for version control and <strong>Figma</strong> for UI design collaboration.
              </div>

              <div className="subtitle my-3">
                IUH - <span>Software Engineering</span> - 8/2021 - 12/2025
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="row justify-content-center my-5">
          {/* Avatar bên trái */}
          <div className="col-12 col-md-10 d-flex align-items-end gap-3">
            <img src={avt} alt="Avatar" className="avatar" />

            {/* Bong bóng message */}
            <div className="message-box">
              <div className="box-title mb-2">Projects</div>

              <div className="box-content">
                <p><strong>VChat – Real-Time Messaging App (Group Project)</strong><br />
                  <em>01/2025 – 05/2025</em><br />
                  Led a team of 4 to build a cross-platform messaging app using <strong>ReactJS</strong> for web and <strong>React Native</strong> for mobile. Developed a <strong>Node.js</strong>-based backend with a <strong>microservice architecture</strong>, supporting both one-on-one and group chats. Used <strong>DynamoDB</strong> for real-time data handling and <strong>AWS S3</strong> for media storage. Integrated features such as real-time messaging, push notifications, and secure user authentication.<br />
                  <strong>GitHub:</strong> <a href="https://github.com/duongphan2101/CongNgheMoi_ChattingApp.git" target="_blank">VChat Repository</a>
                </p>

                <button className="btn btn-dark mb-3"
                  onClick={() => playDemo('VChat', 'https://drive.google.com/file/d/12yxYKacjS2xwElcfbRUrFSTp_lS8fMny/preview')}>
                  Demo
                </button>

                <p><strong>HDND Store – E-commerce Web (Group Project)</strong><br />
                  <em>01/2025 – 05/2025</em><br />
                  Contributed to frontend development using <strong>ReactJS</strong>, ensuring responsive and user-friendly UI. Integrated <strong>Momo</strong> payment service (development version) for seamless checkout experiences. Utilized <strong>Python</strong> for data analysis and built interactive charts to visualize sales revenue and provide business insights.<br />
                  <strong>GitHub:</strong> <a href="https://github.com/DucNhat03/SoftwareArchitecture_HDNDStore.git" target="_blank">HDND Store Repository</a>
                </p>

                <button className="btn btn-dark mb-3"
                  onClick={() => playDemo('HDND Store', 'https://drive.google.com/file/d/19Gbqo2dNrtPmEU8Vqs6mPPRoxrBxBXaM/view?usp=drive_link')}>
                  Demo
                </button>

                <p><strong>Video Sharing App – Full Stack Developer</strong><br />
                  <em>07/2024 – 12/2024</em><br />
                  Built a mobile video-sharing application using <strong>React Native</strong> for the frontend and <strong>Node.js</strong> for the backend. Implemented key features like video upload, like, comment, and a responsive UI. Managed backend operations using <strong>MSSQL</strong> and handled video data processing with custom APIs.<br />
                  <strong>GitHub:</strong> <a href="https://github.com/duongphan2101/VideoSharingApp.git" target="_blank">Video Sharing App Repository</a>
                </p>

                <button className="btn btn-dark mb-3"
                  onClick={() => playDemo('Video Sharing App', 'https://drive.google.com/file/d/17kAmg0r3GBqFA_kl-z1T__NhXWoiZWSE/view?usp=drive_link')}>
                  Demo
                </button>

              </div>

              <div className="subtitle my-3">
                IUH - <span>Software Engineering</span> - 8/2021 - 12/2025
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="row justify-content-center">
          {/* Avatar bên trái */}
          <div className="col-12 col-md-10 d-flex align-items-end gap-3">
            <img src={avt} alt="Avatar" className="avatar" />

            {/* Bong bóng message */}
            <div className="message-box">
              <div className="box-title mb-2">Contact</div>

              <div className="box-content">
                If you'd like to get in touch, feel free to reach out!
                You can call me at <strong>0975 707 511</strong> or drop me an email at <a href="mailto:pndaiduong1912@gmail.com" target="_blank"><strong>Email</strong></a>.
                I'm also active on <a href="https://www.linkedin.com/in/phan-nguyen-dai-duong-1a2138309/" target="_blank"><strong>LinkedIn</strong></a> and share my projects on <a href="https://github.com/duongphan2101" target="_blank"><strong>GitHub</strong></a>.
                Let’s connect!
              </div>

              <div className="subtitle my-3">
                IUH - <span>Software Engineering</span> - 8/2021 - 12/2025
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer className='container py-5 px-3 px-lg-5 text-center'>
        <p>&copy; Phan Nguyen Dai Duong</p>
        <p>Thank you for visiting. Rất vui vì bạn đã ghé qua!</p>
      </footer>

      <SimpleModal show={isModalOpen} onClose={closeModal} title={title} link={link} />

    </div>
  )
}

export default App
