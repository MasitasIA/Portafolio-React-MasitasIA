import { useState, useEffect } from 'react'
import './index.css'

import { SiReact, SiVite, SiTailwindcss, SiPython, SiDjango, SiKotlin, SiHtml5, SiCss3, SiJavascript, SiTypescript} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import { Github, Mail, MessageCircle, Linkedin, Menu, X, Globe, Play} from 'lucide-react'

// IMPORTAMOS EL COMPONENTE DE NIEVE
import PixelSnow from './PixelSnow.tsx'

// DICCIONARIO DE TRADUCCIONES
const translations = {
  es: {
    nav: { inicio: 'Inicio', sobreMi: 'Sobre Mí', skills: 'Habilidades', proyectos: 'Proyectos', educacion: 'Educación' },
    hero: { greeting: 'Hola, soy', role: 'Aspirante a programador en desarrollo Web y Móvil', cv: 'Descargar CV' },
    about: { 
      title: 'Sobre Mí', 
      text: <>Soy estudiante universitario con formación en <b>Python</b>, <b>Django</b> y <b>SQL</b>, con un fuerte interés en el desarrollo web y móvil. Actualmente me estoy especializando en tecnologías modernas del ecosistema frontend como <b>ReactJS</b>, <b>Vite</b> y <b>Tailwind CSS</b>, buscando profundizar mis conocimientos en la creación de interfaces dinámicas, optimizadas y centradas en la experiencia del usuario.</> 
    },
    skills: { title: 'Habilidades' },
    projects: { 
      title: 'Proyectos', repo: 'Ver Repositorio', demo: "Demo",
      p1Desc: 'Bot de Discord que utiliza la API de Gemini para generar respuestas inteligentes a las preguntas de los usuarios, además de incluir una api generadora de imágenes con Lenguaje Humano.',
      p2Desc: 'Plugin de Minecraft, hecho en PaperMC, para las versiones 1.21 en adelante. Agrega globos de textos interactivos para aumentar la inmersión del jugador.',
      p3Desc: 'Este repositorio guarda mi portafolio personal desarrollado con React y TypeScript, es esta misma web que estás viendo.'
    },
    education: { title: 'Educación', curr1: 'Tecnicatura en Data Science', curr2: 'Bachiller en Economía y Administración' },
    stats: { title: 'Lenguajes Más Usados', desc: 'Basado en la actividad reciente de mis repositorios en GitHub.' },
    footer: '© 2026 Nereo Schmidt. Puedes modificar libremente esta web para uso personal o comercial.'
  },
  en: {
    nav: { inicio: 'Home', sobreMi: 'About', skills: 'Skills', proyectos: 'Projects', educacion: 'Education' },
    hero: { greeting: 'Hi, I am', role: 'Aspiring Web and Mobile Developer', cv: 'Download CV' },
    about: { 
      title: 'About Me', 
      text: <>I am a university student with training in <b>Python</b>, <b>Django</b>, and <b>SQL</b>, with a strong interest in web and mobile development. Currently, I am specializing in modern frontend ecosystem technologies like <b>ReactJS</b>, <b>Vite</b>, and <b>Tailwind CSS</b>, seeking to deepen my knowledge in creating dynamic, optimized, and user-centric interfaces.</> 
    },
    skills: { title: 'Skills' },
    projects: { 
      title: 'Projects', repo: 'View Repository', demo: "Demo",
      p1Desc: 'Discord bot that uses the Gemini API to generate intelligent responses to user questions, plus an image generation API using natural language.',
      p2Desc: 'Minecraft plugin, made in PaperMC, for versions 1.21 and above. Adds interactive text balloons to increase player immersion.',
      p3Desc: 'This repository holds my personal portfolio developed with React and TypeScript, which is the website you are currently viewing.'
    },
    education: { title: 'Education', curr1: 'Associate Degree in Data Science', curr2: 'High School Diploma in Economics and Administration' },
    stats: { title: 'Most Used Languages', desc: 'Based on recent activity in my GitHub repositories.' },
    footer: '© 2026 Nereo Schmidt. You can freely modify this website for personal or commercial use.'
  },
  it: {
    nav: { inicio: 'Inizio', sobreMi: 'Chi Sono', skills: 'Competenze', proyectos: 'Progetti', educacion: 'Istruzione' },
    hero: { greeting: 'Ciao, sono', role: 'Aspirante sviluppatore Web e Mobile', cv: 'Scarica CV' },
    about: { 
      title: 'Chi Sono', 
      text: <>Sono uno studente universitario con formazione in <b>Python</b>, <b>Django</b> e <b>SQL</b>, con un forte interesse per lo sviluppo web e mobile. Attualmente mi sto specializzando nelle moderne tecnologie dell'ecosistema frontend come <b>ReactJS</b>, <b>Vite</b> e <b>Tailwind CSS</b>, cercando di approfondire le mie conoscenze nella creazione di interfacce dinamiche, ottimizzate e incentrate sull'utente.</> 
    },
    skills: { title: 'Competenze' },
    projects: { 
      title: 'Progetti', repo: 'Vedi Repository', demo: "Demo",
      p1Desc: 'Bot di Discord che utilizza l\'API di Gemini per generare risposte intelligenti alle domande degli utenti, oltre a includere un\'API per la generazione di immagini con linguaggio naturale.',
      p2Desc: 'Plugin per Minecraft, realizzato in PaperMC, per le versioni 1.21 e successive. Aggiunge palloncini di testo interattivi per aumentare l\'immersione del giocatore.',
      p3Desc: 'Questo repository contiene il mio portfolio personale sviluppato con React e TypeScript, che è il sito web che stai visualizzando in questo momento.'
    },
    education: { title: 'Istruzione', curr1: 'Laurea Breve in Data Science', curr2: 'Diploma in Economia e Amministrazione' },
    stats: { title: 'Linguaggi Più Usati', desc: 'Basato sull\'attività recente nei miei repository GitHub.' },
    footer: '© 2026 Nereo Schmidt. Puoi modificare liberamente questo sito per uso personale o commerciale.'
  }
}

