"use client";

import { motion } from "framer-motion";
import { Terminal, GraduationCap, BookOpen, User, ExternalLink, Code } from "lucide-react";

const LABS = [
  { id: "01", title: "Lab 01", desc: "Introduction to Figma tools, setting up frames, and creating basic low-fidelity wireframes for web.", demoUrl: "https://vlu-energy-management-system-7l0lbdfro-ho-du-dat-tuans-projects.vercel.app/", githubUrl: "https://github.com/Tdat10052499/VLU-UI-UX/tree/main/lab01" },
  { id: "02", title: "Lab 02", desc: "Building interactive prototypes with smart animate, overlays, and advanced scroll behaviors.", demoUrl: null, githubUrl: "https://github.com/Tdat10052499/VLU-UI-UX/tree/main/lab02" },
  { id: "03", title: "Lab 03", desc: "Creating a comprehensive design system including typography, color palettes, and reusable components.", demoUrl: "https://lab03-gamma.vercel.app/", githubUrl: "https://github.com/Tdat10052499/VLU-UI-UX/tree/main/lab03" },
  { id: "04", title: "Lab 04", desc: "Designing responsive layouts for mobile, tablet, and desktop viewports using auto-layout.", demoUrl: null, githubUrl: "https://github.com/Tdat10052499/VLU-UI-UX/tree/main/lab04" },
  { id: "05", title: "Lab 05", desc: "Conducting usability tests on prototypes, gathering feedback, and refining the user experience.", demoUrl: "https://lab05-gamma.vercel.app/", githubUrl: "https://github.com/Tdat10052499/VLU-UI-UX/tree/main/lab05" },
  { id: "06", title: "Lab 06", desc: "Finalizing high-fidelity screens for a complete smart agriculture web application with cinematic aesthetics.", demoUrl: "https://lab06-two.vercel.app/", githubUrl: "https://github.com/Tdat10052499/VLU-UI-UX/tree/main/lab06" }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden selection:bg-brand-crimson selection:text-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-crimson/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-gold/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* HEADER / NAVBAR */}
        <nav className="absolute top-0 left-0 w-full p-6 md:px-12 lg:px-24 flex justify-end z-50">
          <a 
            href="https://github.com/Tdat10052499/VLU-UI-UX" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-mono text-sm text-gray-200 hover:text-brand-crimson hover:border-brand-crimson/50 hover:bg-brand-crimson/10 hover:shadow-[0_0_20px_rgba(179,0,45,0.2)] transition-all"
          >
            <Code className="w-4 h-4" />
            VLU-UI-UX
          </a>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto w-full"
          >
            <h2 className="font-mono text-brand-gold/80 uppercase tracking-[0.2em] text-sm md:text-base mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold/50 block"></span>
              UI/UX Portfolio
            </h2>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 text-gradient">
              Hồ Du Tuấn Đạt
            </h1>

            <p className="font-serif text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Crafting immersive digital experiences bridging deep tech aesthetics with minimalist precision.
            </p>

            {/* Academic Dashboard Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden"
            >
              {/* Decorative Tech Line */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-brand-crimson to-transparent" />

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <GraduationCap className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">University</p>
                  <p className="font-mono text-sm md:text-base text-gray-200">Đại Học Văn Lang</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <BookOpen className="w-5 h-5 text-brand-crimson" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">Course</p>
                  <p className="font-mono text-sm md:text-base text-gray-200">Thiết kế giao diện người dùng <br /><span className="text-gray-400">(UI/UX Design)</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Terminal className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">Class</p>
                  <p className="font-mono text-sm md:text-base text-gray-200">252_72ITSE40903_01</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <User className="w-5 h-5 text-brand-crimson" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-1">Instructor</p>
                  <p className="font-mono text-sm md:text-base text-gray-200">Msc. Nguyễn Thái Anh</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* LABS SHOWCASE */}
        <section className="px-6 md:px-12 lg:px-24 py-24 relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">Academic Output</h2>
              <p className="font-mono text-gray-400 max-w-xl">Curated collection of UI/UX laboratory assignments, demonstrating progression from wireframing to high-fidelity implementation.</p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {LABS.map((lab) => (
                <motion.div key={lab.id} variants={itemVariants}>
                  <div className="glass-card h-full flex flex-col group relative overflow-hidden cursor-pointer">
                    {/* Image Area placeholder */}
                    <div className="h-48 w-full relative overflow-hidden bg-[#0a0310]">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-crimson/20 via-transparent to-brand-gold/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

                      {/* Decorative elements inside image */}
                      <div className="absolute top-4 left-4 font-mono text-xs text-white/40 tracking-widest">
                        SYS.DAT.{lab.id}
                      </div>
                      <div className="absolute bottom-4 right-4 flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-brand-crimson animate-pulse" />
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex-grow flex flex-col">
                      <div className="font-mono text-brand-gold mb-3 text-sm flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-brand-gold/50"></span>
                        Assignment
                      </div>

                      <h3 className="font-serif text-xl md:text-2xl mb-4 text-gray-100 group-hover:text-white transition-colors">
                        {lab.title}
                      </h3>

                      <p className="font-mono text-sm text-gray-400 mb-8 flex-grow leading-relaxed">
                        {lab.desc}
                      </p>

                      <div className="flex items-center gap-3 mt-auto">
                        {lab.demoUrl ? (
                          <a 
                            href={lab.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex justify-center items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-mono text-xs md:text-sm text-gray-200 hover:text-brand-gold hover:border-brand-gold/50 hover:bg-brand-gold/10 hover:shadow-[0_0_15px_rgba(255,215,0,0.15)] transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                              Live Demo
                            </div>
                          </a>
                        ) : (
                          <div className="flex-1 flex justify-center items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/5 rounded-lg font-mono text-xs md:text-sm text-gray-600 opacity-50 cursor-not-allowed">
                            <ExternalLink className="w-4 h-4" />
                            <span className="line-through decoration-gray-500">Live Demo</span>
                          </div>
                        )}
                        <a 
                          href={lab.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex justify-center items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-mono text-xs md:text-sm text-gray-200 hover:text-brand-crimson hover:border-brand-crimson/50 hover:bg-brand-crimson/10 hover:shadow-[0_0_15px_rgba(179,0,45,0.15)] transition-all"
                        >
                          <Code className="w-4 h-4" />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-12 mt-12 bg-black/20 backdrop-blur-md relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-xl text-white mb-1">Hồ Du Tuấn Đạt</p>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Trường Đại Học Văn Lang</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-gray-400">© {new Date().getFullYear()}</span>
              <span className="w-1 h-1 rounded-full bg-brand-crimson/50 mx-2"></span>
              <span className="font-mono text-sm text-gray-400 flex items-center gap-1">
                Sys.Online <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1"></div>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
