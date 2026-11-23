import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BrainCircuit,
  Briefcase,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  Eye,
  FileCode,
  GraduationCap,
  Github,
  Layers3,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  MonitorCog,
  Phone,
  Rocket,
  Send,
  Server,
  ShoppingBag,
  ShieldCheck,
  Wrench,
  X,
  ZoomIn,
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
    title: 'Front-end et mobile',
    icon: Layers3,
    tone: 'blue',
    skills: ['React.js', 'Flutter', 'Vite', 'Bootstrap', 'CSS adaptatif', 'Tableaux de bord interactifs'],
  },
  {
    title: 'Back-end',
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
    title: 'Données, IA et cloud',
    icon: BrainCircuit,
    tone: 'purple',
    skills: ['MongoDB', 'MySQL', 'SQL Server', 'TensorFlow', 'RAG', 'Streamlit', 'Azure IoT'],
  },
  {
    title: 'Outils et méthodes',
    icon: Wrench,
    tone: 'red',
    skills: ['Git', 'Docker', 'UML', 'Scrum', 'VMware', 'Postman', 'Documentation'],
  },
]

const experiences = [
  {
    title: 'Stage de fin d’études (PFE)',
    badge: 'Master',
    company: 'be coders',
    period: '2026',
    project: 'Système de parking intelligent connecté (CityParking)',
    description:
      'Solution de supervision en temps réel et de gestion automatisée des places de parking à l’aide d’objets IoT, d’une application mobile et d’un tableau de bord web.',
    tasks: [
      'Conception d’une architecture IoT reposant sur des microcontrôleurs ESP32, des modules RFID et le protocole MQTT',
      'Développement d’une application Flutter pour consulter et réserver les places, avec guidage des utilisateurs',
      'Création d’un tableau de bord web avec la stack MERN pour gérer les abonnements, les utilisateurs et les statistiques en temps réel',
      'Mise en place d’une communication bidirectionnelle en temps réel entre le système embarqué et le serveur web',
    ],
    tech: ['ESP32', 'RFID', 'MQTT', 'Flutter', 'React.js', 'Node.js', 'Express', 'MongoDB'],
    images: [
      {
        src: `${baseUrl}parking1.png`,
        caption: 'CityParking — écran de connexion de l’application Flutter',
      },
      {
        src: `${baseUrl}parking2.png`,
        caption: 'CityParking — carte des places et réservations',
      },
      {
        src: `${baseUrl}parking.png`,
        caption: 'CityParking — aperçu du projet de fin d’études',
      },
    ],
  },
  {
    title: 'Stage de perfectionnement — poubelle intelligente',
    badge: 'Perfectionnement',
    company: 'Designet Web Agency',
    period: '2024 - 2025',
    project: 'Poubelle intelligente connectée et tri automatisé',
    description:
      'Conception et développement d’un prototype de tri sélectif avec détection de présence, classification automatique et tableau de bord de supervision.',
    tasks: [
      'Détection de présence et analyse par capteurs à ultrasons et d’humidité pour distinguer les déchets humides et secs',
      'Pilotage du mécanisme de tri par servomoteur, programmé en C++ sur un microcontrôleur ESP32',
      'Développement d’un tableau de bord web pour visualiser le niveau de remplissage et les alertes de maintenance',
      'Connexion du prototype au serveur web à l’aide d’une API REST et d’une liaison série',
    ],
    tech: ['ESP32', 'C++', 'Capteurs à ultrasons', 'Servomoteur', 'React.js', 'Express', 'MongoDB'],
    images: [
      {
        src: `${baseUrl}poubelle1.png`,
        caption: 'SmartBin — accueil et présentation du projet IoT',
      },
      {
        src: `${baseUrl}poubelle2.png`,
        caption: 'SmartBin — suivi du remplissage et du tri en temps réel',
      },
    ],
  },
  {
    title: 'Stage de fin d’études (licence)',
    badge: 'Licence ISI',
    company: 'Designet Web Agency',
    period: '2024',
    project: 'Plateforme web SUPADATA — cartes de visite numériques',
    description:
      'Développement d’une plateforme SaaS de création, de personnalisation et de partage de cartes de visite numériques.',
    tasks: [
      'Analyse des besoins, modélisation de la base de données relationnelle et conception de l’architecture web',
      'Développement du back-end et des API avec Laravel et PHP, avec gestion sécurisée des profils',
      'Conception d’interfaces web adaptatives et intuitives intégrant des QR codes et des liens NFC',
      'Tests de performance et mise en place des fonctions d’administration des utilisateurs et des abonnements',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Bootstrap'],
    images: [
      {
        src: `${baseUrl}supadata1.png`,
        caption: 'SUPADATA — accueil et cartes de visite numériques',
      },
      {
        src: `${baseUrl}supadata2.png`,
        caption: 'SUPADATA — connexion et gestion des comptes utilisateurs',
      },
    ],
  },
  {
    title: 'Stage de perfectionnement — site e-commerce',
    badge: 'Perfectionnement web',
    company: 'Designet Web Agency',
    period: '2024',
    project: 'Site e-commerce dynamique et adaptatif',
    description:
      'Conception et optimisation d’un site e-commerce avec catalogue dynamique, panier d’achat et panneau d’administration.',
    tasks: [
      'Développement du catalogue, du filtrage par catégorie, du panier et de la gestion des commandes',
      'Adaptation de l’interface aux mobiles, aux tablettes et aux ordinateurs',
      'Optimisation du temps de chargement, du référencement technique et de la base de données MySQL',
      'Mise en place d’un espace d’administration pour gérer les stocks et suivre les ventes',
    ],
    tech: ['PHP', 'Laravel / JavaScript', 'MySQL', 'CSS adaptatif', 'API REST', 'UI/UX'],
  },
]

const projects = [
  {
    title: 'SmartPlant IA',
    subtitle: 'IRRIGATION CONNECTÉE & DÉTECTION FOLIAIRE TENSORFLOW',
    category: 'IA & Cloud',
    categoryBadge: 'PROJET IA & IoT',
    icon: BrainCircuit,
    architecture: 'IoT ESP32 + Vision par Ordinateur TensorFlow',
    description:
      'Système d’irrigation connecté qui associe capteurs et intelligence artificielle pour surveiller les cultures et détecter les maladies foliaires.',
    tech: ['TensorFlow', 'React.js', 'Node.js', 'MongoDB', 'IoT ESP32'],
    images: [
      {
        src: `${baseUrl}smartplantia.jpeg`,
        caption: 'SmartPlant IA — paramètres environnementaux en temps réel',
      },
      {
        src: `${baseUrl}smartplantia2.jpeg`,
        caption: 'SmartPlant IA — configuration de l’irrigation et historique',
      },
    ],
  },
  {
    title: 'Mini système MES',
    subtitle: 'TABLEAU DE BORD DE SUIVI DE FABRICATION EN TEMPS RÉEL',
    category: 'Web Full Stack',
    categoryBadge: 'APPLICATION INDUSTRIELLE WEB',
    icon: Database,
    architecture: 'Stack MERN pour le suivi industriel + Recharts',
    description:
      'Application de suivi industriel centralisant les données de production, les équipements et les indicateurs clés dans un tableau de bord.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
    images: [
      {
        src: `${baseUrl}mes.png`,
        caption: 'Système MES — suivi et exécution de la production industrielle',
      },
    ],
  },
  {
    title: 'IntelliFarm AI',
    subtitle: 'ASSISTANT AGRICOLE INTELLIGENT RAG & AZURE IoT',
    category: 'IA & Cloud',
    categoryBadge: 'PROJET IA & CLOUD',
    icon: BrainCircuit,
    architecture: 'RAG + Streamlit + Azure IoT',
    description:
      'Assistant agricole basé sur le RAG, qui aide les agriculteurs à trouver des réponses dans une base de connaissances spécialisée en agriculture.',
    tech: ['Python', 'Streamlit', 'RAG', 'Vector DB', 'Azure IoT'],
    images: [
      {
        src: `${baseUrl}IntelliFarm.png`,
        caption: 'IntelliFarm AI — interface de l’assistant agricole',
      },
    ],
  },
  {
    title: 'Site vitrine EN Digital Studio',
    subtitle: 'SITE VITRINE & PRÉSENTATION DE L’AGENCE',
    category: 'Web Full Stack',
    categoryBadge: 'SITE WEB VITRINE',
    icon: BriefcaseBusiness,
    architecture: 'Site vitrine adaptatif',
    description:
      'Site vitrine présentant l’identité, les services et l’univers visuel de l’agence EN Digital Studio.',
    tech: ['Site vitrine', 'Design adaptatif', 'EN Digital Studio'],
    images: [
      {
        src: `${baseUrl}endigitalstudio.png`,
        caption: 'Site vitrine EN Digital Studio',
      },
    ],
  },
  {
    title: 'Site de parapharmacie',
    subtitle: 'BOUTIQUE BEAUTÉ · SOIN · BIEN-ÊTRE',
    category: 'E-commerce',
    categoryBadge: 'SITE E-COMMERCE',
    icon: ShoppingBag,
    architecture: 'Interface de boutique en ligne',
    description:
      'Boutique en ligne de parapharmacie dédiée à la beauté, au soin et au bien-être, avec une mise en avant des produits, des marques et des promotions.',
    tech: ['E-commerce', 'UI/UX Design', 'Parapharmacie'],
    images: [
      {
        src: `${baseUrl}para1.png`,
        caption: 'Site de parapharmacie — page d’accueil beauté, soin et bien-être',
      },
    ],
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
    title: 'Baccalauréat en sciences expérimentales',
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
    external: true,
  },
  {
    label: 'GitHub',
    value: '@eyanemer',
    href: 'https://github.com/eyanemer',
    icon: Github,
    external: true,
  },
]

function StageMediaSlider({ images, title, onOpenLightbox }) {
  if (!images || images.length === 0) return null

  return (
    <div className="stage-thumbs-row">
      {images.map((img, idx) => (
        <button
          className="stage-thumb"
          key={idx}
          onClick={() => onOpenLightbox(images, idx, title)}
          title={img.caption || title}
          type="button"
        >
          <img
            alt={img.caption || title}
            loading="lazy"
            src={img.src}
          />
          <div className="stage-thumb-overlay">
            <ZoomIn size={18} />
          </div>
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project, index, onOpenLightbox }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const images = project.images || []
  const hasImages = images.length > 0
  const hasMultiple = images.length > 1
  const Icon = project.icon

  // Touch swipe support
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 35 && hasMultiple) {
      setCurrentIdx((prev) => (prev + 1) % images.length)
    } else if (distance < -35 && hasMultiple) {
      setCurrentIdx((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIdx((prev) => (prev + 1) % images.length)
  }

  const handleDotClick = (e, idx) => {
    e.stopPropagation()
    setCurrentIdx(idx)
  }

  return (
    <article className="pro-project-card reveal">
      {/* 01 // CATEGORY ROW (Exact match to screenshot) */}
      <div className="pro-card-header">
        <span className="pro-card-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="pro-card-badge">{project.categoryBadge || project.category}</span>
      </div>

      {/* MEDIA PREVIEW BOX (ONLY WHEN PROJECT HAS IMAGES) */}
      {hasImages && (
        <div
          className="pro-card-media-box"
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
        >
          <div
            className="pro-slider-viewport"
            onClick={() => onOpenLightbox(images, currentIdx, project.title)}
            role="button"
            tabIndex={0}
            title="Cliquer pour afficher l'aperçu détaillé"
          >
            <div
              className="pro-slider-track"
              style={{ transform: `translateX(-${currentIdx * 100}%)` }}
            >
              {images.map((img, idx) => (
                <div className="pro-slider-slide" key={idx}>
                  <img
                    alt={img.caption || project.title}
                    className="pro-slide-img"
                    loading="lazy"
                    src={img.src}
                  />
                </div>
              ))}
            </div>

            {/* Hover overlay with centered "Aperçu détaillé ↗" button (exact match to screenshot card 01) */}
            <div className="pro-media-overlay">
              <span className="pro-detail-pill">
                <span>Aperçu détaillé</span>
                <ArrowUpRight size={15} />
              </span>
              {hasMultiple && (
                <span className="pro-counter-pill">
                  {currentIdx + 1} / {images.length}
                </span>
              )}
            </div>

            {/* Navigation arrows for projects with 2 images */}
            {hasMultiple && (
              <>
                <button
                  aria-label="Image précédente"
                  className="pro-slider-arrow prev"
                  onClick={handlePrev}
                  title="Image précédente"
                  type="button"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  aria-label="Image suivante"
                  className="pro-slider-arrow next"
                  onClick={handleNext}
                  title="Image suivante"
                  type="button"
                >
                  <ChevronRight size={16} />
                </button>
                <div className="pro-slider-dots">
                  {images.map((_, idx) => (
                    <button
                      aria-label={`Vue ${idx + 1}`}
                      className={`pro-dot ${idx === currentIdx ? 'active' : ''}`}
                      key={idx}
                      onClick={(e) => handleDotClick(e, idx)}
                      type="button"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CARD BODY: TITLE & SUBTITLE */}
      <div className="pro-card-body">
        <h3 className="pro-card-title">{project.title}</h3>
        <p className="pro-card-subtitle">{project.subtitle}</p>
        <p className="pro-card-desc">{project.description}</p>
      </div>

      {/* TECH TAGS */}
      <div className="pro-card-techs">
        {project.tech.map((tech) => (
          <span className="pro-tech-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {/* FOOTER ACTION */}
      {hasImages && (
        <div className="pro-card-footer">
          <button
            className="pro-card-action-btn"
            onClick={() => onOpenLightbox(images, currentIdx, project.title)}
            type="button"
          >
            <span>Aperçu détaillé</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      )}
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [typedText, setTypedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
  const [typedCode, setTypedCode] = useState('')
  const [copied, setCopied] = useState(false)
  const [activeProjectImages, setActiveProjectImages] = useState({})
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: '',
  })

  const openLightbox = (images, index = 0, title = '') => {
    if (!images || images.length === 0) return
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index,
      title,
    })
  }

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }))
  }

  const prevLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }))
  }

  const nextLightboxImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }))
  }

  useEffect(() => {
    if (!lightbox.isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft' && lightbox.images.length > 1) prevLightboxImage()
      if (e.key === 'ArrowRight' && lightbox.images.length > 1) nextLightboxImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightbox.isOpen, lightbox.images.length])

  const rawSnippets = {
    profile: `const profile = {
  name: "Eya Nemer",
  role: "Développeuse Full Stack & IoT",
  location: "Tunis, Tunisie",
  focus: "Full Stack, IoT et IA",
  diplomes: [
    "Master professionnel en services IoT (ISET Mahdia)",
    "Licence en ingénierie des systèmes informatiques (ISSAT Kairouan)"
  ],
  stack: {
    web: ["React.js", "Node.js", "Laravel", "Express"],
    iot: ["ESP32", "MQTT", "RFID", "C++", "Capteurs"],
    ai: ["RAG", "TensorFlow", "Streamlit", "Azure IoT"]
  },
  experiences: [
    "Stage de fin d’études (Master) : CityParking, parking connecté (IoT, Flutter, MERN)",
    "Stage de fin d’études (Licence) : SUPADATA, cartes de visite numériques (Laravel)",
    "Stage de perfectionnement : SmartBin, tri sélectif connecté",
    "Stage de perfectionnement : site e-commerce"
  ]
};`,
    recruiter: `{
  "candidate": "Eya Nemer",
  "target_roles": ["Développeuse Full Stack", "Ingénieure IoT & Embarqué"],
  "availability": "🟢 Ouverte aux opportunités",
  "languages": ["Français (Courant)", "Anglais (Technique)"],
  "key_assets": [
    "Compétences en IoT, développement web et applications Full Stack",
    "Création de tableaux de bord MERN en temps réel",
    "Rigueur, autonomie et intérêt pour les nouvelles technologies"
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

  const activeSnippet = rawSnippets[codeTab] || rawSnippets.profile

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedCode(activeSnippet)
      return
    }

    setTypedCode('')
    let characterIndex = 0
    const interval = window.setInterval(() => {
      characterIndex += 1
      setTypedCode(activeSnippet.slice(0, characterIndex))

      if (characterIndex >= activeSnippet.length) {
        window.clearInterval(interval)
      }
    }, 12)

    return () => window.clearInterval(interval)
  }, [activeSnippet])

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
              <span>À la recherche de nouvelles opportunités</span>
            </div>

            <h1 className="hero-name reveal">
              <span className="hero-firstname">Eya</span>
              <span>Nemer</span>
            </h1>

            <div className="hero-title reveal">
              <span className="typing-prefix">&gt; </span>
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-desc reveal">
              Ingénieure IoT et développeuse Full Stack, titulaire d’un master professionnel en développement des services IoT. Je conçois des applications web et mobiles, des systèmes connectés et des solutions d’intelligence artificielle.
            </p>

            <div className="hero-recruiter-highlights reveal">
              <div className="highlight-pill">
                <GraduationCap size={16} />
                <span>Master professionnel en services IoT · Licence en systèmes informatiques</span>
              </div>
              <div className="highlight-pill">
                <Cpu size={16} />
                <span>Double spécialisation : Full Stack & IoT</span>
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
              <a aria-label="GitHub" href="https://github.com/eyanemer" rel="noreferrer" target="_blank">
                <Github size={20} />
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
                  {Array.from({ length: typedCode.split('\n').length }, (_, i) => (
                    <span key={i + 1}>{i + 1}</span>
                  ))}
                </div>

                <div className="code-content-wrapper">
                  <pre>
                    <code>
                      {typedCode.split(/("(?:\\.|[^"\\])*"|\b(?:const|export|interface)\b)/g).map((token, index) => {
                        const className = token.startsWith('"')
                          ? 'code-str'
                          : /^(const|export|interface)$/.test(token)
                            ? 'code-kw'
                            : undefined

                        return className ? (
                          <span className={className} key={index}>{token}</span>
                        ) : (
                          <span key={index}>{token}</span>
                        )
                      })}
                      <span className="code-cursor" aria-hidden="true">▍</span>
                    </code>
                  </pre>
                </div>
              </div>
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
              <h2 className="section-title">Profil et ambition</h2>
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
                    <span>Master professionnel en développement des services IoT</span>
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
              <h2 className="section-title">Stack technique et savoir-faire</h2>
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
              <h2 className="section-title">Parcours professionnel et stages</h2>
              <p className="section-sub">
                Quatre stages en développement Full Stack, en systèmes IoT connectés et en conception d’applications web.
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

                    {experience.images && experience.images.length > 0 && (
                      <StageMediaSlider
                        images={experience.images}
                        onOpenLightbox={openLightbox}
                        title={`${experience.company} - ${experience.project}`}
                      />
                    )}
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
              <h2 className="section-title">Projets réalisés</h2>
              <p className="section-sub">
                Systèmes IoT connectés, plateformes web Full Stack et solutions d’intelligence artificielle réalisés au cours de mon parcours.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  index={index}
                  key={project.title}
                  onOpenLightbox={openLightbox}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FORMATIONS */}
        <section className="education section" id="education">
          <div className="container">
            <div className="section-header reveal">
              <span className="section-tag">05 // Formations</span>
              <h2 className="section-title">Parcours académique</h2>
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
              <h2 className="section-title">Contactez-moi</h2>
              <p className="section-sub">
                Je recherche des opportunités en développement Full Stack, en IoT et dans les projets numériques. N’hésitez pas à me contacter.
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
                      rel={link.external ? 'noreferrer' : undefined}
                      target={link.external ? '_blank' : undefined}
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
              Eya Nemer
            </a>
            <p className="footer-copy">
              Portfolio conçu et développé par <strong>EYA NEMER</strong> @2026
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
              <a aria-label="GitHub" href="https://github.com/eyanemer" rel="noreferrer" target="_blank">
                <Github size={18} />
              </a>
              <a aria-label="Email" href="mailto:eyanemer2@gmail.com">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {lightbox.isOpen && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu agrandi du projet"
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div className="lightbox-title-box">
                <h3 className="lightbox-title">{lightbox.title}</h3>
                {lightbox.images.length > 1 && (
                  <span className="lightbox-counter">
                    {lightbox.currentIndex + 1} / {lightbox.images.length}
                  </span>
                )}
              </div>
              <button
                className="lightbox-close-btn"
                onClick={closeLightbox}
                type="button"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="lightbox-body">
              {lightbox.images.length > 1 && (
                <button
                  className="lightbox-nav-btn prev"
                  onClick={prevLightboxImage}
                  type="button"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <div className="lightbox-image-wrap">
                <img
                  src={lightbox.images[lightbox.currentIndex]?.src}
                  alt={lightbox.images[lightbox.currentIndex]?.caption || lightbox.title}
                  className="lightbox-main-img"
                />
              </div>

              {lightbox.images.length > 1 && (
                <button
                  className="lightbox-nav-btn next"
                  onClick={nextLightboxImage}
                  type="button"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            <div className="lightbox-footer">
              <p className="lightbox-caption">
                {lightbox.images[lightbox.currentIndex]?.caption}
              </p>

              {lightbox.images.length > 1 && (
                <div className="lightbox-thumbs">
                  {lightbox.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`lightbox-thumb ${idx === lightbox.currentIndex ? 'active' : ''}`}
                      onClick={() => setLightbox((prev) => ({ ...prev, currentIndex: idx }))}
                      title={img.caption || `Vue ${idx + 1}`}
                    >
                      <img src={img.src} alt={`Aperçu ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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

