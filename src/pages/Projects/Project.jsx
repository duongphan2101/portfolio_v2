import React, { useState, useEffect } from 'react';
import './Project.css';

const projectData = [
  {
    id: 'video-sharing',
    title: 'Video Sharing App',
    description: 'An app where users can upload, view, like, and comment on videos.',
    tech: ['React Native', 'Node.js', 'MSSQL'],
    position: { cx: 30, cy: 10 },
    demo: 'https://drive.google.com/file/d/17kAmg0r3GBqFA_kl-z1T__NhXWoiZWSE/preview'
  },
  {
    id: 'chatting-app',
    title: 'Chatting App',
    description: 'Real-time chatting app with video call support.',
    tech: ['React Native', 'Socket.IO', 'DynamoDB', 'AWS S3'],
    position: { cx: 70, cy: 80 }
  },
  {
    id: 'e-commerce',
    title: 'HDND Store (E-Commerce)',
    description: 'A basic e-commerce store with shopping cart and admin dashboard.',
    tech: ['ReactJS', 'Spring Boot', 'MongoDB'],
    position: { cx: -20, cy: 25 }
  },
  {
    id: 'portfolio',
    title: 'This Website',
    description: 'Personal portfolio showcasing my projects and skills.',
    tech: ['ReactJS', 'HTML/CSS', 'Bootstrap'],
    position: { cx: 0, cy: 90 }
  }
];

function Project() {

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectId) => {
    const project = projectData.find(p => p.id === projectId);
    setSelectedProject(project);
  };

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [selectedProject]);


  return (

    <div className="project-svg-container" id="projects">
      <svg
        className="project-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* === Branch chính === */}
        <line className="branch" x1="135" y1="50" x2="115" y2="50" />
        <line className="branch" x1="115" y1="50" x2="95" y2="50" />
        <line className="branch" x1="95" y1="50" x2="35" y2="50" />
        <line className="branch" x1="35" y1="50" x2="5" y2="50" />
        <line className="branch" x1="5" y1="50" x2="-20" y2="50" />

        {/* === Branch subnode === */}
        {/* Nhánh 1 */}
        <line className="branch sub-branch" x1="95" y1="50" x2="60" y2="10" />
        <line className="branch sub-branch" x1="60" y1="10" x2="30" y2="10" />
        {/* Nhánh 2 */}
        <line className="branch sub-branch" x1="115" y1="50" x2="90" y2="80" />
        <line className="branch sub-branch" x1="90" y1="80" x2="70" y2="80" />
        {/* Nhánh 3 */}
        <line className="branch sub-branch" x1="5" y1="50" x2="-5" y2="25" />
        <line className="branch sub-branch" x1="-5" y1="25" x2="-20" y2="25" />
        {/* Nhánh 4 */}
        <line className="branch sub-branch" x1="35" y1="50" x2="20" y2="90" />
        <line className="branch sub-branch" x1="20" y1="90" x2="0" y2="90" />

        {/* === Node chính === */}
        <circle className="node" cx="135" cy="50" r="3" />
        <circle className="node" cx="115" cy="50" r="3" />
        <circle className="node" cx="95" cy="50" r="3" />
        <circle className="node" cx="35" cy="50" r="3" />
        <circle className="node" cx="5" cy="50" r="3" />
        <circle className="node" cx="-20" cy="50" r="3" />

        {/* === Subnode === */}
        <circle className="node" cx="60" cy="10" r="2" />
        <circle className="subnode" cx="30" cy="10" r="2" onClick={() => openModal('video-sharing')} >
          <title>Video Sharing App</title>
        </circle>
        <circle className="node" cx="90" cy="80" r="2" />
        <circle className="subnode" cx="70" cy="80" r="2" onClick={() => openModal('chatting-app')}>
          <title>Chatting App</title>
        </circle>
        <circle className="node" cx="-5" cy="25" r="2" />
        <circle className="subnode" cx="-20" cy="25" r="2" onClick={() => openModal('e-commerce')}>
          <title>HDND Store (E-Commerce)</title>
        </circle>
        <circle className="node" cx="20" cy="90" r="2" />
        <circle className="subnode" cx="0" cy="90" r="2" onClick={() => openModal('portfolio')}>
          <title>This website</title>
        </circle>
      </svg>

      {selectedProject && (
        <>
          {/* Modal backdrop */}
          <div className="modal-backdrop fade show" onClick={closeModal}></div>

          {/* Modal content */}
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-dialog-centered p-0" style={{
                backgroundColor: 'transparent'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content p-0">
                <div className="modal-header">
                  <h5 className="modal-title text-danger">{selectedProject.title}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body">
                  <p>{selectedProject.description}</p>
                  <h6>Technologies Used:</h6>
                  <ul>
                    {selectedProject.tech.map((t, index) => (
                      <li key={index}>{t}</li>
                    ))}
                  </ul>
                  {selectedProject.demo && (
                    <div className="ratio ratio-16x9 mb-3">
                      <iframe
                        src={`https://drive.google.com/file/d/${selectedProject.demo.split('/d/')[1].split('/')[0]}/preview`}
                        allow="autoplay"
                        allowFullScreen
                        title="Demo Video"
                      ></iframe>
                    </div>
                  )}
                </div>

                <div className="modal-footer" style={{ backgroundColor: '#222' }}>
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Project;

