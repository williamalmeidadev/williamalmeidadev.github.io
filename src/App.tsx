import { useState, Suspense, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import Squares from './blocks/Backgrounds/Squares/Squares';
import TextType from './blocks/TextAnimations/TextType/TextType';
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';
import { FaInstagram, FaLinkedin, FaGithub, FaReact, FaNodeJs, FaCode, FaEnvelope } from "react-icons/fa6";
import { SiNextdotjs, SiPostgresql, SiAuth0, SiVite, SiMedium } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";
import './App.css';
import { IoMenu } from "react-icons/io5";

import { FaJava, FaPython } from "react-icons/fa6";
import { SiJavascript, SiSpringboot } from "react-icons/si";

import { motion } from "framer-motion";

// MODIFICADO: Níveis de habilidade trocados por descrições
const techStack = [
  { name: "Python", icon: <FaPython size={48} className="text-blue-400" />, level: "Avançado" },
  { name: "JavaScript", icon: <SiJavascript size={48} className="text-yellow-400" />, level: "Intermediário" },
  { name: "Java", icon: <FaJava size={48} className="text-red-500" />, level: "Iniciante" },
  { name: "React", icon: <FaReact size={48} className="text-cyan-400" />, level: "Intermediário" },
  { name: "Node.js", icon: <FaNodeJs size={48} className="text-green-500" />, level: "Intermediário" },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} className="text-sky-500" />, level: "Avançado" },
  { name: "Auth0", icon: <SiAuth0 size={48} className="text-orange-400" />, level: "Intermediário" },
  { name: "Spring Boot", icon: <SiSpringboot size={48} className="text-green-600" />, level: "Iniciante" },
];


