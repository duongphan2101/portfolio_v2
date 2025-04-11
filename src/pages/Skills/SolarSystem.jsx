import React, { useState, useEffect } from "react";
import "./SolarSystem.css";

import GitHub from "../../assets/GitHub.png";
import MySQL from "../../assets/MySQL.png";
import MongoDB from "../../assets/Mongo.png";
import AWS from "../../assets/AWS.png";
import Docker from "../../assets/Docker.png";
import Ubuntu from "../../assets/Ubuntu.png";
import Figma from "../../assets/Figma.png";
import NodeJS from "../../assets/NodeJS.png";
import ReactLogo from "../../assets/React.png";
import SpringBoot from "../../assets/SpringBoot.png";
import Java from "../../assets/Java.png";

const orbits = [
  {
    id: 1,
    radius: 200,
    color: "#1C5100",
    speed: 12,
    planets: [
      { name: "MySQL", logo: MySQL, size: 45 },
      { name: "MongoDB", logo: MongoDB, size: 45 },
      { name: "AWS", logo: AWS, size: 45 },
    ],
  },
  {
    id: 2,
    radius: 300,
    color: "#3A376E",
    speed: 18,
    planets: [
      { name: "Docker", logo: Docker, size: 45 },
      { name: "Ubuntu", logo: Ubuntu, size: 45 },
      { name: "Figma", logo: Figma, size: 45 },
    ],
  },
  {
    id: 3,
    radius: 420,
    color: "#938519",
    speed: 24,
    planets: [
      { name: "Node.js", logo: NodeJS, size: 45 },
      { name: "React", logo: ReactLogo, size: 45 },
      { name: "Spring Boot", logo: SpringBoot, size: 45 },
      { name: "Java", logo: Java, size: 45 },
      { name: "GitHub", logo: GitHub, size: 45 },
    ],
  },
];

const SolarSystem = () => {

  const [toast, setToast] = useState("");

  useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => {
        setToast("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [toast]);

  return (
    <div className="solar-system" id="skills">
      <div className="sun"></div>
      {[...orbits].reverse().map((orbit) => (
        <div
          key={orbit.id}
          className="orbit"
          style={{
            width: `${orbit.radius * 2}px`,
            height: `${orbit.radius * 2}px`,
            borderColor: orbit.color,
          }}
        >
          <div
            className="planet-wrapper"
            style={{
              animationDuration: `${orbit.speed}s`,
            }}
          >
            {orbit.planets.map((planet, index) => {
              const angle = (360 / orbit.planets.length) * index;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * orbit.radius;
              const y = Math.sin(rad) * orbit.radius;

              return (
                <div
                  key={planet.name}
                  className="planet"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  onClick={() => setToast(planet.name)}
                >
                  <div className="planet-icon" data-name={planet.name}>
                    <img
                      src={planet.logo}
                      alt={planet.name}
                      style={{
                        width: `${planet.size}px`,
                        height: `${planet.size}px`,
                      }}
                    />
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      ))}
      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}
    </div>
  );
};

export default SolarSystem;
