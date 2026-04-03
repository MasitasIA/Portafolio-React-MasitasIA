import { Github, Play } from "lucide-react";
import type { Translation } from "../translations.tsx";

export default function Projects({ t }: { t: Translation }) {
    return (
        <section className="animate-fade-in w-full">
            <div className="inline-block bg-zinc-800 border-t border-x border-zinc-700 px-6 py-2 rounded-t-xl">
                <h2 className="text-xl font-bold text-zinc-100">
                    {t.projects.title}
                </h2>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 p-8 rounded-3xl rounded-tl-none backdrop-blur-sm mt-px">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
                        <div className="w-full h-48 bg-zinc-900 overflow-hidden relative p-0 flex items-center justify-center">
                            <img
                                src="/discordbotpython.png"
                                alt="Bot Discord Gemini"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col grow">
                            <h3 className="text-xl font-bold mb-2 text-zinc-100">
                                Bot Discord Gemini -{" "}
                                <span className="text-indigo-400">Python</span>
                            </h3>
                            <p className="text-zinc-400 mb-4">
                                {t.projects.p1Desc}
                            </p>
                            <div className="mt-auto">
                                <a
                                    href="https://github.com/MasitasIA/Discord-Gemini-Bot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    <Github className="w-5 h-5" />{" "}
                                    {t.projects.repo}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group">
                        <div className="w-full h-48 bg-zinc-900 overflow-hidden relative p-2 flex items-center justify-center">
                            <img
                                src="/chatglobo.png"
                                alt="ChatGlobo"
                                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col grow">
                            <h3 className="text-xl font-bold mb-2 text-zinc-100">
                                ChatGlobo -{" "}
                                <span className="text-indigo-400">Kotlin</span>
                            </h3>
                            <p className="text-zinc-400 mb-6 text-justify">
                                {t.projects.p2Desc}
                            </p>
                            <div className="mt-auto flex flex-col xl:flex-row gap-2">
                                <a
                                    href="https://github.com/MasitasIA/ChatGlobo_Kotlin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    <Github className="w-5 h-5" />{" "}
                                    {t.projects.repo}
                                </a>
                                <a
                                    href="https://hangar.papermc.io/MasitasIA/ChatGlobo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    <Play className="w-5 h-5" />{" "}
                                    {t.projects.demo}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 rounded-xl shadow-md border border-zinc-700 overflow-hidden flex flex-col hover:border-zinc-500 transition-colors group md:col-span-2">
                        <div className="w-full h-48 bg-zinc-900 overflow-hidden relative flex items-center justify-center">
                            <img
                                src="/PORTADA.png"
                                alt="Portafolio Personal"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col grow">
                            <h3 className="text-xl font-bold mb-2 text-zinc-100">
                                Portafolio Personal -{" "}
                                <span className="text-indigo-400">
                                    TypeScript
                                </span>
                            </h3>
                            <p className="text-zinc-400 mb-4">
                                {t.projects.p3Desc}
                            </p>
                            <div className="mt-auto">
                                <a
                                    href="https://github.com/MasitasIA/Portafolio-React-MasitasIA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-zinc-900 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    <Github className="w-5 h-5" />{" "}
                                    {t.projects.repo}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
