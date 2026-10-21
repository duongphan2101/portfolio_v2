import React from 'react';
import awsIcon from '../assets/AWS.png';
import dockerIcon from '../assets/Docker.png';
import figmaIcon from '../assets/Figma.png';
import githubIcon from '../assets/GitHub.png';
import jsIcon from '../assets/JS.png';
import javaIcon from '../assets/Java.png';
import mongoIcon from '../assets/Mongo.png';
import mysqlIcon from '../assets/MySQL.png';
import nodeIcon from '../assets/NodeJS.png';
import reactIcon from '../assets/React.png';
import springIcon from '../assets/SpringBoot.png';
import ubuntuIcon from '../assets/Ubuntu.png';

export function getTechVisual(tech) {
  const t = (tech || '').toLowerCase().trim();

  // 1. Node.js
  if (t.includes('node')) {
    return { type: 'img', src: nodeIcon };
  }
  // 2. React / React Native
  if (t.includes('react')) {
    return { type: 'img', src: reactIcon };
  }
  // 3. Docker
  if (t.includes('docker')) {
    return { type: 'img', src: dockerIcon };
  }
  // 4. Mongo
  if (t.includes('mongo')) {
    return { type: 'img', src: mongoIcon };
  }
  // 5. Spring / Spring Boot
  if (t.includes('spring')) {
    return { type: 'img', src: springIcon };
  }
  // 6. Java
  if (t.includes('java') && !t.includes('javascript')) {
    return { type: 'img', src: javaIcon };
  }
  // 7. MySQL
  if (t.includes('mysql')) {
    return { type: 'img', src: mysqlIcon };
  }
  // 8. AWS / DynamoDB / S3
  if (t.includes('aws') || t.includes('dynamodb') || t.includes('s3')) {
    return { type: 'img', src: awsIcon };
  }
  // 9. JavaScript
  if (t === 'js' || t.includes('javascript')) {
    return { type: 'img', src: jsIcon };
  }
  // 10. TypeScript
  if (t.includes('typescript') || t === 'ts') {
    return {
      type: 'svg',
      node: (
        <svg className="w-3.5 h-3.5 rounded-sm" viewBox="0 0 24 24" fill="#3178C6">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 13.5H9.2V20H7V13.5H4.8V11.8H11.5V13.5ZM19.2 14.2C19.2 13.5 18.9 13 18.3 12.6C17.7 12.2 16.8 11.9 15.6 11.6C14.7 11.4 13.9 11.1 13.3 10.7C12.8 10.3 12.5 9.7 12.5 8.9C12.5 8.1 12.9 7.4 13.6 6.8C14.3 6.3 15.3 6 16.5 6C17.6 6 18.5 6.3 19.2 6.8C19.9 7.3 20.3 8 20.4 8.9H18.2C18.1 8.5 17.8 8.1 17.5 7.9C17.1 7.7 16.7 7.6 16.2 7.6C15.7 7.6 15.3 7.7 15 7.9C14.7 8.1 14.6 8.4 14.6 8.8C14.6 9.1 14.7 9.4 15 9.6C15.3 9.8 15.8 10 16.5 10.2C17.6 10.4 18.4 10.7 19.1 11.1C19.8 11.5 20.1 12.2 20.1 13.1C20.1 14 19.7 14.8 18.9 15.4C18.1 16 17.1 16.3 15.8 16.3C14.4 16.3 13.3 15.9 12.5 15.2C11.7 14.5 11.3 13.6 11.3 12.4H13.5C13.5 13.2 13.8 13.7 14.2 14.1C14.6 14.4 15.2 14.6 15.9 14.6C16.5 14.6 17 14.4 17.4 14.2C17.8 14 18 13.6 18 13.1V14.2H19.2Z" fill="white" />
        </svg>
      )
    };
  }
  // 11. Socket.IO
  if (t.includes('socket')) {
    return {
      type: 'svg',
      node: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#010101">
          <circle cx="12" cy="12" r="10" fill="#010101" />
          <path d="M14.5 7L9 13H13L9.5 18L16 11H12L14.5 7Z" fill="white" />
        </svg>
      )
    };
  }
  // 12. Python
  if (t.includes('python')) {
    return {
      type: 'svg',
      node: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <path d="M11.9 2C6.7 2 7 4.2 7 4.2V6.5H12.1V7.3H5.1C2.9 7.3 1 8.8 1 11.9C1 15 2.7 15.6 4.3 15.6H5.8V13.6C5.8 11.4 7.5 9.7 9.7 9.7H14.8C16.4 9.7 17.7 8.4 17.7 6.8V4.3C17.7 2.7 16.2 2 11.9 2ZM9.5 3.5C10.2 3.5 10.7 4 10.7 4.7C10.7 5.4 10.2 5.9 9.5 5.9C8.8 5.9 8.3 5.4 8.3 4.7C8.3 4 8.8 3.5 9.5 3.5Z" fill="#387EB8" />
          <path d="M12.1 22C17.3 22 17 19.8 17 19.8V17.5H11.9V16.7H18.9C21.1 16.7 23 15.2 23 12.1C23 9 21.3 8.4 19.7 8.4H18.2V10.4C18.2 12.6 16.5 14.3 14.3 14.3H9.2C7.6 14.3 6.3 15.6 6.3 17.2V19.7C6.3 21.3 7.8 22 12.1 22ZM14.5 20.5C13.8 20.5 13.3 20 13.3 19.3C13.3 18.6 13.8 18.1 14.5 18.1C15.2 18.1 15.7 18.6 15.7 19.3C15.7 20 15.2 20.5 14.5 20.5Z" fill="#FFE052" />
        </svg>
      )
    };
  }
  // 13. AI / Parsing / Analysis
  if (t.includes('ai') || t.includes('parsing') || t.includes('analysis')) {
    return {
      type: 'svg',
      node: (
        <svg className="w-3.5 h-3.5 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.2 8.2L20.4 10.4L14.2 12.6L12 18.8L9.8 12.6L3.6 10.4L9.8 8.2L12 2Z" />
          <path d="M19 16L20.1 19.1L23.2 20.2L20.1 21.3L19 24.4L17.9 21.3L14.8 20.2L17.9 19.1L19 16Z" opacity="0.7" />
        </svg>
      )
    };
  }
  // 14. MoMo API
  if (t.includes('momo')) {
    return {
      type: 'svg',
      node: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#A50064" />
          <path d="M6 16V8L9 13L12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M14 16V8L17 13L20 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )
    };
  }
  // 15. MSSQL / Database
  if (t.includes('sql') || t.includes('database')) {
    return {
      type: 'svg',
      node: (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    };
  }
  // 16. Ubuntu / Linux
  if (t.includes('ubuntu') || t.includes('linux')) {
    return { type: 'img', src: ubuntuIcon };
  }
  // 17. Figma
  if (t.includes('figma')) {
    return { type: 'img', src: figmaIcon };
  }
  // 18. Git / GitHub
  if (t.includes('git')) {
    return { type: 'img', src: githubIcon };
  }

  // Default fallback
  return null;
}

export default function TechBadge({ tech, className = "" }) {
  const visual = getTechVisual(tech);

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-neutral-100 dark:bg-neutral-800/90 text-neutral-700 dark:text-neutral-200 border border-neutral-200/70 dark:border-neutral-700/70 shadow-sm hover:scale-105 transition-transform select-none ${className}`}
    >
      {visual?.type === 'img' && (
        <img
          src={visual.src}
          alt=""
          className="w-3.5 h-3.5 object-contain rounded-[2px] shrink-0"
          loading="lazy"
        />
      )}
      {visual?.type === 'svg' && (
        <span className="shrink-0 flex items-center justify-center">
          {visual.node}
        </span>
      )}
      <span>{tech}</span>
    </span>
  );
}