// TIPOS DE IDIOMA
type Lang = 'es' | 'en' | 'it'

export default function App() {
  // ESTADO PARA CONTROLAR EL MENÚ MÓVIL
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // ESTADO PARA CONTROLAR EL IDIOMA SELECCIONADO
  const [lang, setLang] = useState<Lang>('es')
  const t = translations[lang]

  // FUNCIÓN PARA CERRAR EL MENÚ MÓVIL AL HACER CLICK EN UN ENLACE
  const closeMenu = () => setIsMenuOpen(false)

  // ESTADO PARA DETECTAR SI ESTAMOS EN MÓVIL
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }
      
      handleResize()
      window.addEventListener('resize', handleResize)
      
      return () => window.removeEventListener('resize', handleResize)
    }, [])

  return (
    <div className="bg-zinc-900 text-zinc-100 font-sans min-h-screen relative">
      
      {/* --- EFECTO DE FONDO: PIXEL SNOW --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <PixelSnow 
          color="#ffffff" 
          speed={1.25} 
          pixelResolution={isMobile ? 100 : 200} 
          density={isMobile ? 0.03 : 0.1}
          flakeSize={isMobile ? 0.08 : 0.05}
          farPlane={isMobile ? 10 : 20}
          variant="square" 
        />
      </div>

      {/* HEADER FIJO */}
      <header className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-800 z-50 px-8 py-4 transition-all">
        
        <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
          
          {/* Logo y Selector de Idiomas agrupados */}
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-boldpixels font-bold text-mist-50 tracking-tighter">
              Masitas<span className="text-zinc-300">IA</span>
            </h1>
            
            {/* SELECTOR DE IDIOMA */}
            <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-md px-2 py-1 gap-1">
              <Globe className="w-4 h-4 text-zinc-400" />
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value as Lang)}
                className="bg-transparent text-zinc-300 text-sm outline-none cursor-pointer appearance-none pr-1"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="it">IT</option>
              </select>
            </div>
          </div>
          
          {/* NAV DESKTOP */}
          <nav className="hidden md:flex gap-6 font-medium text-zinc-300">
            <a href="#inicio" className="hover:text-indigo-400 transition-colors">{t.nav.inicio}</a>
            <a href="#sobre-mi" className="hover:text-indigo-400 transition-colors">{t.nav.sobreMi}</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">{t.nav.skills}</a>
            <a href="#proyectos" className="hover:text-indigo-400 transition-colors">{t.nav.proyectos}</a>
            <a href="#educacion" className="hover:text-indigo-400 transition-colors">{t.nav.educacion}</a>
          </nav>

          <button 
            className="md:hidden text-zinc-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* NAV MOBILE */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 flex flex-col items-center py-6 gap-6 shadow-xl">
            <a href="#inicio" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">{t.nav.inicio}</a>
            <a href="#sobre-mi" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">{t.nav.sobreMi}</a>
            <a href="#skills" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">{t.nav.skills}</a>
            <a href="#proyectos" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">{t.nav.proyectos}</a>
            <a href="#educacion" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">{t.nav.educacion}</a>
          </nav>
        )}
        
      </header>

      {/* CONTENIDO PRINCIPAL Y FOOTER ENVUELTOS EN Z-10 PARA ESTAR SOBRE LA NIEVE */}
      <div className="relative z-10">
        <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col gap-16">
          
          {/* SECCIÓN: INICIO */}
          <section id="inicio" className="scroll-mt-32">
            <div className="border-2 border-zinc-700 rounded-3xl p-8 md:p-12 relative flex flex-col gap-6 bg-zinc-900/80 backdrop-blur-sm">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-2">{t.hero.greeting} <span className="font-bold text-indigo-400">Nereo Schmidt</span>. 👋</h2>
                <p className="text-xl text-zinc-400">{t.hero.role}</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4">
                <a 
                href="/Nereo_Schmidt_CV_Español.pdf" 
                download="Nereo_Schmidt_CV_Español.pdf"
                className="border-2 border-zinc-500 hover:bg-zinc-800 text-zinc-100 px-6 py-2 rounded-lg font-medium transition-all w-full sm:w-auto text-center inline-block"
                >
                  {t.hero.cv}
                </a>

                <div className="flex gap-4">
                  <a href="https://github.com/MasitasIA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"><Github className="w-6 h-6 group-hover:scale-110 transition-transform" /></a>
                  <a href="https://wa.me/5492923519367" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"><MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /></a>
                  <a href="mailto:nereoschmidt@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"><Mail className="w-6 h-6 group-hover:scale-110 transition-transform" /></a>
                  <a href="https://www.linkedin.com/in/nereoschmidt/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"><Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" /></a>
                </div>
              </div>
            </div>
          </section>

          {/* SECCIÓN: SOBRE MÍ */}
          <section id="sobre-mi" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4 text-zinc-100">{t.about.title}</h2>
            <p className="text-justify text-lg text-zinc-400 leading-relaxed max-w-4xl">{t.about.text}</p>
          </section>

          {/* SECCIÓN: SKILLS */}
          <section id="skills" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 text-zinc-100">{t.skills.title}</h2>
            <div className="justify-center flex flex-wrap gap-4">
              {[
                { nombre: 'React', icono: SiReact, color: 'text-[#61DAFB]' },
                { nombre: 'Vite', icono: SiVite, color: 'text-[#646CFF]' },
                { nombre: 'TailwindCSS', icono: SiTailwindcss, color: 'text-[#38B2AC]' },
                { nombre: 'Python', icono: SiPython, color: 'text-[#3776AB]' },
                { nombre: 'Django', icono: SiDjango, color: 'text-[#44B78B]' },
                { nombre: 'SQL', icono: FaDatabase, color: 'text-[#F29111]' },
                { nombre: 'Kotlin', icono: SiKotlin, color: 'text-[#F29111]' },
                { nombre: 'HTML', icono: SiHtml5, color: 'text-[#F29111]' },
                { nombre: 'CSS', icono: SiCss3, color: 'text-[#F29111]' },
                { nombre: 'JavaScript', icono: SiJavascript, color: 'text-[#F7DF1E]' },
                { nombre: 'TypeScript', icono: SiTypescript, color: 'text-[#F7DF1E]' },
              ].map((skill) => (
                <span key={skill.nombre} className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-full font-semibold shadow-sm hover:border-zinc-500 transition-colors cursor-default">
                  <skill.icono className={`w-5 h-5 ${skill.color}`} />
                  {skill.nombre}
                </span>
              ))}
            </div>
          </section>

          {/* SECCIÓN: PROYECTOS */}
          <section id="proyectos" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 text-zinc-100">{t.projects.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
                <div className="w-full h-48 bg-zinc-900 overflow-hidden relative p-0 flex items-center justify-center">
                  <img src="/discordbotpython.png" alt="Bot Discord Gemini" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">Bot Discord Gemini - <span className="text-indigo-400">Python</span></h3>
                  <p className="text-zinc-400 mb-4">{t.projects.p1Desc}</p>
                  <div className="mt-auto flex flex-col gap-2">
                    <a href="https://github.com/MasitasIA/Discord-Gemini-Bot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors">
                      <Github className="w-5 h-5" /> {t.projects.repo}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
                <div className="w-full h-48 bg-zinc-900 overflow-hidden relative p-2 flex items-center justify-center">
                  <img src="/chatglobo.png" alt="ChatGlobo" className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">ChatGlobo - <span className="text-indigo-400">Kotlin</span></h3>
                  <p className="text-zinc-400 mb-6 grow text-justify">{t.projects.p2Desc}</p>
                  <div className="mt-auto flex flex-col xl:flex-row gap-2">
                    <a href="https://github.com/MasitasIA/ChatGlobo_Kotlin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors">
                      <Github className="w-5 h-5" /> {t.projects.repo}
                    </a>
                    <a href="https://hangar.papermc.io/MasitasIA/ChatGlobo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors">
                      <Play className="w-5 h-5" /> {t.projects.demo}
                    </a>                  
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
                <div className="w-full h-48 bg-zinc-900 overflow-hidden relative flex items-center justify-center">
                  <img src="/PORTADA.png" alt="Portafolio Personal / MasitasIA" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">Portafolio Personal - <span className="text-indigo-400">TypeScript</span></h3>
                  <p className="text-zinc-400 mb-4">{t.projects.p3Desc}</p>
                  <div className="mt-auto flex flex-col gap-2">
                    <a href="https://github.com/MasitasIA/Portafolio-React-MasitasIA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors">
                      <Github className="w-5 h-5" /> {t.projects.repo}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>
          
          {/* SECCIÓN: EDUCACIÓN */}
          <section id="educacion" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-4 text-zinc-100">{t.education.title}</h2>
              <div className='bg-zinc-800 rounded-xl'>
                <div className='p-6 border-b border-zinc-700'>
                  <h3 className='text-xl font-bold text-zinc-100'>{t.education.curr1}</h3>
                  <p className='text-zinc-400'>Teclab "Instituto Técnico Superior" - <b><span className="text-indigo-400">2025/PRESENTE</span></b></p>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-zinc-100'>{t.education.curr2}</h3>
                  <p className='text-zinc-400'>Escuela Secundaria Nº5 "Coronel Marcelino E Freyre" - <b><span className="text-indigo-400">2019/2025</span></b></p>
                </div>
              </div>
          </section>

          {/* SECCIÓN: ESTADÍSTICAS */}
          <section id="estadisticas" className="scroll-mt-32">
            <h2 className="text-2xl font-bold mb-6 text-zinc-100">{t.stats.title}</h2>
            
            <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 p-8 hover:border-zinc-500 transition-colors">
              <p className="text-zinc-400 mb-8 text-justify">{t.stats.desc}</p>
              <div className="flex flex-col gap-6">
                
                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-zinc-200 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#3572A5]"></span> Python</span>
                    <span className="text-zinc-400">45%</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2.5"><div className="bg-[#3572A5] h-2.5 rounded-full" style={{ width: '45%' }}></div></div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-zinc-200 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#3178C6]"></span> TypeScript</span>
                    <span className="text-zinc-400">30%</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2.5"><div className="bg-[#3178C6] h-2.5 rounded-full" style={{ width: '30%' }}></div></div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-zinc-200 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#A97BFF]"></span> Kotlin</span>
                    <span className="text-zinc-400">15%</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2.5"><div className="bg-[#A97BFF] h-2.5 rounded-full" style={{ width: '15%' }}></div></div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-zinc-200 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#563D7C]"></span> CSS / Tailwind</span>
                    <span className="text-zinc-400">10%</span>
                  </div>
                  <div className="w-full bg-zinc-900 rounded-full h-2.5"><div className="bg-[#563D7C] h-2.5 rounded-full" style={{ width: '10%' }}></div></div>
                </div>

              </div>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer className="bg-zinc-950 text-center py-6 border-t border-zinc-800">
          <p className="text-sm text-zinc-500">{t.footer}</p>
        </footer>
      </div>

    </div>
  )
}