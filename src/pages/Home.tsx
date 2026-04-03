import { Github, Mail, MessageCircle, Linkedin } from "lucide-react";
import {
    SiReact,
    SiVite,
    SiTailwindcss,
    SiPython,
    SiDjango,
    SiKotlin,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import type { Translation } from "../translations.tsx";

export default function Home({ t }: { t: Translation }) {
    return (
        <div className="flex flex-col gap-16">
            <section id="inicio" className="scroll-mt-32">
                <div className="border-2 border-zinc-700 rounded-3xl p-8 md:p-12 relative flex flex-col gap-6 bg-zinc-900/80 backdrop-blur-sm">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">
                            {t.hero.greeting}{" "}
                            <span className="font-bold text-indigo-400">
                                Nereo Schmidt
                            </span>
                            . 👋
                        </h2>
                        <p className="text-xl text-zinc-400">{t.hero.role}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4">
                        <a
                            href="/Nereo_Schmidt_CV_Español.pdf"
                            download
                            className="border-2 border-zinc-500 hover:bg-zinc-800 text-zinc-100 px-6 py-2 rounded-lg font-medium transition-all w-full sm:w-auto text-center inline-block"
                        >
                            {t.hero.cv}
                        </a>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/MasitasIA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"
                            >
                                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://wa.me/5492923519367"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"
                            >
                                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="mailto:nereoschmidt@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"
                            >
                                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nereoschmidt/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:bg-zinc-800 transition-all text-zinc-100 group"
                            >
                                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sobre-mi" className="scroll-mt-32">
                <div className="inline-block bg-zinc-800 border-t border-x border-zinc-700 px-6 py-2 rounded-t-xl">
                    <h2 className="text-xl font-bold text-zinc-100">
                        {t.about.title}
                    </h2>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-3xl rounded-tl-none backdrop-blur-sm -mt-px">
                    <p className="text-justify text-lg text-zinc-400 leading-relaxed max-w-4xl">
                        {t.about.text}
                    </p>
                </div>
            </section>

            <section id="skills" className="scroll-mt-32">
                <div className="inline-block bg-zinc-800 border-t border-x border-zinc-700 px-6 py-2 rounded-t-xl">
                    <h2 className="text-xl font-bold text-zinc-100">
                        {t.skills.title}
                    </h2>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-3xl rounded-tl-none backdrop-blur-sm mt-px">
                    <div className="justify-center flex flex-wrap gap-4">
                        {[
                            {
                                nombre: "React",
                                icono: SiReact,
                                color: "text-[#61DAFB]",
                            },
                            {
                                nombre: "Vite",
                                icono: SiVite,
                                color: "text-[#646CFF]",
                            },
                            {
                                nombre: "TailwindCSS",
                                icono: SiTailwindcss,
                                color: "text-[#38B2AC]",
                            },
                            {
                                nombre: "Python",
                                icono: SiPython,
                                color: "text-[#3776AB]",
                            },
                            {
                                nombre: "Django",
                                icono: SiDjango,
                                color: "text-[#44B78B]",
                            },
                            {
                                nombre: "SQL",
                                icono: FaDatabase,
                                color: "text-[#F29111]",
                            },
                            {
                                nombre: "Kotlin",
                                icono: SiKotlin,
                                color: "text-[#F29111]",
                            },
                            {
                                nombre: "HTML",
                                icono: SiHtml5,
                                color: "text-[#F29111]",
                            },
                            {
                                nombre: "CSS",
                                icono: SiCss3,
                                color: "text-[#F29111]",
                            },
                            {
                                nombre: "JavaScript",
                                icono: SiJavascript,
                                color: "text-[#F7DF1E]",
                            },
                            {
                                nombre: "TypeScript",
                                icono: SiTypescript,
                                color: "text-[#F7DF1E]",
                            },
                        ].map((skill) => (
                            <span
                                key={skill.nombre}
                                className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-full font-semibold shadow-sm hover:border-zinc-500 transition-colors cursor-default"
                            >
                                <skill.icono
                                    className={`w-5 h-5 ${skill.color}`}
                                />
                                {skill.nombre}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section id="educacion" className="scroll-mt-32">
                <div className="inline-block bg-zinc-800 border-t border-x border-zinc-700 px-6 py-2 rounded-t-xl">
                    <h2 className="text-xl font-bold text-zinc-100">
                        {t.education.title}
                    </h2>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-3xl rounded-tl-none overflow-hidden backdrop-blur-sm mt-px">
                    <div className="p-6 border-b border-zinc-700/50">
                        <h3 className="text-xl font-bold text-zinc-100">
                            {t.education.curr1}
                        </h3>
                        <p className="text-zinc-400">
                            Teclab "Instituto Técnico Superior" -{" "}
                            <b>
                                <span className="text-indigo-400">
                                    2025/PRESENTE
                                </span>
                            </b>
                        </p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-zinc-100">
                            {t.education.curr2}
                        </h3>
                        <p className="text-zinc-400">
                            Escuela Secundaria Nº5 "Coronel Marcelino E Freyre"
                            -{" "}
                            <b>
                                <span className="text-indigo-400">
                                    2019/2025
                                </span>
                            </b>
                        </p>
                    </div>
                </div>
            </section>

            <section id="estadisticas" className="scroll-mt-32">
                <div className="inline-block bg-zinc-800 border-t border-x border-zinc-700 px-6 py-2 rounded-t-xl">
                    <h2 className="text-xl font-bold text-zinc-100">
                        {t.stats.title}
                    </h2>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-3xl rounded-tl-none backdrop-blur-sm mt-px hover:border-zinc-500 transition-colors">
                    <p className="text-zinc-400 mb-8 text-justify">
                        {t.stats.desc}
                    </p>
                    <div className="flex flex-col gap-6">
                        {[
                            {
                                label: "Python",
                                color: "#3572A5",
                                percent: "45%",
                            },
                            {
                                label: "TypeScript",
                                color: "#3178C6",
                                percent: "30%",
                            },
                            {
                                label: "Kotlin",
                                color: "#A97BFF",
                                percent: "15%",
                            },
                            {
                                label: "CSS / Tailwind",
                                color: "#563D7C",
                                percent: "10%",
                            },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="flex justify-between text-sm font-medium mb-2">
                                    <span className="text-zinc-200 flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full"
                                            style={{
                                                backgroundColor: stat.color,
                                            }}
                                        ></span>{" "}
                                        {stat.label}
                                    </span>
                                    <span className="text-zinc-400">
                                        {stat.percent}
                                    </span>
                                </div>
                                <div className="w-full bg-zinc-900 rounded-full h-2.5">
                                    <div
                                        className="h-2.5 rounded-full"
                                        style={{
                                            width: stat.percent,
                                            backgroundColor: stat.color,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
