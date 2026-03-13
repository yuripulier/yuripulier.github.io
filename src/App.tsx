/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  Github, 
  Code2, 
  Wrench, 
  Brain, 
  MessageSquare,
  ChevronRight,
  ArrowRight,
  MapPin,
  ExternalLink,
  Send,
  Languages
} from 'lucide-react';
import { RESUME_DATA, UI_TEXT } from './constants';

type Page = 'home' | 'experience' | 'education' | 'contact';
type Lang = 'en' | 'pt';

const TypingEffect = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 150).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-blue-400 font-bold min-w-[200px]">
      {`${words[index].substring(0, subIndex)}`}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [lang, setLang] = useState<Lang>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = UI_TEXT[lang];
  const r = RESUME_DATA[lang];

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="hidden md:flex items-center space-x-12">
            <button onClick={() => setCurrentPage('home')} className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>{t.home}</button>
            <button onClick={() => setCurrentPage('experience')} className={`nav-link ${currentPage === 'experience' ? 'active' : ''}`}>{t.experience}</button>
            <button onClick={() => setCurrentPage('education')} className={`nav-link ${currentPage === 'education' ? 'active' : ''}`}>{t.education}</button>
            <button onClick={() => setCurrentPage('contact')} className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>{t.contact}</button>
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
              className="flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 rounded-full transition-all text-xs font-bold border border-white/10"
            >
              <Languages size={14} />
              <span>{lang === 'en' ? 'PT-BR' : 'EN'}</span>
            </button>
          </div>

          <div className="md:hidden flex w-full justify-between items-center">
            <button 
              onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
              className="p-2 text-slate-300 hover:text-blue-400"
            >
              <Languages size={20} />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300">
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-white/5 rounded-lg uppercase tracking-widest text-sm">{t.home}</button>
              <button onClick={() => { setCurrentPage('experience'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-white/5 rounded-lg uppercase tracking-widest text-sm">{t.experience}</button>
              <button onClick={() => { setCurrentPage('education'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-white/5 rounded-lg uppercase tracking-widest text-sm">{t.education}</button>
              <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 text-slate-300 hover:bg-white/5 rounded-lg uppercase tracking-widest text-sm">{t.contact}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('loading');

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('error');
      }
    };

    return (
      <footer className="bg-slate-950/80 backdrop-blur-[12.6px] text-white py-16 mt-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">{t.talk}</h3>
              <p className="text-slate-400 text-lg mb-8 max-w-md">
                {t.talkDesc}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail size={20} className="text-blue-400" />
                  <span>{r.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Linkedin size={20} className="text-blue-400" />
                  <span>{r.linkedin}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Github size={20} className="text-blue-400" />
                  <span>{r.github}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">{t.nameLabel}</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white" 
                      placeholder={t.namePlaceholder} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">{t.emailLabel}</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white" 
                      placeholder={t.emailPlaceholder} 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">{t.messageLabel}</label>
                  <textarea 
                    rows={4} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white" 
                    placeholder={t.messagePlaceholder}
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'loading'}
                  className={`w-full ${
                    status === 'success' 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                      : status === 'error' 
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white'
                  } font-bold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 uppercase tracking-widest disabled:opacity-50`}
                >
                  <span>
                    {status === 'loading' ? (lang === 'en' ? 'Sending...' : 'Enviando...') : 
                     status === 'success' ? (lang === 'en' ? 'Sent!' : 'Enviado!') : 
                     status === 'error' ? (lang === 'en' ? 'Error!' : 'Erro!') : 
                     t.sendBtn}
                  </span>
                  {status === 'idle' && <Send size={18} />}
                </button>
              </form>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} Yuri Pulier. {t.footerRights}
          </div>
        </div>
      </footer>
    );
  };

  const HomePage = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-40"
    >
      {/* Hero Section - Reference Style */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h1 className="text-7xl sm:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
            {r.name}
          </h1>
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl sm:text-4xl font-light text-slate-300 tracking-widest uppercase flex items-center gap-3">
              <span>{lang === 'en' ? "I'M" : "EU SOU"}</span>
              <TypingEffect words={lang === 'en' ? ["A DATA SCIENTIST", "AN AI ENGINEER"] : ["UM DATA SCIENTIST", "UM AI ENGINEER"]} />
            </h2>
          </div>
          <div className="flex justify-center gap-8 pt-12">
            <a href={`https://${r.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-blue-400 text-slate-300 hover:text-white rounded-full transition-all duration-300 border border-white/10">
              <Linkedin size={28} />
            </a>
            <a href={`mailto:${r.email}`} className="p-4 bg-white/5 hover:bg-blue-400 text-slate-300 hover:text-white rounded-full transition-all duration-300 border border-white/10">
              <Mail size={28} />
            </a>
            <a href={`https://${r.github}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-blue-400 text-slate-300 hover:text-white rounded-full transition-all duration-300 border border-white/10">
              <Github size={28} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="section-title">{lang === 'en' ? 'About Me' : 'Sobre Mim'}</h2>
        <div className="card text-center">
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            {r.objective}
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="section-title">{lang === 'en' ? 'Experiences' : 'Experiências'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card group flex flex-col h-full">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{t.recentExp}</h3>
            </div>
            <div className="space-y-6 flex-grow">
              {r.experiences.slice(0, 2).map((exp, i) => (
                <div key={i} className="space-y-2">
                  <div className="border-l-2 border-blue-500/30 pl-4 py-1">
                    <h4 className="font-bold text-white text-lg">{exp.role}</h4>
                    <p className="text-sm text-slate-400">{exp.company} • {exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setCurrentPage('experience')} className="text-blue-400 font-bold flex items-center space-x-2 hover:text-blue-300 transition-all pt-6 mt-auto">
              <span className="uppercase text-xs tracking-widest">{t.viewDetails}</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="card group flex flex-col h-full">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{t.currentEdu}</h3>
            </div>
            <div className="space-y-4 flex-grow">
              <div className="border-l-2 border-indigo-500/30 pl-4 py-1">
                <h4 className="font-bold text-white text-lg">{r.education[0].degree}</h4>
                <p className="text-sm text-slate-400">{r.education[0].institution} • {r.education[0].period}</p>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {lang === 'en' ? 'Focused on Applied Computing at IFES, expanding knowledge in advanced models and research.' : 'Focado em Computação Aplicada no IFES, expandindo conhecimentos em modelos avançados e pesquisa.'}
              </p>
            </div>
            <button onClick={() => setCurrentPage('education')} className="text-indigo-400 font-bold flex items-center space-x-2 hover:text-indigo-300 transition-all pt-6 mt-auto">
              <span className="uppercase text-xs tracking-widest">{t.viewDetails}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="section-title">{t.mySkills}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center space-x-3 mb-6 text-blue-400">
              <Brain size={20} />
              <h4 className="font-bold uppercase tracking-widest text-sm">{t.softSkills}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {r.skills.soft.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-6 text-blue-400">
              <Code2 size={20} />
              <h4 className="font-bold uppercase tracking-widest text-sm">{t.languages}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {r.skills.languages.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-6 text-blue-400">
              <Wrench size={20} />
              <h4 className="font-bold uppercase tracking-widest text-sm">{t.tools}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {r.skills.tools.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
            </div>
          </div>

          <div className="card">
            <div className="flex items-center space-x-3 mb-6 text-blue-400">
              <Brain size={20} />
              <h4 className="font-bold uppercase tracking-widest text-sm">{t.technical}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {r.skills.technical.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );

  const ExperiencePage = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-32 space-y-12"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold text-white mb-4">{t.expTitle}</h1>
        <p className="text-lg text-slate-300">
          {t.expDesc}
        </p>
      </div>

      <div className="space-y-8">
        {r.experiences.map((exp, idx) => (
          <div key={idx} className="card relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <div className="flex items-center space-x-2 text-blue-400 font-semibold">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1 text-slate-400 font-normal text-sm">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>
              <div className="px-4 py-1 bg-white/10 text-slate-200 rounded-full text-sm font-bold">
                {exp.period}
              </div>
            </div>
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-white">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const EducationPage = () => (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-32 space-y-12"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold text-white mb-4">{t.eduTitle}</h1>
        <p className="text-lg text-slate-300">
          {t.eduDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {r.education.map((edu, idx) => (
          <div key={idx} className="card group flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
              <GraduationCap size={32} />
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <span className="text-indigo-400 font-bold">{edu.period}</span>
              </div>
              <p className="text-lg font-semibold text-slate-200 mb-2">{edu.institution}</p>
              <div className="flex items-center space-x-2 text-slate-400 mb-4">
                <MapPin size={16} />
                <span>{edu.location}</span>
              </div>
              {edu.details && (
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-slate-300 italic">
                  {edu.details}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const ContactPage = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="pt-32"
    >
      <div className="card max-w-4xl mx-auto overflow-hidden p-0 border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 sm:p-12 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t.contactTitle}</h1>
              <p className="text-slate-300">
                {t.contactDesc}
              </p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${r.email}`} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-colors group w-full overflow-hidden">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg group-hover:bg-blue-400 group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">{t.emailLabel}</p>
                  <p className="text-base sm:text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">{r.email}</p>
                </div>
              </a>

              <a href={`https://${r.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-colors group w-full overflow-hidden">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg group-hover:bg-blue-400 group-hover:text-white transition-colors flex-shrink-0">
                  <Linkedin size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">LinkedIn</p>
                  <p className="text-base sm:text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">/in/yuri-celeste-pulier</p>
                </div>
              </a>

              <a href={`https://${r.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/10 transition-colors group w-full overflow-hidden">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-lg group-hover:bg-blue-400 group-hover:text-white transition-colors flex-shrink-0">
                  <Github size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">GitHub</p>
                  <p className="text-base sm:text-lg font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">/yuripulier</p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-12">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative">
              <img 
                src={r.profileImage} 
                alt={r.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && <HomePage key="home" />}
          {currentPage === 'experience' && <ExperiencePage key="experience" />}
          {currentPage === 'education' && <EducationPage key="education" />}
          {currentPage === 'contact' && <ContactPage key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
