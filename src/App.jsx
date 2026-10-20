import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  BrainCircuit,
  Briefcase,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronUp,
  CircuitBoard,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  FileCode,
  Filter,
  GraduationCap,
  Layers3,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  Rocket,
  Send,
  Server,
  ShieldCheck,
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
]

const roles = [
  'Développeuse Full Stack',
  'Ingénieure IoT',

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
    title: 'Stage de PFE ',
    badge: 'Master ',
    company: 'be coders',
    period: '2026',
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
    badge: 'Perfectionnement ',
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
    title: 'Stage PFE licence',
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
    period: '2024 – 2026',
    status: 'Diplôme obtenu',
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
    title: 'Baccalauréat Sciences Expérimentales',
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
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [codeTab, setCodeTab] = useState('profile')
  const [copied, setCopied] = useState(false)

  const rawSnippets = {
    profile: `const profile = {
  name: "Eya Nemer",
  role: "Développeuse Full Stack & IoT",
  location: "Tunis, Tunisie",
  status: "🟢 Recherche active d'opportunités",
  diplomes: [
    "Master Pro Développement Services IoT (ISET Mahdia)",
    "Licence Ingénierie Systèmes Informatiques (ISSAT Kairouan)"
  ],
  stack: {
    web: ["React.js", "Node.js", "Laravel", "Express"],
    iot: ["ESP32", "MQTT", "RFID", "C++", "Capteurs"],
    ai: ["RAG", "TensorFlow", "Streamlit", "Azure IoT"]
  },
  experiences: [
    "PFE Master: Smart Parking IoT & Dashboard MERN",
    "PFE Licence: SUPADATA SaaS Cartes Visite Laravel",
    "Stage IoT: Poubelle Intelligente Tri Sélectif",
    "Stage Web: Site E-Commerce Dynamique"
  ]
};`,
    recruiter: `{
  "candidate": "Eya Nemer",
  "target_roles": ["Développeuse Full Stack", "Ingénieure IoT & Embarqué"],
  "availability": "🟢 Ouverte aux opportunités",
  "languages": ["Français (Courant)", "Anglais (Technique)"],
  "key_assets": [
    "Maîtrise complète Hardware à Cloud & Frontend",
    "Développement de Dashboards MERN Temps Réel",
    "Rigueur, autonomie et passion des nouvelles tech"
  ],
  "contact": {
    "email": "eyanemer2@gmail.com",
    "phone": "+216 55 641 245",
    "linkedin": "eya-nemer-026275226"
  }
}`,
    stack: `export interface EngineerProfile {
  name: "Eya Nemer";
  specialization: "Full Stack & IoT";
  frontend: ["React.js", "Vite", "Flutter", "Bootstrap"];
  backend: ["Node.js", "Express", "Laravel", "REST API"];
  embedded: ["ESP32", "MQTT", "RFID", "Capteurs", "C++"];
  databases: ["MongoDB", "MySQL", "SQL Server"];
  ai_cloud: ["RAG", "TensorFlow", "Streamlit", "Azure IoT"];
}`
  }

  const handleCopyCode = () => {
    const textToCopy = rawSnippets[codeTab] || rawSnippets.profile
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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

  const submitContactForm = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const name = formData.name
    const email = formData.email
    const subject = formData.subject || 'Opportunité professionnelle - Eya Nemer'
    const message = formData.message

    try {
      const response = await fetch('https://formsubmit.co/ajax/eyanemer2@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject,
          message,
          _captcha: 'false',
        }),
      })

      if (response.ok) {
        setSubmittedName(name)
        setFormSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Direct fallback mailto
        window.location.href = `mailto:eyanemer2@gmail.com?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
        setSubmittedName(name)
        setFormSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch {
      window.location.href = `mailto:eyanemer2@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
      setSubmittedName(name)
      setFormSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } finally {
      setIsSubmitting(false)
    }
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
            <span className="logo-name">Nemer Eya</span>
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
              <span>À la recherche d'opportunités</span>
            </div>

            <h1 className="hero-name reveal">
              <span className="hero-firstname">Nemer</span>
              <span>Eya</span>
            </h1>

            <div className="hero-title reveal">
              <span className="typing-prefix">&gt; </span>
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-desc reveal">
              Développeuse Full Stack & IoT, spécialisée dans le développement d'applications web, systèmes embarqués connectés et intégrations IA.
            </p>

            <div className="hero-recruiter-highlights reveal">
              <div className="highlight-pill">
                <GraduationCap size={16} />
                <span>Master developpement des Services IoT & Licence ISI</span>
              </div>
              <div className="highlight-pill">
                <Cpu size={16} />
                <span>Double Spécialité Web + IoT</span>
              </div>
            </div>

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

          <div className="developer-card reveal" aria-label="Aperçu développeur pour recruteurs">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="code-tabs">
                  <button
                    className={`code-tab ${codeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setCodeTab('profile')}
                    type="button"
                  >
                    <FileCode size={14} />
                    profile.js
                  </button>
                  <button
                    className={`code-tab ${codeTab === 'recruiter' ? 'active' : ''}`}
                    onClick={() => setCodeTab('recruiter')}
                    type="button"
                  >
                    <Briefcase size={14} />
                    recruiter_view.json
                  </button>
                  <button
                    className={`code-tab ${codeTab === 'stack' ? 'active' : ''}`}
                    onClick={() => setCodeTab('stack')}
                    type="button"
                  >
                    <Cpu size={14} />
                    stack_matrix.ts
                  </button>
                </div>
                <button
                  aria-label="Copier le code"
                  className="copy-btn"
                  onClick={handleCopyCode}
                  title="Copier dans le presse-papier"
                  type="button"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="copied-icon" />
                      <span>Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>

              <div className="code-editor-body">
                <div className="line-numbers">
                  {Array.from({ length: 22 }, (_, i) => (
                    <span key={i + 1}>{i + 1}</span>
                  ))}
                </div>

                <div className="code-content-wrapper">
                  {codeTab === 'profile' && (
                    <pre>
                      <code>
                        <span className="code-kw">const</span> <span className="code-var">profile</span> = &#123;<br />
                        &nbsp;&nbsp;<span className="code-key">name</span>: <span className="code-str">"Eya Nemer"</span>,<br />
                        &nbsp;&nbsp;<span className="code-key">role</span>: <span className="code-str">"Développeuse Full Stack & IoT"</span>,<br />
                        &nbsp;&nbsp;<span className="code-key">location</span>: <span className="code-str">"Tunis, Tunisie"</span>,<br />
                        &nbsp;&nbsp;<span className="code-key">status</span>: <span className="code-str">"🟢 Ouverte aux opportunités"</span>,<br />
                        &nbsp;&nbsp;<span className="code-key">diplomas</span>: [<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Master Pro Services IoT (ISET Mahdia)"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Licence Ingénierie Systèmes Informatiques"</span><br />
                        &nbsp;&nbsp;],<br />
                        &nbsp;&nbsp;<span className="code-key">stack</span>: &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">web</span>: [<span className="code-str">"React"</span>, <span className="code-str">"Node"</span>, <span className="code-str">"Laravel"</span>, <span className="code-str">"Express"</span>],<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">iot</span>: [<span className="code-str">"ESP32"</span>, <span className="code-str">"MQTT"</span>, <span className="code-str">"RFID"</span>, <span className="code-str">"C++"</span>],<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">ai</span>: [<span className="code-str">"RAG"</span>, <span className="code-str">"TensorFlow"</span>, <span className="code-str">"Streamlit"</span>]<br />
                        &nbsp;&nbsp;&#125;,<br />
                        &nbsp;&nbsp;<span className="code-key">experiences</span>: [<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"PFE Master: Smart Parking IoT (MERN)"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"PFE Licence: SUPADATA SaaS (Laravel)"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Stage IoT: Tri Sélectif Intelligente"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Stage Web: E-Commerce Dynamique"</span><br />
                        &nbsp;&nbsp;]<br />
                        &#125;;
                      </code>
                    </pre>
                  )}

                  {codeTab === 'recruiter' && (
                    <pre>
                      <code>
                        &#123;<br />
                        &nbsp;&nbsp;<span className="code-key">"candidate"</span>: <span className="code-str">"Eya Nemer"</span>,<br />
                        &nbsp;&nbsp;<span className="code-key">"target_roles"</span>: [<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Développeuse Full Stack Web / Mobile"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Ingénieure / Spécialiste IoT & Embedded"</span><br />
                        &nbsp;&nbsp;],<br />
                        &nbsp;&nbsp;<span className="code-key">"availability"</span>: <span className="code-str">"🟢 Ouverte aux opportunités"</span>,<br />
                        &nbsp;&nbsp;<span className="code-key">"key_assets"</span>: [<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Architecture Web complète & Dashboards MERN"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Systèmes embarqués IoT (ESP32, MQTT, Sensors)"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-str">"Rigueur, esprit d'équipe et esprit solution"</span><br />
                        &nbsp;&nbsp;],<br />
                        &nbsp;&nbsp;<span className="code-key">"open_for_interview"</span>: <span className="code-bool">true</span>,<br />
                        &nbsp;&nbsp;<span className="code-key">"contact"</span>: &#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">"email"</span>: <span className="code-str">"eyanemer2@gmail.com"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">"phone"</span>: <span className="code-str">"+216 55 641 245"</span><br />
                        &nbsp;&nbsp;&#125;<br />
                        &#125;
                      </code>
                    </pre>
                  )}

                  {codeTab === 'stack' && (
                    <pre>
                      <code>
                        <span className="code-kw">export interface</span> <span className="code-type">EngineerProfile</span> &#123;<br />
                        &nbsp;&nbsp;<span className="code-key">name</span>: <span className="code-str">"Eya Nemer"</span>;<br />
                        &nbsp;&nbsp;<span className="code-key">specialization</span>: <span className="code-str">"Full Stack & IoT"</span>;<br />
                        &nbsp;&nbsp;<span className="code-key">frontend</span>: [<span className="code-str">"React.js"</span>, <span className="code-str">"Vite"</span>, <span className="code-str">"Flutter"</span>];<br />
                        &nbsp;&nbsp;<span className="code-key">backend</span>: [<span className="code-str">"Node.js"</span>, <span className="code-str">"Express"</span>, <span className="code-str">"Laravel"</span>];<br />
                        &nbsp;&nbsp;<span className="code-key">hardware</span>: [<span className="code-str">"ESP32"</span>, <span className="code-str">"MQTT"</span>, <span className="code-str">"RFID"</span>, <span className="code-str">"C++"</span>];<br />
                        &nbsp;&nbsp;<span className="code-key">databases</span>: [<span className="code-str">"MongoDB"</span>, <span className="code-str">"MySQL"</span>];<br />
                        &nbsp;&nbsp;<span className="code-key">ai_cloud</span>: [<span className="code-str">"RAG"</span>, <span className="code-str">"TensorFlow"</span>, <span className="code-str">"Streamlit"</span>];<br />
                        &#125;<br />
                      </code>
                    </pre>
                  )}
                </div>
              </div>
            </div>
            <div className="terminal-card">
              <Terminal size={18} />
              <span>status: active</span>
              <strong>Prête pour entretien & recrutement</strong>
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
                  d’une Licence en Systèmes Informatiques (ISSAT Kairouan) et d'un Master professionnel en Développement des Services IoT (ISET Mahdia).
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
                    <span>Master Pro developpement des Services IoT</span>
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
              {['Tous', 'IA & Cloud', 'Web Full Stack'].map((cat) => (
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
                {formSubmitted && (
                  <div className="form-success-banner">
                    <CheckCircle2 size={24} />
                    <div>
                      <h4>Message envoyé avec succès !</h4>
                      <p>
                        Merci {submittedName}, votre message a bien été transmis. Eya Nemer vous répondra directement sur l'adresse email renseignée.
                      </p>
                    </div>
                  </div>
                )}

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
                  <button
                    className={`btn form-submit ${formSubmitted ? 'btn-success' : 'btn-primary'}`}
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="spinning" size={18} />
                        Envoi en cours...
                      </>
                    ) : formSubmitted ? (
                      <>
                        <CheckCircle2 size={18} />
                        Message Envoyé !
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Envoyer le message
                      </>
                    )}
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
              Nemer Eya
            </a>
            <p className="footer-copy">
              Développé par <strong>Nemer Eya</strong> @2026
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

