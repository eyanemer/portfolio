import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Linkedin, Mail, ChevronDown, MapPin, Phone, Cpu, Code, Cloud, Database, Sparkles, Zap, Star, Download } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  // Refs pour les sections
  const accueilRef = useRef(null);
  const projetsRef = useRef(null);
  const competencesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionName) => {
    const refs = {
      'accueil': accueilRef,
      'projets': projetsRef,
      'compétences': competencesRef,
      'expérience': experienceRef,
      'contact': contactRef
    };
    
    const ref = refs[sectionName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionName);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Système de Parking Intelligent (PFE Master)",
      description: "Projet de Fin d'Études (Master IoT) : Solution IoT globale avec ESP32, capteurs de présence, contrôle d'accès RFID et communication MQTT en temps réel. Application mobile Flutter pour réservations/consultation des places et tableau de bord admin web MERN (supervision temps réel des places, abonnements et utilisateurs).",
      tech: ["ESP32", "MQTT", "RFID", "Flutter", "Node.js", "Express", "MongoDB"],
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      year: "2025",
      icon: <Cpu className="text-blue-400" size={24} />
    },
    {
      title: "Poubelle Intelligente & Tri Automatisé",
      description: "Stage de perfectionnement (Designet Web Agency) : Solution Smart City avec ESP32 (C++). Détection présence (ultrason), identification (humide/sec via capteur d'humidité), tri mécatronique automatique par servomoteur (gauche/droite) et alerte temps réel de remplissage. Dashboard de suivi Web MERN.",
      tech: ["ESP32", "C++", "Capteurs", "React", "Node.js", "Express", "MongoDB"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      year: "2025",
      icon: <Sparkles className="text-emerald-400" size={24} />
    },
    {
      title: "SmartPlant IA - Irrigation & Vision IA",
      description: "Projet académique collaboratif (avec Aïcha Frih & Dawser Belgacem) : Irrigation intelligente pilotée par capteurs IoT et Vision par Ordinateur avec TensorFlow pour la détection automatique des pathologies des plantes. Tableaux de bord interactifs React.js et backend MongoDB.",
      tech: ["ESP32", "TensorFlow", "Vision par Ordinateur", "React.js", "Node.js", "MongoDB"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      year: "2024",
      icon: <Zap className="text-green-400" size={24} />
    },
    {
      title: "IntelliFarm - Chatbot Agricole IA",
      description: "Chatbot intelligent basé sur RAG et Streamlit pour l'assistance agricole en temps réel avec moteur d'inférence et base vectorielle",
      tech: ["Streamlit", "RAG", "Azure IoT", "Vector DB", "Python"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      year: "2025",
      icon: <Sparkles className="text-purple-400" size={24} />
    },
    {
      title: "SUPADATA - Carte de Visite Digitale",
      description: "Plateforme complète de cartes de visite numériques avec analyse des besoins et architecture scalable",
      tech: ["Laravel", "PHP", "MySQL", "HTML/CSS"],
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      year: "2024",
      icon: <Star className="text-blue-400" size={24} />
    },
    {
      title: "Site E-commerce Complet",
      description: "Plateforme e-commerce full-stack avec paiement en ligne, gestion des commandes et optimisation des performances",
      tech: ["Laravel", "JavaScript", "MySQL", "API Payment"],
      gradient: "from-pink-500 via-rose-500 to-red-500",
      year: "2023",
      icon: <Zap className="text-pink-400" size={24} />
    },
    {
      title: "Smart Irrigation IoT",
      description: "Système d'arrosage intelligent avec détection d'humidité, commande d'électrovannes via ESP32 et MQTT",
      tech: ["ESP32", "MQTT", "C++", "Web Interface"],
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      year: "2024",
      icon: <Cpu className="text-emerald-400" size={24} />
    },
    {
      title: "Mini-Système MES",
      description: "Système de gestion des ressources industrielles full-stack avec architecture moderne",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      year: "2024",
      icon: <Database className="text-indigo-400" size={24} />
    },
    {
      title: "Supervision IoT Distribuée",
      description: "Réseau IoT pour contrôle de LED et monitoring température en temps réel avec tableau de bord",
      tech: ["ESP32/ESP8266", "Raspberry Pi", "MQTT", "Node-RED"],
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      year: "2023",
      icon: <Code className="text-cyan-400" size={24} />
    }
  ];

  const skills = [
    { 
      category: "Développement Web",
      items: [
        { name: "React & Node.js", level: 90, icon: <Code size={20} /> },
        { name: "Laravel & PHP", level: 88, icon: <Code size={20} /> },
        { name: "HTML/CSS/JavaScript", level: 92, icon: <Code size={20} /> }
      ]
    },
    { 
      category: "IoT & Systèmes Embarqués",
      items: [
        { name: "ESP32 & Arduino", level: 85, icon: <Cpu size={20} /> },
        { name: "Raspberry Pi & MQTT", level: 82, icon: <Cpu size={20} /> },
        { name: "Node-RED", level: 80, icon: <Cpu size={20} /> }
      ]
    },
    { 
      category: "Cloud & IA",
      items: [
        { name: "Azure IoT", level: 85, icon: <Cloud size={20} /> },
        { name: "RAG & Vector Databases", level: 83, icon: <Cloud size={20} /> },
        { name: "Streamlit & Python", level: 88, icon: <Cloud size={20} /> }
      ]
    },
    { 
      category: "Bases de Données",
      items: [
        { name: "MongoDB", level: 85, icon: <Database size={20} /> },
        { name: "MySQL & SQL Server", level: 87, icon: <Database size={20} /> }
      ]
    }
  ];

  const experience = [
    {
      title: "Stage PFE - Master IoT",
      company: "Projet de Fin d'Études",
      period: "2025",
      description: "Conception et réalisation d'un système de parking intelligent (ESP32, RFID, MQTT, Flutter, stack MERN)"
    },
    {
      title: "Stage de Perfectionnement",
      company: "Designet Web Agency",
      period: "2025",
      description: "Conception d'une poubelle intelligente pour le tri des déchets (ESP32, capteurs ultrason/humidité, MERN stack)"
    },
    {
      title: "Stage de Perfectionnement",
      company: "Designet Web Agency",
      period: "2024",
      description: "Conception du chatbot IntelliFarm avec RAG, déploiement de solutions IA Cloud évolutives"
    },
    {
      title: "Stage PFE",
      company: "Designet Web Agency",
      period: "2024",
      description: "Création de SUPADATA et développement de plateforme e-commerce complète"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white min-h-screen relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(5px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Floating orbs - Repositionnés sur les côtés */}
      <div className="fixed top-1/4 left-10 w-[400px] h-[400px] bg-gradient-to-br from-purple-600 to-pink-600 rounded-full filter blur-[120px] opacity-20 animate-pulse" />
      <div className="fixed bottom-1/4 right-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed top-1/2 left-5 w-[350px] h-[350px] bg-gradient-to-br from-pink-600 to-rose-600 rounded-full filter blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-1/3 right-5 w-[350px] h-[350px] bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full filter blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Floating particles - Concentrés sur les côtés */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const side = i < 10 ? 'left' : 'right';
          const position = side === 'left' 
            ? Math.random() * 25  // 0-25% pour gauche
            : 75 + Math.random() * 25;  // 75-100% pour droite
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
              style={{
                left: `${position}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          );
        })}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent flex items-center gap-2">
            <Sparkles size={28} className="text-purple-400" />
            EYA NEMER
          </div>
          
          <div className="hidden md:flex gap-8">
            {['Accueil', 'Projets', 'Compétences', 'Expérience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-purple-400 transition-all font-medium relative group ${
                  activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full ${activeSection === item.toLowerCase() ? 'w-full' : ''}`}></span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-purple-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-purple-500/20 p-6">
            {['Accueil', 'Projets', 'Compétences', 'Expérience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 hover:text-purple-400 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={accueilRef} className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-6xl w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl group-hover:border-purple-400/50 transition-all">
                <img 
                  src="photo.jpg"
                  alt="Eya Nemer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold backdrop-blur-sm mb-6">
            <Sparkles size={16} className="animate-pulse" />
            Disponible pour un stage PFE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Développeuse IoT
            </span>
            <br />
            <span className="text-slate-100">& Full Stack</span>
          </h1>
          
          <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Passionnée par les systèmes embarqués, l'IA et le développement web
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <MapPin size={18} className="text-purple-400" />
              <span>Tunis, Tunisie</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <Mail size={18} className="text-purple-400" />
              <span>eyanemer2@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-purple-500/20">
              <Phone size={18} className="text-purple-400" />
              <span>+216 55 641 245</span>
            </div>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-center pt-4">
            <a 
              href="mailto:eyanemer2@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-xl font-semibold hover:scale-105 transform transition-all shadow-2xl shadow-purple-500/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={18} />
                Me contacter
              </span>
            </a>
            <a 
              href="/path/to/your/cv.pdf"
              download="EyaNemer CV.pdf"
              className="px-8 py-4 border-2 border-purple-500 rounded-xl font-semibold hover:bg-purple-500/10 transition-all backdrop-blur-sm hover:scale-105 flex items-center gap-2"
            >
              <Download size={18} />
              Télécharger CV
            </a>
          </div>
        </div>
        
        <ChevronDown 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-purple-400 cursor-pointer" 
          size={36}
          onClick={() => scrollToSection('projets')}
        />
      </section>

      {/* Projects Section */}
      <section ref={projetsRef} className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Projets & Réalisations
              </span>
            </h2>
            <p className="text-slate-400 text-xl">Des solutions IoT et web innovantes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />
                
                <div className="mb-4">{project.icon}</div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30">{project.year}</span>
                </div>
                
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800/80 rounded-lg text-xs text-purple-300 border border-slate-700 hover:border-purple-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={competencesRef} className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Compétences Techniques
              </span>
            </h2>
            <p className="text-slate-400 text-xl">Expertise en IoT, Web & Cloud</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((category, idx) => (
              <div key={idx} className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                  <Sparkles size={24} />
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-purple-400">{skill.icon}</span>
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-purple-400 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/50">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
              <Star size={24} />
              Technologies Complémentaires
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "C++", "C#", "Java", ".NET", "Unity", "Docker", "Git", "WebSocket", "UML", "Scrum", "VMware"].map((tech, i) => (
                <span 
                  key={i} 
                  className="px-5 py-3 bg-slate-800/50 rounded-xl text-sm border border-slate-700 hover:border-purple-500/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Expérience Professionnelle
              </span>
            </h2>
            <p className="text-slate-400 text-xl">Stages et projets en entreprise</p>
          </div>

          <div className="space-y-6 mb-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-[1.02]"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-1">{exp.title}</h3>
                    <p className="text-slate-200 font-medium text-lg">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20">
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles size={28} />
              Formation
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-bold text-slate-100 mb-2">Master Professionnel en Développement des Services IoT</h4>
                <p className="text-purple-400 font-medium">ISET de Mahdia | 2024 - présent</p>
              </div>
              <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-bold text-slate-100 mb-2">Licence en Ingénierie des Systèmes Informatiques</h4>
                <p className="text-purple-400 font-medium">ISSAT de Kairouan | 2021 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-32 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Travaillons Ensemble
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Je recherche activement un stage de fin d'études pour contribuer à des projets innovants en IoT et développement web.
          </p>
          
          <div className="flex gap-6 justify-center mb-12">
            <a 
              href="https://www.linkedin.com/in/eya-nemer-026275226"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110 border border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:eyanemer2@gmail.com"
              className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110 border border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail />
            </a>
            <a 
              href="tel:+21655641245"
              className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-110 border border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Phone />
            </a>
          </div>
          
          <div className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Mail size={20} />
                  <span className="font-semibold">Email</span>
                </div>
                <p className="text-slate-300">eyanemer2@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Phone size={20} />
                  <span className="font-semibold">Téléphone</span>
                </div>
                <p className="text-slate-300">+216 55 641 245</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <MapPin size={20} />
                  <span className="font-semibold">Localisation</span>
                </div>
                <p className="text-slate-300">Tunis, Tunisie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 text-center text-slate-400 backdrop-blur-sm">
        <p>&copy; 2024 Eya Nemer - Développeuse IoT & Full Stack. Tous droits réservés.</p>
        
      </footer>
    </div>
  );
}