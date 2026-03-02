import { useState } from 'react'

import './index.css'

import { SiReact, SiVite, SiTailwindcss, SiPython, SiDjango, SiKotlin, SiHtml5, SiCss3, SiJavascript, SiTypescript} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

import { Github, Mail, MessageCircle, Linkedin, Menu, X } from 'lucide-react'

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="bg-zinc-900 text-zinc-100 font-sans min-h-screen">
      
      {/* HEADER FIJO */}
      <header className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md shadow-sm border-b border-zinc-800 z-50 px-8 py-4 transition-all">
        
        <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
          <h1 className="text-4xl font-boldpixels font-bold text-mist-50 tracking-tighter">
            Masitas<span className="text-zinc-300">IA</span>
          </h1>
          
          <nav className="hidden md:flex gap-6 font-medium text-zinc-300">
            <a href="#inicio" className="hover:text-indigo-400 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-indigo-400 transition-colors">Sobre Mí</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Habilidades</a>
            <a href="#proyectos" className="hover:text-indigo-400 transition-colors">Proyectos</a>
          </nav>

          <button 
            className="md:hidden text-zinc-300 hover:text-indigo-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 flex flex-col items-center py-6 gap-6 shadow-xl">
            <a href="#inicio" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">Inicio</a>
            <a href="#sobre-mi" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">Sobre Mí</a>
            <a href="#skills" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">SKILLS</a>
            <a href="#proyectos" onClick={closeMenu} className="text-xl font-medium text-zinc-300 hover:text-indigo-400 transition-colors">Proyectos</a>
          </nav>
        )}
        
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col gap-16">
        
        {/* SECCIÓN: INICIO */}
        <section id="inicio" className="scroll-mt-32">
          <div className="border-2 border-zinc-700 rounded-3xl p-8 md:p-12 relative flex flex-col gap-6">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Hola, soy <span className="font-bold text-indigo-400">Nereo Schmidt</span>. 👋</h2>
              <p className="text-xl text-zinc-400">
                Aspirante a programador en desarrollo Web y Móvil
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4">
              {/* Botón Descargar CV */}
              <a 
              href="/Nereo_Schmidt_CV_Español.pdf" 
              download="Nereo_Schmidt_CV_Español.pdf"
              className="border-2 border-zinc-500 hover:bg-zinc-800 text-zinc-100 px-6 py-2 rounded-lg font-medium transition-all w-full sm:w-auto text-center inline-block"
              >
                Descargar CV
              </a>

              <div className="flex gap-4">
                {/* GitHub */}
                <a href="https://github.com/MasitasIA" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group">
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                
                {/* WhatsApp */}
                <a href="https://wa.me/5492923519367" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group">
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                
                {/* Email */}
                <a href="mailto:nereoschmidt@gmail.com" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/nereoschmidt/" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group">
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN: SOBRE MÍ */}
        <section id="sobre-mi" className="scroll-mt-32">
          <h2 className="text-2xl font-bold mb-4 text-zinc-100">Sobre Mí</h2>
          <p className="text-justify text-lg text-zinc-400 leading-relaxed max-w-4xl">
            Soy estudiante universitario con formación en <b>Python</b>, <b>Django</b> y <b>SQL</b>, con un fuerte interés en el desarrollo web y móvil. Actualmente me estoy especializando en tecnologías modernas del ecosistema frontend como <b>ReactJS</b>, <b>Vite</b> y <b>Tailwind CSS</b>, buscando profundizar mis conocimientos en la creación de interfaces dinámicas, optimizadas y centradas en la experiencia del usuario.
          </p>
        </section>

        {/* SECCIÓN: SKILLS */}
        <section id="skills" className="scroll-mt-32">
          <h2 className="text-2xl font-bold mb-6 text-zinc-100">Habilidades</h2>
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
              <span 
                key={skill.nombre} 
                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-full font-semibold shadow-sm hover:border-zinc-500 transition-colors cursor-default"
              >
                <skill.icono className={`w-5 h-5 ${skill.color}`} />
                {skill.nombre}
              </span>
            ))}
          </div>
        </section>

        {/* SECCIÓN: PROYECTOS */}
        <section id="proyectos" className="scroll-mt-32">
          <h2 className="text-2xl font-bold mb-6 text-zinc-100">Proyectos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Proyecto 1: Bot Gemini */}
            <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
              <div className="w-full h-48 bg-zinc-900 overflow-hidden relative p-4 flex items-center justify-center">
                <img 
                  src="/discordbotpython.png" 
                  alt="Bot Discord Gemini" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-zinc-100">Bot Discord Gemini - <span className="text-indigo-400">Python</span></h3>
                <p className="text-zinc-400 mb-4">Bot de Discord que utiliza la API de Gemini para generar respuestas inteligentes a las preguntas de los usuarios, además de incluir una api generadora de imágenes con Lenguaje Humano.</p>
              
                <div className="mt-auto">
                  <a 
                    href="https://github.com/MasitasIA/Discord-Gemini-Bot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Ver Repositorio
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 2: ChatGlobo */}
            <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
              
              <div className="w-full h-48 bg-zinc-900 overflow-hidden relative p-4 flex items-center justify-center">
                <img 
                  src="/chatglobo.png" 
                  alt="ChatGlobo" 
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-zinc-100">ChatGlobo - <span className="text-indigo-400">Kotlin</span></h3>
                <p className="text-zinc-400 mb-6 grow text-justify">
                  Plugin de Minecraft, hecho en PaperMC, para las versiones 1.21 en adelante. Agrega globos de textos interactivos para aumentar la inmersión del jugador.
                </p>
                
                <div className="mt-auto">
                  <a 
                    href="https://github.com/MasitasIA/ChatGlobo_Kotlin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Ver Repositorio
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 3: Prueba */}
            <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
              <div className="w-full h-48 bg-zinc-900 overflow-hidden relative p-4 flex items-center justify-center">
                <img 
                  src="/#" 
                  alt="#" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-zinc-100">Prueba <span className="text-indigo-400">Prueba</span></h3>
                <p className="text-zinc-400 mb-4">Carta de prueba</p>
              
                <div className="mt-auto">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Ver Repositorio
                  </a>
                </div>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  )
}