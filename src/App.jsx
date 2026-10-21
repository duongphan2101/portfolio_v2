import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SimpleModal from "./components/SimpleModal";
import { translations, projectDetailsDict } from "./translations";

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "vi");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [transmitting, setTransmitting] = useState(false);
  const [transmittedToast, setTransmittedToast] = useState(false);

  const t = translations[lang] || translations.vi;

  // Sync theme with html root class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Sync language with localStorage
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "vi" : "en"));
  };

  const openModal = (projectId) => {
    const pData = projectDetailsDict[projectId]?.[lang] || projectDetailsDict[projectId]?.en;
    setSelectedProject(pData);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTransmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/pndaiduong1912@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[Portfolio Contact] New message from ${formData.name}`
        })
      });

      if (response.ok) {
        setTransmittedToast(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const mailtoUrl = `mailto:pndaiduong1912@gmail.com?subject=${encodeURIComponent(
          `[Portfolio] Message from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Sender: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setTransmittedToast(true);
      }
    } catch {
      const mailtoUrl = `mailto:pndaiduong1912@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Sender: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setTransmittedToast(true);
    } finally {
      setTransmitting(false);
      setTimeout(() => setTransmittedToast(false), 6000);
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen text-neutral-900 dark:text-neutral-100 flex flex-col items-center px-4 sm:px-6 md:px-8 py-10 sm:py-16 transition-colors duration-300">
      {/* Top Floating Control Bar */}
      <Navbar
        lang={lang}
        toggleLang={toggleLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Centered Content Column */}
      <main className="w-full max-w-2xl flex flex-col items-center">
        <HeroSection t={t} scrollTo={scrollTo} />
        <StorySection t={t} />
        <SkillsSection t={t} />
        <ProjectsSection t={t} openModal={openModal} />
        <ContactSection
          t={t}
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          transmitting={transmitting}
          transmittedToast={transmittedToast}
        />
        <Footer t={t} />
      </main>

      {/* Demo Video Modal */}
      <SimpleModal
        show={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        lang={lang}
      />
    </div>
  );
}

export default App;
