import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Helmet } from "react-helmet-async";

import PixelSnow from "./PixelSnow.tsx";
import Navbar, { type Lang } from "./assets/components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";

// IMPORTAMOS EL OBJETO DE TRADUCCIONES DESDE EL NUEVO ARCHIVO
import { translations } from "./translations.tsx";

export default function App() {
    const [lang, setLang] = useState<Lang>("es");

    // Usamos las traducciones importadas
    const t = translations[lang];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Router>
            <Helmet>
                <title>MasitasIA | Nereo Schmidt - Portafolio Personal</title>
                <meta
                    name="description"
                    content="Portafolio de Nereo Schmidt. Desarrollador web con React, Python y TypeScript."
                />
                <meta name="author" content="Nereo Schmidt" />
                <meta property="og:title" content="MasitasIA | Nereo Schmidt" />
                <meta
                    property="og:description"
                    content="Portafolio de desarrollo web con React y TypeScript."
                />
                <meta
                    name="google-site-verification"
                    content="md8yOTBKAG12eMelZRFzhoxdRVbaZyt7OGM2BIz4fug"
                />
            </Helmet>

            <div className="bg-zinc-900 text-zinc-100 font-sans min-h-screen relative flex flex-col">
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

                <Navbar lang={lang} setLang={setLang} t={t} />

                <div className="relative z-10 flex-grow">
                    <main className="max-w-5xl mx-auto px-6 pt-36 pb-20">
                        <Routes>
                            <Route path="/" element={<Home t={t} />} />
                            <Route
                                path="/proyectos"
                                element={<Projects t={t} />}
                            />
                        </Routes>
                    </main>
                </div>

                <footer className="relative z-10 bg-zinc-950 text-center py-6 border-t border-zinc-800 mt-auto">
                    <p className="text-sm text-zinc-500">{t.footer}</p>
                </footer>
            </div>
        </Router>
    );
}
