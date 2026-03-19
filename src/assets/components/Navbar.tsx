import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'

// Exportamos/Definimos el tipo Lang aquí para las props
export type Lang = 'es' | 'en' | 'it'

interface NavbarProps {
  lang: Lang
  setLang: (lang: Lang) => void
  t: {
    nav: {
      inicio: string
      sobreMi: string
      skills: string
      proyectos: string
      educacion: string
    }
  }
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="fixed top-4 inset-x-0 z-50 px-4 md:px-8">
            <div className="max-w-5xl mx-auto flex justify-between items-center w-full bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/50 rounded-2xl px-6 py-3 shadow-2xl">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-boldpixels text-zinc-100 tracking-tighter">
                    Masitas<span className="text-indigo-500">IA</span>
                    </h1>
                    <div className="hidden sm:flex items-center bg-zinc-800/50 border border-zinc-700/50 rounded-full px-3 py-1 gap-1">
                        <Globe className="w-3 h-3 text-zinc-400" />
                        <select 
                            value={lang} 
                            onChange={(e) => setLang(e.target.value as Lang)}
                            className="bg-transparent text-zinc-300 text-xs outline-none cursor-pointer appearance-none"
                            >
                            <option value="es" className="bg-zinc-900">ES</option>
                            <option value="en" className="bg-zinc-900">EN</option>
                            <option value="it" className="bg-zinc-900">IT</option>
                        </select>
                    </div>
                </div>
            
            <nav className="hidden md:flex items-center gap-1 bg-zinc-900/50 border border-zinc-800 rounded-full px-2 py-1">
            {[
                { id: '#inicio', label: t.nav.inicio },
                { id: '#sobre-mi', label: t.nav.sobreMi },
                { id: '#skills', label: t.nav.skills },
                { id: '#proyectos', label: t.nav.proyectos },
                { id: '#educacion', label: t.nav.educacion },
            ].map((item) => (
                <a key={item.id} href={item.id} className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-all duration-200">
                {item.label}
                </a>
            ))}
            </nav>

            <button className="md:hidden p-2 text-zinc-300 hover:bg-zinc-800 rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>

        {isMenuOpen && (
            <nav className="md:hidden mt-2 mx-auto max-w-sm bg-zinc-950/90 backdrop-blur-lg border border-zinc-800 rounded-2xl flex flex-col p-4 gap-2 shadow-2xl transition-all">
                <a href="#inicio" onClick={closeMenu} className="px-4 py-3 rounded-xl text-zinc-300 hover:bg-zinc-900">{t.nav.inicio}</a>
                <a href="#sobre-mi" onClick={closeMenu} className="px-4 py-3 rounded-xl text-zinc-300 hover:bg-zinc-900">{t.nav.sobreMi}</a>
                <a href="#skills" onClick={closeMenu} className="px-4 py-3 rounded-xl text-zinc-300 hover:bg-zinc-900">{t.nav.skills}</a>
                <a href="#proyectos" onClick={closeMenu} className="px-4 py-3 rounded-xl text-zinc-300 hover:bg-zinc-900">{t.nav.proyectos}</a>
                <a href="#educacion" onClick={closeMenu} className="px-4 py-3 rounded-xl text-zinc-300 hover:bg-zinc-900">{t.nav.educacion}</a>
            </nav>
        )}
        </header>
    )
}