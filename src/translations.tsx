// src/translations.tsx

export const translations = {
    es: {
        nav: {
            inicio: "Inicio",
            sobreMi: "Sobre Mí",
            skills: "Habilidades",
            proyectos: "Proyectos",
            educacion: "Educación",
        },
        hero: {
            greeting: "Hola, soy",
            role: "Aspirante a programador en desarrollo Web y Móvil",
            cv: "Descargar CV",
        },
        about: {
            title: "Sobre Mí",
            text: (
                <>
                    Soy estudiante universitario con formación en <b>Python</b>,{" "}
                    <b>Django</b> y <b>SQL</b>, con un fuerte interés en el
                    desarrollo web y móvil. Actualmente me estoy especializando
                    en tecnologías modernas del ecosistema frontend como{" "}
                    <b>ReactJS</b>, <b>Vite</b> y <b>Tailwind CSS</b>, buscando
                    profundizar mis conocimientos en la creación de interfaces
                    dinámicas, optimizadas y centradas en la experiencia del
                    usuario.
                </>
            ),
        },
        skills: { title: "Habilidades" },
        projects: {
            title: "Proyectos",
            repo: "Ver Repositorio",
            demo: "Demo",
            p1Desc: "Bot de Discord que utiliza la API de Gemini para generar respuestas inteligentes a las preguntas de los usuarios, además de incluir una api generadora de imágenes con Lenguaje Humano.",
            p2Desc: "Plugin de Minecraft, hecho en PaperMC, para las versiones 1.21 en adelante. Agrega globos de textos interactivos para aumentar la inmersión del jugador.",
            p3Desc: "Este repositorio guarda mi portafolio personal desarrollado con React y TypeScript, es esta misma web que estás viendo.",
        },
        education: {
            title: "Educación",
            curr1: "Tecnicatura en Data Science",
            curr2: "Bachiller en Economía y Administración",
        },
        stats: {
            title: "Lenguajes Más Usados",
            desc: "Basado en la actividad reciente de mis repositorios en GitHub.",
        },
        footer: "© 2026 Nereo Schmidt. Puedes modificar libremente esta web para uso personal o comercial.",
    },
    en: {
        nav: {
            inicio: "Home",
            sobreMi: "About",
            skills: "Skills",
            proyectos: "Projects",
            educacion: "Education",
        },
        hero: {
            greeting: "Hi, I am",
            role: "Aspiring Web and Mobile Developer",
            cv: "Download CV",
        },
        about: {
            title: "About Me",
            text: (
                <>
                    I am a university student with training in <b>Python</b>,{" "}
                    <b>Django</b>, and <b>SQL</b>, with a strong interest in web
                    and mobile development. Currently, I am specializing in
                    modern frontend ecosystem technologies like <b>ReactJS</b>,{" "}
                    <b>Vite</b>, and <b>Tailwind CSS</b>, seeking to deepen my
                    knowledge in creating dynamic, optimized, and user-centric
                    interfaces.
                </>
            ),
        },
        skills: { title: "Skills" },
        projects: {
            title: "Projects",
            repo: "View Repository",
            demo: "Demo",
            p1Desc: "Discord bot that uses the Gemini API to generate intelligent responses to user questions, plus an image generation API using natural language.",
            p2Desc: "Minecraft plugin, made in PaperMC, for versions 1.21 and above. Adds interactive text balloons to increase player immersion.",
            p3Desc: "This repository holds my personal portfolio developed with React and TypeScript, which is the website you are currently viewing.",
        },
        education: {
            title: "Education",
            curr1: "Associate Degree in Data Science",
            curr2: "High School Diploma in Economics and Administration",
        },
        stats: {
            title: "Most Used Languages",
            desc: "Based on recent activity in my GitHub repositories.",
        },
        footer: "© 2026 Nereo Schmidt. You can freely modify this website for personal or commercial use.",
    },
    it: {
        nav: {
            inicio: "Inizio",
            sobreMi: "Chi Sono",
            skills: "Competenze",
            proyectos: "Progetti",
            educacion: "Istruzione",
        },
        hero: {
            greeting: "Ciao, sono",
            role: "Aspirante sviluppatore Web e Mobile",
            cv: "Scarica CV",
        },
        about: {
            title: "Chi Sono",
            text: (
                <>
                    Sono uno studente universitario con formazione in{" "}
                    <b>Python</b>, <b>Django</b> e <b>SQL</b>, con un forte
                    interés per lo sviluppo web e mobile. Attualmente mi sto
                    specializzando nelle moderne tecnologie dell'ecosistema
                    frontend come <b>ReactJS</b>, <b>Vite</b> e{" "}
                    <b>Tailwind CSS</b>, cercando di approfondire le mie
                    conoscenze nella creazione di interfacce dinamiche,
                    ottimizzate e incentrate sull'utente.
                </>
            ),
        },
        skills: { title: "Competenze" },
        projects: {
            title: "Progetti",
            repo: "Vedi Repository",
            demo: "Demo",
            p1Desc: "Bot di Discord che utiliza l'API di Gemini per generare risposte intelligenti alle domande degli utenti, oltre a includere un'API per la generazione di immagini con linguaggio naturale.",
            p2Desc: "Plugin per Minecraft, realizzato in PaperMC, per le versioni 1.21 e successive. Aggiunge palloncini di testo interattivi per aumentare l'immersione del giocatore.",
            p3Desc: "Questo repository contiene il mio portfolio personale sviluppato con React e TypeScript, che è il sito web che stai visualizzando in questo momento.",
        },
        education: {
            title: "Istruzione",
            curr1: "Laurea Breve in Data Science",
            curr2: "Diploma in Economia e Amministrazione",
        },
        stats: {
            title: "Linguaggi Più Usati",
            desc: "Basato sull'attività recente nei miei repository GitHub.",
        },
        footer: "© 2026 Nereo Schmidt. Puoi modificare liberamente questo sito per uso personale o commerciale.",
    },
};

// Exportamos el tipo de las traducciones para usarlo en otros componentes
export type Translation = (typeof translations)["es"];
