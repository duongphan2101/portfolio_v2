import React from 'react';
import './Project.css';

function Project() {
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
        <circle className="subnode" cx="30" cy="10" r="2" >
          <title>Video Sharing App</title>
        </circle>
        <circle className="node" cx="90" cy="80" r="2" />
        <circle className="subnode" cx="70" cy="80" r="2" >
          <title>Chatting App</title>
        </circle>
        <circle className="node" cx="-5" cy="25" r="2" />
        <circle className="subnode" cx="-20" cy="25" r="2" >
          <title>HDND Store (E-Commerce)</title>
        </circle>
        <circle className="node" cx="20" cy="90" r="2" />
        <circle className="subnode" cx="0" cy="90" r="2" >
          <title>This website</title>
        </circle>
      </svg>
    </div>
  );
}

export default Project;