const resources = {
  pt: {
    translation: {
      tech: 'Tecnologias',
      portfolio: 'Portfólio',
      home: 'Início',
      about: 'Sobre mim',
      projects: 'Projetos',
      contact: 'Contato',
      heroLine1: 'Olá! Sou William Almeida',
      heroLine2: 'Desenvolvedor Web Full Stack 🖥️',
      heroLine3: 'Bem vindo(a) ao meu portfólio!',
      aboutButton: 'Sobre Mim',
      contactButton: 'Entre em Contato',
      aboutTitle: 'Sobre mim e meus estudos',
      aboutText: 'Me chamo William Almeida, tenho 17 anos e moro em Paramoti - CE. Sou um entusiasta apaixonado por tecnologia, com foco especial em desenvolvimento Web. Fui premiado em olimpíadas nacionais de tecnologia, como a Maratona Tech e a Olimpíada Brasileira de Tecnologia, o que reforça meu compromisso com o aprendizado e a evolução na área de TI.',
      devTitle: 'Desenvolvimento de Sistemas',
      devText: 'Curso técnico realizado na escola EEEP Francisco Paiva Tavares',
      devStatus: 'Em andamento!',
      dbTitle: 'Administrador de Banco de Dados',
      dbText: 'Curso realizado no Instituto Federal do Rio Grande do Sul (Online)',
      viewCert: 'Ver Certificado',
      itSupportTitle: 'Especialização em Suporte de TI',
      itSupportText: 'Curso da Google com aprendizado sobre administração de sistemas.',
      projectsTitle: 'Projetos',
      acervoTitle: 'Acervo Literário',
      // MODIFICADO: Descrições de projetos mais detalhadas
      acervoDescription: 'Sistema completo para gestão de acervo e empréstimos de uma biblioteca escolar. Resolveu o problema de controle manual, utilizando Next.js, Auth0 e PostgreSQL.',
      libraryTitle: 'Gerenciamento Biblioteca',
      libraryDescription: 'Aplicação para gerenciar empréstimos de livros em uma escola do Ceará, otimizando o controle que antes era feito manualmente em papéis.',
      ecoacaoTitle: 'EcoAção',
      ecoacaoDescription: 'Plataforma premiada na OBT, que utiliza IA (Grok API) para conectar cidadãos a pontos de coleta de recicláveis, incentivando a sustentabilidade.',
      viewProject: 'Ver Projeto',
      contactTitle: 'Entre em Contato',
      contactText: 'Fique à vontade para me enviar uma mensagem, conectar-se comigo nas redes sociais ou verificar meus projetos no GitHub.',
    }
  },
  en: { // Lembre-se de aplicar as mesmas melhorias de texto aqui, se desejar
    translation: {
      tech: 'Tech Stack',
      portfolio: 'Portfolio',
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      contact: 'Contact',
      heroLine1: 'Hello! I am William Almeida',
      heroLine2: 'Full Stack Web Developer 🖥️',
      heroLine3: 'Welcome to my portfolio!',
      aboutButton: 'About Me',
      contactButton: 'Get in Touch',
      aboutTitle: 'About me and my studies',
      aboutText: 'My name is William Almeida, I am 17 years old and I live in Ceará, Brazil. I am a passionate technology enthusiast, with a special focus on Web development. I have been awarded in national technology competitions, such as Maratona Tech and the Brazilian Technology Olympiad, which reinforces my commitment to learning and evolving in the IT field.',
      devTitle: 'Systems Development',
      devText: 'Technical course at EEEP Francisco Paiva Tavares school',
      devStatus: 'In progress!',
      dbTitle: 'Database Administrator',
      dbText: 'Course completed at the Federal Institute of Rio Grande do Sul (Online)',
      viewCert: 'View Certificate',
      itSupportTitle: 'IT Support Specialization',
      itSupportText: 'Google course with learning about system administration.',
      projectsTitle: 'Projects',
      acervoTitle: 'Literary Collection',
      acervoDescription: 'Complete system for collection management and loans for a school library. Solved the manual control problem using Next.js, Auth0, and PostgreSQL.',
      libraryTitle: 'Library Management',
      libraryDescription: 'Application to manage book loans in a school in Ceará, optimizing the control that was previously done manually on paper.',
      ecoacaoTitle: 'EcoAction',
      ecoacaoDescription: 'Award-winning platform at the Brazilian Technology Olympiad that uses AI (Grok API) to connect citizens to recyclable collection points, encouraging sustainability.',
      viewProject: 'View Project',
      contactTitle: 'Get in Touch',
      contactText: 'Feel free to send me a message, connect with me on social media, or check out my projects on GitHub.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language.split('-')[0] || 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ADICIONADO: Estado para controlar a seção ativa na tela
  const [activeSection, setActiveSection] = useState('inicio');

  // ADICIONADO: Efeito para observar qual seção está visível
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-30% 0px -70% 0px' // Ajusta a linha de ativação para o meio da tela
    });

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Suspense fallback={<div className="bg-[#111119] h-screen w-screen flex items-center justify-center text-white">Carregando...</div>}>
      <header className='fixed top-0 left-0 w-full z-50 p-4'>
        <nav className='flex justify-between items-center max-w-7xl mx-auto rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg px-6 py-3 md:px-10 md:py-4'>
          <button
            onClick={toggleLanguage}
            className='relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 group overflow-hidden'
            aria-label={i18n.language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
            title={i18n.language === 'pt' ? 'Clique para mudar para inglês' : 'Click to switch to Portuguese'}
          >
            <span role="img" aria-label={i18n.language === 'pt' ? 'Bandeira do Brasil' : 'Bandeira dos EUA'} className="text-xl md:text-2xl z-10">
              {i18n.language === 'pt' ? '🇧🇷' : '🇺🇸'}
            </span>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <FaExchangeAlt size={24} className="text-white" />
            </div>
          </button>

          <div className='flex-grow text-center text-white text-xl md:text-3xl font-extrabold tracking-wide'>
            {t('portfolio')}
          </div>

          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors'
              aria-label="Abrir menu de navegação"
            >
              <IoMenu size={28} />
            </button>
          </div>

          {/* MODIFICADO: Links da navegação com classes condicionais para o link ativo */}
          <div className='hidden lg:flex items-center space-x-8'>
            <a href="#inicio" className={`font-semibold text-lg transition-colors relative group ${activeSection === 'inicio' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>
              {t('home')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 origin-left ${activeSection === 'inicio' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
            <a href="#sobremim" className={`font-semibold text-lg transition-colors relative group ${activeSection === 'sobremim' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>
              {t('about')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 origin-left ${activeSection === 'sobremim' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
            <a href="#tecnologias" className={`font-semibold text-lg transition-colors relative group ${activeSection === 'tecnologias' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>
              {t('tech')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 origin-left ${activeSection === 'tecnologias' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
            <a href="#projetos" className={`font-semibold text-lg transition-colors relative group ${activeSection === 'projetos' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>
              {t('projects')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 origin-left ${activeSection === 'projetos' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
            <a href="#contato" className={`font-semibold text-lg transition-colors relative group ${activeSection === 'contato' ? 'text-purple-400' : 'text-white hover:text-purple-400'}`}>
              {t('contact')}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 origin-left ${activeSection === 'contato' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
            <div className='flex items-center space-x-5 ml-8'>
              <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110' aria-label="LinkedIn">
                <FaLinkedin size={26} />
              </a>
              <a href="https://github.com/WilliamAlmeidadev" target="_blank" rel="noopener noreferrer" className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110' aria-label="GitHub">
                <FaGithub size={26} />
              </a>
              <a href="https://www.instagram.com/williamalmeida.dev/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110' aria-label="Instagram">
                <FaInstagram size={26} />
              </a>
              <a href="https://medium.com/@williamalmeidadev" target="_blank" rel="noopener noreferrer" className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110' aria-label="Medium">
                <SiMedium size={26} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-zinc-900/90 backdrop-blur-sm z-[60] flex flex-col items-center justify-center text-white p-8 animate-fade-in'>
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-white p-2 focus:outline-none'>
            <IoMenu size={28} />
          </button>
          <div className='flex items-center space-x-4 mb-8'>
            <button onClick={toggleLanguage} className='text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none'>
              <span role="img" aria-label={i18n.language === 'pt' ? 'Bandeira do Brasil' : 'Bandeira dos EUA'} className="text-3xl">
                {i18n.language === 'pt' ? '🇧🇷' : '🇺🇸'}
              </span>
            </button>
          </div>
          {/* MODIFICADO: Links do menu mobile também usam o estado activeSection */}
          <nav className='flex flex-col space-y-8 text-center text-3xl'>
            <a href="#inicio" onClick={toggleMenu} className={`font-semibold transition-colors ${activeSection === 'inicio' ? 'text-purple-400' : 'hover:text-purple-400'}`}>{t('home')}</a>
            <a href="#sobremim" onClick={toggleMenu} className={`font-semibold transition-colors ${activeSection === 'sobremim' ? 'text-purple-400' : 'hover:text-purple-400'}`}>{t('about')}</a>
            <a href="#tecnologias" onClick={toggleMenu} className={`font-semibold transition-colors ${activeSection === 'tecnologias' ? 'text-purple-400' : 'hover:text-purple-400'}`}>{t('tech')}</a>
            <a href="#projetos" onClick={toggleMenu} className={`font-semibold transition-colors ${activeSection === 'projetos' ? 'text-purple-400' : 'hover:text-purple-400'}`}>{t('projects')}</a>
            <a href="#contato" onClick={toggleMenu} className={`font-semibold transition-colors ${activeSection === 'contato' ? 'text-purple-400' : 'hover:text-purple-400'}`}>{t('contact')}</a>
          </nav>
          <div className='flex items-center space-x-6 mt-12'>
            <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'><FaLinkedin size={32} /></a>
            <a href="https://github.com/WilliamAlmeidadev" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'><FaGithub size={32} /></a>
            <a href="https://www.instagram.com/williamalmeida.dev/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'><FaInstagram size={32} /></a>
            <a href="https://medium.com/@williamalmeidadev" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'><SiMedium size={32} /></a>
          </div>
        </div>
      )}

      <main>
        <section id='inicio' className='min-h-screen relative flex items-center justify-center p-4 md:p-8'>
          <div className="absolute inset-0 z-0">
            <Squares speed={0.5} squareSize={40} direction='diagonal' borderColor='#271E37' hoverFillColor='#222' />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <TiltedCard
                imageSrc="./will.png" altText="William Almeida" captionText="William Almeida" containerHeight="300px" containerWidth="300px"
                imageHeight="300px" imageWidth="300px" rotateAmplitude={12} scaleOnHover={1.1} showMobileWarning={false} showTooltip={true}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              <div className='font-poppins font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-white'>
                <TextType key={i18n.language} text={[t('heroLine1'), t('heroLine2'), t('heroLine3')]} typingSpeed={75} pauseDuration={2000} showCursor={true} cursorCharacter="|" />
              </div>
              <div className="flex flex-col sm:flex-row mt-6 md:mt-8 gap-4">
                <a href='#sobremim' className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 bg-purple-700/20 backdrop-blur-md border border-purple-400/30 shadow-lg hover:bg-purple-800/30 hover:border-purple-500/40">{t('aboutButton')}</a>
                <a href='#contato' className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 bg-transparent backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/10 hover:border-white/30">{t('contactButton')}</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sobremim" className="min-h-screen py-24 px-4 bg-gradient-to-b from-[#111119] to-[#0d0d15] text-white flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className='text-center mb-12'>
              <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>{t('aboutTitle')}</h2>
            </div>
            <div className="max-w-6xl mx-auto text-center mb-12 bg-zinc-900 border border-purple-400 p-6 md:p-8 rounded-lg shadow-xl">
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-normal">{t('aboutText')}</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 max-w-6xl mx-auto'>
              <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)] h-full'>
                <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>{t('devTitle')}</h3>
                <p className='text-zinc-400 mb-4 text-center flex-grow'>{t('devText')}</p>
                <button className='mt-auto bg-gray-500 text-white font-semibold py-2 px-4 rounded-full transition-colors cursor-not-allowed w-full text-center' disabled>{t('devStatus')}</button>
              </div>
              <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.5)] h-full'>
                <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>{t('dbTitle')}</h3>
                <p className='text-zinc-400 mb-4 text-center flex-grow'>{t('dbText')}</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className='mt-auto bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors w-full text-center'>{t('viewCert')}</a>
              </div>
              <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)] h-full'>
                <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>{t('itSupportTitle')}</h3>
                <p className='text-zinc-400 mb-4 text-center flex-grow'>{t('itSupportText')}</p>
                <a href="https://www.coursera.org/account/accomplishments/specialization/7NL4VVJF0HZH" target="_blank" rel="noopener noreferrer" className='mt-auto bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors w-full text-center'>{t('viewCert')}</a>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="tecnologias" className="min-h-screen py-24 px-4 bg-gradient-to-b from-[#0d0d15] to-[#1a1a29] text-white flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins leading-tight md:leading-[1.3] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">{t("tech")}</h2>
            <p className="text-zinc-400 mt-3 text-lg">{i18n.language === "pt" ? "Tecnologias que utilizo no meu dia a dia" : "Technologies I work with daily"}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group p-6 rounded-2xl bg-zinc-900 border border-purple-400/30 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">{tech.icon}<span className="absolute -inset-2 rounded-full blur-lg bg-purple-500/30 opacity-0 group-hover:opacity-100 transition duration-500"></span></div>
                  <span className="font-semibold text-lg">{tech.name}</span>
                  <span className="text-sm text-purple-400 font-bold">{tech.level}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projetos" className="min-h-screen py-24 px-4 bg-gradient-to-b from-[#1a1a29] to-[#111119] text-white flex flex-col justify-center">
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>{t('projectsTitle')}</h2>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {/* Projeto 1 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0 }} className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col'>
              <img src="./acervo.png" alt="Imagem sistema de acervo literário" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex space-x-3 mb-4 text-purple-400"><SiNextdotjs size={24} /><SiPostgresql size={24} /><FaReact size={24} /><SiAuth0 size={24} /><FaCode size={24} /></div>
              <h3 className='text-2xl font-bold mb-2'>{t('acervoTitle')}</h3>
              <p className='text-zinc-400 mb-4 flex-grow'>{t('acervoDescription')}</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className='mt-auto'><button className='w-full bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>{t('viewProject')}</button></a>
            </motion.div>
            {/* Projeto 2 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col'>
              <img src="./acervo.png" alt="Placeholder do Projeto 2" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex space-x-3 mb-4 text-purple-400"><FaReact size={24} /><FaNodeJs size={24} /><SiAuth0 size={24} /><SiPostgresql size={24} /><FaCode size={24} /></div>
              <h3 className='text-2xl font-bold mb-2'>{t('libraryTitle')}</h3>
              <p className='text-zinc-400 mb-4 flex-grow'>{t('libraryDescription')}</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className='mt-auto'><button className='w-full bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>{t('viewProject')}</button></a>
            </motion.div>
            {/* Projeto 3 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col'>
              <img src="./ecoacao.png" alt="Placeholder do Projeto 3" className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex space-x-3 mb-4 text-purple-400"><SiNextdotjs size={24} /><FaReact size={24} /><FaCode size={24} /><SiPostgresql size={24} /><SiVite size={24} /></div>
              <h3 className='text-2xl font-bold mb-2'>{t('ecoacaoTitle')}</h3>
              <p className='text-zinc-400 mb-4 flex-grow'>{t('ecoacaoDescription')}</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className='mt-auto'><button className='w-full bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>{t('viewProject')}</button></a>
            </motion.div>
          </div>
        </section>

        <section id='contato' className='min-h-screen py-24 px-4 bg-[#111119] text-white flex flex-col justify-center'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>{t('contactTitle')}</h2>
          </div>
          <div className='max-w-4xl mx-auto text-center'>
            <p className='text-base md:text-lg mb-8 text-zinc-300'>{t('contactText')}</p>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-6'>
              <a href="mailto:williamalmeida1337@gmail.com" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto md:flex-1 md:justify-center'>
                <FaEnvelope size={32} className='text-purple-400' />
                <span className='font-semibold text-lg'>Email</span>
              </a>
              <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto md:flex-1 md:justify-center'>
                <FaLinkedin size={32} className='text-purple-400' />
                <span className='font-semibold text-lg'>LinkedIn</span>
              </a>
              <a href="https://github.com/williamalmeidadev" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto md:flex-1 md:justify-center'>
                <FaGithub size={32} className='text-purple-400' />
                <span className='font-semibold text-lg'>GitHub</span>
              </a>
              <a href="https://www.instagram.com/williamalmeida.dev/" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto md:flex-1 md:justify-center'>
                <FaInstagram size={32} className='text-purple-400' />
                <span className='font-semibold text-lg'>Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
}

export default App;