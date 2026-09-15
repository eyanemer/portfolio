import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronUp,
  CircuitBoard,
  Code2,
  Cpu,
  Database,
  Download,
  Filter,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  Rocket,
  Send,
  Server,
  Sparkles,
  Terminal,
  UtensilsCrossed,
  Wrench,
  X,
} from 'lucide-react'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const navItems = [
  { label: 'À propos', id: 'about' },
  { label: 'Compétences', id: 'skills' },
  { label: 'Expériences', id: 'experience' },
  { label: 'Projets', id: 'projects' },
  { label: 'Formations', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

const roles = [
  'Développeuse Full Stack',
  'Développeuse IoT & Embarqué',
  'Conceptrice de Dashboards MERN',
  'Intégratrice IA & RAG',
]

const stats = [
  { value: '8+', label: 'Projets réalisés' },
  { value: '4', label: 'Stages professionnels' },
  { value: '15+', label: 'Technologies web & IoT' },
]

const skillGroups = [
  {
    title: 'Langages',
    icon: Code2,
    tone: 'cyan',
    skills: ['JavaScript', 'Python', 'PHP', 'C++', 'C#', 'Java', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend & Mobile',
    icon: Layers3,
    tone: 'blue',
    skills: ['React.js', 'Flutter', 'Vite', 'Bootstrap', 'CSS Responsive', 'Dashboards interactifs'],
  },
  {
    title: 'Backend',
    icon: Server,
    tone: 'green',
    skills: ['Node.js', 'Express.js', 'Laravel', 'REST API', 'WebSocket', '.NET'],
  },
  {
    title: 'IoT & Embarqué',
    icon: Cpu,
    tone: 'orange',
    skills: ['ESP32', 'Arduino', 'Raspberry Pi', 'MQTT', 'RFID', 'Capteurs', 'Node-RED'],
  },
  {
    title: 'Données, IA & Cloud',
    icon: BrainCircuit,
    tone: 'purple',
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'TensorFlow', 'RAG', 'Streamlit', 'Azure IoT'],
  },
  {
    title: 'Outils & Méthodes',
    icon: Wrench,
    tone: 'red',
    skills: ['Git', 'Docker', 'UML', 'Scrum', 'VMware', 'Postman', 'Documentation'],
  },
]

const experiences = [
  {
    title: 'Stage de PFE Master',
    badge: 'Master IoT',
    company: 'ISET Mahdia',
    period: '2025',
    project: 'Système de Parking Intelligent Connecté',
    description:
      'Solution complète de supervision en temps réel et de gestion automatisée des places de parking via objets IoT, application mobile et dashboard web.',
    tasks: [
      'Conception et mise en œuvre d’une architecture IoT complète articulée autour de microcontrôleurs ESP32, modules RFID et du protocole MQTT',
      'Développement d’une application mobile Flutter pour la consultation, la réservation des places et le guidage des utilisateurs',
      'Création d’un dashboard Web MERN (MongoDB, Express, React, Node.js) pour l’administration des abonnements, utilisateurs et l’affichage de statistiques temps réel',
      'Mise en place de la communication temps réel bidirectionnelle entre le système embarqué et le serveur web',
    ],
    tech: ['ESP32', 'RFID', 'MQTT', 'Flutter', 'React.js', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Stage de perfectionnement - Poubelle intelligente',
    badge: 'Perfectionnement IoT',
    company: 'Designet Web Agency',
    period: '2024 - 2025',
    project: 'Poubelle Intelligente Connectée & Tri Automatisé',
    description:
      'Conception et développement d’un prototype intelligent de tri sélectif de déchets avec détection de présence, classification automatique et dashboard de supervision.',
    tasks: [
      'Détection de présence et analyse par capteurs ultrasons et d’humidité pour l’identification automatisée des déchets (humides / secs)',
      'Pilotage d’un système mécanique de tri articulé par servomoteur et programmé en C++ sur microcontrôleur ESP32',
      'Développement d’un dashboard web temps réel pour visualiser les niveaux de remplissage et les alertes de maintenance',
      'Interfaçage du prototype embarqué avec le serveur web via API REST et communications séries',
    ],
    tech: ['ESP32', 'C++', 'Capteurs Ultrason', 'Servo', 'React.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Stage PFE Supadata',
    badge: 'Licence ISI',
    company: 'Designet Web Agency',
    period: '2024',
    project: 'Plateforme Web SUPADATA - Cartes de Visite Numériques',
    description:
      'Développement d’une plateforme SaaS permettant la création, la personnalisation dynamique et le partage rapide de cartes de visite digitales.',
    tasks: [
      'Analyse des besoins métiers, modélisation de la base de données relationnelle et architecture du projet web',
      'Développement du backend et des API en Laravel / PHP avec gestion sécurisée des profils utilisateurs',
      'Conception d’interfaces web responsive et ergono-intuitives avec intégration de QR codes et liens NFC',
      'Tests de performance et déploiement de fonctionnalités d’administration des utilisateurs et abonnements',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Bootstrap'],
  },
  {
    title: 'Stage de perfectionnement site e-commerce',
    badge: 'Perfectionnement Web',
    company: 'Designet Web Agency',
    period: '2024',
    project: 'Plateforme E-Commerce Dynamique & Responsive',
    description:
      'Conception et optimisation d’un site e-commerce complet doté d’un catalogue dynamique, panier d’achat et panneau d’administration.',
    tasks: [
      'Développement des fonctionnalités web majeures: catalogue interactif, filtrage par catégorie, panier et gestion des commandes',
      'Intégration d’un design responsive soigné pour garantir une navigation fluide sur mobile, tablette et desktop',
      'Optimisation du temps de chargement, du SEO technique et de la gestion de la base de données MySQL',
      'Mise en place de modules back-office pour la gestion des stocks et la visualisation des ventes',
    ],
    tech: ['PHP', 'Laravel / JS', 'MySQL', 'CSS Responsive', 'REST API', 'UI/UX Design'],
  },
]

const projects = [
  {
    title: 'IntelliFarm',
    category: 'IA & Cloud',
    icon: BrainCircuit,
    architecture: 'RAG + Streamlit + Azure IoT',
    description:
      'Assistant agricole intelligent s’appuyant sur l’architecture RAG (Retrieval-Augmented Generation) pour répondre avec précision aux questions métiers d’agriculteurs à partir d’une base documentaire spécialisée.',
    tech: ['Python', 'Streamlit', 'RAG', 'Vector DB', 'Azure IoT'],
  },
  {
    title: 'Menu Digital Café & Restaurant',
    category: 'Web Full Stack',
    icon: UtensilsCrossed,
    architecture: 'React.js + Node.js / QR Code',
    description:
      'Application web interactive de menu digital pour café et restaurant permettant la consultation dynamique de la carte via QR Code, le filtrage par catégories (boissons, plats, desserts), la recherche instantanée et la gestion des commandes.',
    tech: ['React.js', 'Node.js', 'Express', 'CSS Responsive', 'QR Code API'],
  },
  {
    title: 'SmartPlant IA',
    category: 'IA & Cloud',
    icon: Sparkles,
    architecture: 'IoT + Computer Vision TensorFlow',
    description:
      'Système d’irrigation connecté combinant des capteurs d’humidité du sol et un modèle de vision par ordinateur TensorFlow pour la détection précoce des pathologies foliaires.',
    tech: ['TensorFlow', 'React.js', 'Node.js', 'MongoDB', 'IoT ESP32'],
  },
  {
    title: 'Mini système MES',
    category: 'Web Full Stack',
    icon: Database,
    architecture: 'Stack MERN Industrial',
    description:
      'Application web de suivi et d’exécution de la fabrication (Manufacturing Execution System) pour centraliser les données de production et afficher des indicateurs de performance.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
  },
]

const education = [
  {
    title: 'Master professionnel en Développement des Services IoT',
    school: 'ISET de Mahdia – Institut Supérieur des Études Technologiques',
    location: 'Mahdia, Tunisie',
    period: 'Depuis 2024',
    status: 'En cours',
    icon: GraduationCap,
  },
  {
    title: 'Licence en Ingénierie des Systèmes Informatiques (ISI)',
    school: 'ISSAT de Kairouan – Institut Supérieur des Sciences Appliquées',
    location: 'Kairouan, Tunisie',
    period: '2021 – 2024',
    status: 'Diplôme obtenu',
    icon: Code2,
  },
  {
    title: 'Baccalauréat Technique (Sciences Expérimentales)',
    school: 'Lycée Cité El Bosten',
    location: 'Kélibia, Nabeul, Tunisie',
    period: '2020 – 2021',
    status: 'Diplôme obtenu',
    icon: Award,
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: 'eyanemer2@gmail.com',
    href: 'mailto:eyanemer2@gmail.com',
    icon: Mail,
  },
  {
    label: 'Téléphone',
    value: '+216 55 641 245',
    href: 'tel:+21655641245',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'eya-nemer-026275226',
    href: 'https://www.linkedin.com/in/eya-nemer-026275226',
    icon: Linkedin,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [typedText, setTypedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [projectFilter, setProjectFilter] = useState('Tous')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentRole.slice(0, typedText.length + 1))

          if (typedText.length + 1 === currentRole.length) {
            window.setTimeout(() => setIsDeleting(true), 1200)
          }
        } else {
          setTypedText(currentRole.slice(0, typedText.length - 1))

          if (typedText.length === 0) {
            setIsDeleting(false)
            setRoleIndex((current) => (current + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )

    return () => window.clearTimeout(timeout)
  }, [isDeleting, roleIndex, typedText])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    ;['hero', ...navItems.map((item) => item.id)].forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    const onScroll = () => {
      setShowBackToTop(window.scrollY > 600)
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const updateFormField = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const submitContactForm = (event) => {
    event.preventDefault()

    const subject = formData.subject || 'Opportunité professionnelle - Eya Nemer'
    const body = [
      `Nom: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      `Message:\n${formData.message}`,
    ].join('\n')

    window.location.href = `mailto:eyanemer2@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const filteredProjects =
    projectFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.category === projectFilter)

  return (
    <div className="site-shell">
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <a className="nav-logo" href="#hero" onClick={() => scrollToSection('hero')}>
            <span className="logo-brackets">&lt;/&gt;</span>
            <span className="logo-name">Eya Nemer</span>
            <span className="logo-subbadge">Full Stack & IoT</span>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
            {navItems.map((item) => (
              <button
                className={activeSection === item.id ? 'active' : ''}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="hero">
          <div className="hero-bg">
            <div className="hero-grid" />
            <div className="hero-glow glow-1" />
            <div className="hero-glow glow-2" />
          </div>

          <div className="hero-content">
            <div className="hero-badge reveal">
              <span className="badge-dot" />
              Disponible pour opportunités Full Stack, IoT & IA
            </div>

            <h1 className="hero-name reveal">
              <span>Nemer</span>
              <span className="hero-firstname">Eya</span>
            </h1>

            <div className="hero-title reveal">
              <span className="typing-prefix">Je suis </span>
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-desc reveal">
              Développeuse Full Stack passionnée avec une double compétence web et IoT.
              Je conçois des applications complètes, des dashboards temps réel et des systèmes
              connectés intelligents, du capteur embarqué jusqu’à l’interface utilisateur.
            </p>

            <div className="hero-actions reveal">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')} type="button">
                <Code2 size={18} />
                Découvrir mes projets
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')} type="button">
                <Send size={18} />
                Me contacter
              </button>
              <a className="btn btn-soft" download href={`${baseUrl}EyaNemer CV.pdf`}>
                <Download size={18} />
                Télécharger mon CV
              </a>
            </div>

            <div className="hero-socials reveal">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/eya-nemer-026275226"
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
              <a aria-label="Email" href="mailto:eyanemer2@gmail.com">
                <Mail size={20} />
              </a>
              <a aria-label="Téléphone" href="tel:+21655641245">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="developer-card reveal" aria-label="Aperçu développeur">
            <div className="code-window">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <pre>
                <code>{`const profile = {
  name: "Eya Nemer",
  role: "Développeuse Full Stack & IoT",
  location: "Tunis, Tunisie",
  stack: ["React", "Node", "Laravel", "ESP32"],
  experiences: [
    "Stage PFE Master",
    "Stage PFE Supadata",
    "Stage Perfectionnement E-commerce"
  ],
  status: "À la recherche d'opportunités"
}`}</code>
              </pre>
            </div>
            <div className="terminal-card">
              <Terminal size={18} />
              <span>npm run dev</span>
              <strong>Prête pour le recrutement</strong>
            </div>
          </div>

          <button className="hero-scroll-hint" onClick={() => scrollToSection('about')} type="button">
            <span>Découvrir</span>
            <div className="scroll-line" />
          </button>
        </section>

        {/* SECTION 1: À PROPOS */}
        <section className="about section" id="about">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">01 // À propos</span>
              <h2 className="section-title">Profil & Ambition</h2>
            </div>

            <div className="about-grid">
              <div className="about-avatar reveal">
                <div className="avatar-ring">
                  <div className="avatar-inner">
                    <img alt="Eya Nemer" className="avatar-photo" src={`${baseUrl}photo.jpg`} />
                  </div>
                </div>

                <div className="about-stats">
                  {stats.map((stat) => (
                    <div className="stat-card" key={stat.label}>
                      <span className="stat-num">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-text reveal">
                <p>
                  Je suis <strong>Eya Nemer</strong>, développeuse <strong>Full Stack</strong> titulaire
                  d’une Licence en Systèmes Informatiques (ISSAT Kairouan) et actuellement en Master
                  professionnel en Développement des Services IoT (ISET Mahdia).
                </p>
                <p>
                  Mon expertise s’étend de la conception d’applications web dynamiques (<strong>React, Node.js, Express, Laravel, PHP</strong>)
                  au développement de systèmes IoT intelligents (<strong>ESP32, MQTT, RFID, capteurs embarqués</strong>)
                  et à l’intégration d’outils d’IA (<strong>RAG, TensorFlow, Streamlit</strong>).
                </p>
                <p>
                  Rigoureuse, curieuse et orientée résultats, j’accorde une importance majeure à l’ergonomie
                  des interfaces, à la propreté du code et à l’efficacité des systèmes que je développe.
                </p>

                <div className="about-info">
                  <div className="info-item">
                    <MapPin size={18} />
                    <span>Tunis, Tunisie</span>
                  </div>
                  <div className="info-item">
                    <GraduationCap size={18} />
                    <span>Master Pro Services IoT</span>
                  </div>
                  <div className="info-item">
                    <Terminal size={18} />
                    <span>Full Stack · IoT · IA appliquée</span>
                  </div>
                  <div className="info-item">
                    <Mail size={18} />
                    <span>Français · Anglais technique</span>
                  </div>
                </div>

                <a className="btn btn-primary" download href={`${baseUrl}EyaNemer CV.pdf`}>
                  <Download size={18} />
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPÉTENCES */}
        <section className="skills section" id="skills">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">02 // Compétences</span>
              <h2 className="section-title">Stack Technique & Savoir-Faire</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon

                return (
                  <article className="skill-category reveal" key={group.title}>
                    <div className="skill-cat-header">
                      <div className={`skill-icon tone-${group.tone}`}>
                        <Icon size={22} />
                      </div>
                      <h3>{group.title}</h3>
                    </div>
                    <div className="skill-tags">
                      {group.skills.map((skill) => (
                        <span className={`tag tag-${group.tone}`} key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: EXPÉRIENCES */}
        <section className="experience section" id="experience">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">03 // Expériences</span>
              <h2 className="section-title">Parcours Professionnel & Stages</h2>
              <p className="section-sub">
                Une expérience pratique consolidée par trois stages majeurs couvrant le PFE Master IoT, le PFE Licence Supadata et le développement e-commerce.
              </p>
            </div>

            <div className="timeline">
              {experiences.map((experience) => (
                <article className="timeline-item reveal" key={experience.title}>
                  <div className="timeline-marker">
                    <div className="marker-dot" />
                  </div>
                  <div className="timeline-card">
                    <div className="card-header">
                      <div>
                        <div className="card-title-wrap">
                          <h3 className="card-title">{experience.title}</h3>
                          <span className="badge-experience">{experience.badge}</span>
                        </div>
                        <span className="card-company">
                          <BriefcaseBusiness size={16} />
                          {experience.company}
                        </span>
                      </div>
                      <span className="card-date">{experience.period}</span>
                    </div>

                    <p className="card-description">{experience.description}</p>

                    <div className="card-project">
                      <Rocket size={17} />
                      <strong>Projet réalisé :</strong> {experience.project}
                    </div>

                    <ul className="card-tasks">
                      {experience.tasks.map((task) => (
                        <li key={task}>
                          <CheckCircle2 className="task-bullet" size={15} />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="card-techs">
                      {experience.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJETS */}
        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">04 // Projets</span>
              <h2 className="section-title">Autres Projets Réalisés</h2>
              <p className="section-sub">
                Projets académiques, prototypes IoT et applications web innovantes développés au cours de mon parcours.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="projects-filter reveal">
              <Filter size={16} />
              {['Tous', 'IoT & Embarqué', 'IA & Cloud', 'Web Full Stack'].map((cat) => (
                <button
                  className={`filter-btn ${projectFilter === cat ? 'active' : ''}`}
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => {
                const Icon = project.icon

                return (
                  <article className="project-card reveal" key={project.title}>
                    <div className="project-card-top">
                      <div className="project-icon">
                        <Icon size={25} />
                      </div>
                      <span className="project-category-badge">{project.category}</span>
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p className="project-arch">
                        <CircuitBoard size={16} />
                        {project.architecture}
                      </p>
                      <p className="project-desc">{project.description}</p>
                    </div>

                    <div className="project-techs">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5: FORMATIONS */}
        <section className="education section" id="education">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">05 // Formations</span>
              <h2 className="section-title">Parcours Académique</h2>
            </div>

            <div className="edu-grid">
              {education.map((item, index) => {
                const Icon = item.icon

                return (
                  <article className={`edu-card reveal ${index === 0 ? 'edu-current' : ''}`} key={item.title}>
                    <div className="edu-icon">
                      <Icon size={24} />
                    </div>
                    <div className="edu-body">
                      <div className="edu-header-row">
                        <span className={`edu-badge ${item.status === 'En cours' ? 'in-progress' : ''}`}>
                          {item.status}
                        </span>
                        <span className="edu-period">{item.period}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p className="edu-school">{item.school}</p>
                      <p className="edu-location">
                        <MapPin size={15} />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT */}
        <section className="contact section" id="contact">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">06 // Contact</span>
              <h2 className="section-title">Contactez-Moi</h2>
              <p className="section-sub">
                Je suis actuellement à la recherche de nouvelles opportunités en Développement Full Stack, IoT et projets digitaux. N’hésitez pas à me contacter !
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-links reveal">
                {contactLinks.map((link) => {
                  const Icon = link.icon

                  return (
                    <a
                      className="contact-link-card"
                      href={link.href}
                      key={link.label}
                      rel={link.label === 'LinkedIn' ? 'noreferrer' : undefined}
                      target={link.label === 'LinkedIn' ? '_blank' : undefined}
                    >
                      <div className="contact-icon">
                        <Icon size={21} />
                      </div>
                      <div className="contact-info">
                        <span className="contact-label">{link.label}</span>
                        <span className="contact-value">{link.value}</span>
                      </div>
                      <ArrowRight className="contact-arrow" size={18} />
                    </a>
                  )
                })}

                <div className="contact-link-card no-link">
                  <div className="contact-icon">
                    <MapPin size={21} />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Localisation</span>
                    <span className="contact-value">Tunis, Tunisie</span>
                  </div>
                </div>
              </div>

              <div className="contact-form-wrap reveal">
                <form className="contact-form" onSubmit={submitContactForm}>
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      id="name"
                      name="name"
                      onChange={updateFormField}
                      placeholder="Votre nom et prénom"
                      required
                      type="text"
                      value={formData.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Adresse Email</label>
                    <input
                      id="email"
                      name="email"
                      onChange={updateFormField}
                      placeholder="votre.email@domaine.com"
                      required
                      type="email"
                      value={formData.email}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Sujet du message</label>
                    <input
                      id="subject"
                      name="subject"
                      onChange={updateFormField}
                      placeholder="Proposition d’emploi, stage ou projet"
                      type="text"
                      value={formData.subject}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Votre Message</label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={updateFormField}
                      placeholder="Décrivez votre projet ou votre besoin..."
                      required
                      rows="5"
                      value={formData.message}
                    />
                  </div>
                  <button className="btn btn-primary form-submit" type="submit">
                    <Send size={18} />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <a className="footer-logo" href="#hero" onClick={() => scrollToSection('hero')}>
              Eya Nemer
            </a>
            <p className="footer-copy">
              Portfolio développé par <strong>Eya Nemer</strong> · Développeuse Full Stack & IoT
            </p>
            <div className="footer-socials">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/eya-nemer-026275226"
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a aria-label="Email" href="mailto:eyanemer2@gmail.com">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        aria-label="Retour en haut"
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => scrollToSection('hero')}
        type="button"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  )
}

export default App

