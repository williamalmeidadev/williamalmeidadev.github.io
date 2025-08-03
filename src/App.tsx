import { useState, Suspense } from 'react';
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

const resources = {
  pt: {
    translation: {
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
      acervoDescription: 'Projeto desenvolvido e em uso para uma escola, utiliza NextJS, PostgreSQL, React, Auth0, etc',
      libraryTitle: 'Gerenciamento Biblioteca',
      libraryDescription: 'Projeto desenvolvido e aplicado para gerenciamento de empréstimos de livros em uma escola do Ceará',
      ecoacaoTitle: 'EcoAção',
      ecoacaoDescription: 'Projeto premiado na Olimpíada Brasileira de Tecnologia, usa NextJS, Grok API, Supabase, React, etc',
      viewProject: 'Ver Projeto',
      contactTitle: 'Entre em Contato',
      contactText: 'Fique à vontade para me enviar uma mensagem, conectar-se comigo nas redes sociais ou verificar meus projetos no GitHub.',
    }
  },
  en: {
    translation: {
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
      acervoDescription: 'Project developed and in use for a school, uses NextJS, PostgreSQL, React, Auth0, etc',
      libraryTitle: 'Library Management',
      libraryDescription: 'Project developed and applied for managing book loans in a school in Ceará',
      ecoacaoTitle: 'EcoAção',
      ecoacaoDescription: 'Award-winning project at the Brazilian Technology Olympiad, uses NextJS, Grok API, Supabase, React, etc',
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className='fixed top-0 left-0 w-full z-50 p-4'>
        <nav className='flex justify-between items-center max-w-7xl mx-auto rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg px-6 py-3 md:px-10 md:py-4'>

          <button
            onClick={toggleLanguage}
            className='relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 group overflow-hidden'
            aria-label={i18n.language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
            title={i18n.language === 'pt' ? 'Clique para mudar para inglês' : 'Click to switch to Portuguese'}
          >
            <span
              role="img"
              aria-label={i18n.language === 'pt' ? 'Bandeira do Brasil' : 'Bandeira dos EUA'}
              className="text-xl md:text-2xl z-10"
            >
              {i18n.language === 'pt' ? '🇧🇷' : '🇺🇸'}
            </span>

            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <FaExchangeAlt size={24} className="text-white" />
            </div>
          </button>

          <div className='flex-grow text-center text-white text-xl md:text-3xl font-extrabold tracking-wide'>
            {t('portfolio')}
          </div>

          {/* Botão do menu para mobile - Visível apenas em telas menores que 'lg' (mobile e tablet) */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white p-2 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors'
              aria-label="Abrir menu de navegação"
            >
              <IoMenu size={28} />
            </button>
          </div>

          {/* Links de navegação e redes sociais para desktop - Visível APENAS em telas 'lg' e maiores */}
          <div className='hidden lg:flex items-center space-x-8 text-white'>
            <a href="#inicio" className='font-semibold text-lg hover:text-purple-400 transition-colors relative group'>
              {t('home')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#sobremim" className='font-semibold text-lg hover:text-purple-400 transition-colors relative group'>
              {t('about')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#projetos" className='font-semibold text-lg hover:text-purple-400 transition-colors relative group'>
              {t('projects')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a href="#contato" className='font-semibold text-lg hover:text-purple-400 transition-colors relative group'>
              {t('contact')}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <div className='flex items-center space-x-5 ml-8'>
              <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110' aria-label="LinkedIn">
                <FaLinkedin size={26} />
              </a>
              <a href="https://github.com/WilliamAlmeidadev" target="_blank" rel="noopener noreferrer" className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110' aria-label="GitHub">
                <FaGithub size={26} />
              </a>
              <a href="https://www.instagram.com/_williamalmeida/" target="_blank" rel="noopener noreferrer" className='text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110' aria-label="Instagram">
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
          <nav className='flex flex-col space-y-8 text-center text-3xl'>
            <a href="#inicio" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>{t('home')}</a>
            <a href="#sobremim" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>{t('about')}</a>
            <a href="#projetos" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>{t('projects')}</a>
            <a href="#contato" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>{t('contact')}</a>
          </nav>
          <div className='flex items-center space-x-6 mt-12'>
            <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/WilliamAlmeidadev" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
              <FaGithub size={32} />
            </a>
            <a href="https://www.instagram.com/_williamalmeida/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
              <FaInstagram size={32} />
            </a>
            <a href="https://medium.com/@williamalmeidadev" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
              <SiMedium size={32} />
            </a>
          </div>
        </div>
      )}

      <section id='inicio' className='min-h-screen relative flex items-center justify-center p-4 md:p-8'>
        <div className="absolute inset-0 z-0">
          <Squares speed={0.5} squareSize={40} direction='diagonal' borderColor='#271E37' hoverFillColor='#222' />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <TiltedCard
              imageSrc="./will.png"
              altText="William Almeida"
              captionText="William Almeida"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className='font-poppins font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-white'>
              <TextType
                key={i18n.language}
                text={[t('heroLine1'), t('heroLine2'), t('heroLine3')]}
                typingSpeed={75}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-6 md:mt-8 gap-4">
              <a href='#sobremim' className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300
                                 bg-purple-700/20 backdrop-blur-md border border-purple-400/30 shadow-lg
                                 hover:bg-purple-800/30 hover:border-purple-500/40">
                {t('aboutButton')}
              </a>
              <a href='#contato' className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300
                                 bg-transparent backdrop-blur-md border border-white/20 shadow-lg
                                 hover:bg-white/10 hover:border-white/30">
                {t('contactButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='sobremim' className='min-h-screen py-16 px-4 bg-[#111119] text-white flex flex-col justify-center'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>{t('aboutTitle')}</h2>
        </div>
        <div className="max-w-6xl mx-auto text-center mb-12 bg-zinc-900 border border-purple-400 p-6 md:p-8 rounded-lg shadow-xl">
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            {t('aboutText')}
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 max-w-6xl mx-auto'>
          <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)]'>
            <div className="flex justify-between items-center w-full mb-4">
              <FaCode size={24} className="text-purple-400" />
              <span className="bg-purple-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                2023 - 2025
              </span>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>{t('devTitle')}</h3>
            <p className='text-zinc-400 mb-4 text-center'>{t('devText')}</p>
            <button className='mt-auto bg-gray-500 text-white font-semibold py-2 px-4 rounded-full transition-colors cursor-not-allowed w-full text-center' disabled>
              {t('devStatus')}
            </button>
          </div>
          <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.5)]'>
            <div className="flex justify-between items-center w-full mb-4">
              <FaCode size={24} className="text-purple-400" />
              <span className="bg-purple-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                2025
              </span>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>{t('dbTitle')}</h3>
            <p className='text-zinc-400 mb-4 text-center'>{t('dbText')}</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className='mt-auto bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors w-full text-center'>
              {t('viewCert')}
            </a>
          </div>
          <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)]'>
            <div className="flex justify-between items-center w-full mb-4">
              <FaCode size={24} className="text-purple-400" />
              <span className="bg-purple-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                2025
              </span>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>{t('itSupportTitle')}</h3>
            <p className='text-zinc-400 mb-4 text-center'>{t('itSupportText')}</p>
            <a href="https://www.coursera.org/account/accomplishments/specialization/7NL4VVJF0HZH" target="_blank" rel="noopener noreferrer" className='mt-auto bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors w-full text-center'>
              {t('viewCert')}
            </a>
          </div>
        </div>
      </section>

      <section id='projetos' className='min-h-screen py-16 px-4 bg-[#111119] text-white flex flex-col justify-center'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>{t('projectsTitle')}</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'>
            <img src="./acervo.png" alt="Imagem sistema de acervo literário" className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex space-x-3 mb-4 text-purple-400">
              <SiNextdotjs size={24} />
              <SiPostgresql size={24} />
              <FaReact size={24} />
              <SiAuth0 size={24} />
              <FaCode size={24} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>{t('acervoTitle')}</h3>
            <p className='text-zinc-400 mb-4'>{t('acervoDescription')}</p>
            <button className='bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>
              {t('viewProject')}
            </button>
          </div>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'>
            <img src="./acervo.png" alt="Placeholder do Projeto 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex space-x-3 mb-4 text-purple-400">
              <FaReact size={24} />
              <FaNodeJs size={24} />
              <SiAuth0 size={24} />
              <SiPostgresql size={24} />
              <FaCode size={24} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>{t('libraryTitle')}</h3>
            <p className='text-zinc-400 mb-4'>{t('libraryDescription')}</p>
            <button className='bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>
              {t('viewProject')}
            </button>
          </div>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'>
            <img src="./ecoacao.png" alt="Placeholder do Projeto 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex space-x-3 mb-4 text-purple-400">
              <SiNextdotjs size={24} />
              <FaReact size={24} />
              <FaCode size={24} />
              <SiPostgresql size={24} />
              <SiVite size={24} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>{t('ecoacaoTitle')}</h3>
            <p className='text-zinc-400 mb-4'>{t('ecoacaoDescription')}</p>
            <button className='bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>
              {t('viewProject')}
            </button>
          </div>
        </div>
      </section>

      <section id='contato' className='min-h-screen py-16 px-4 bg-[#111119] text-white flex flex-col justify-center'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>{t('contactTitle')}</h2>
        </div>
        <div className='max-w-2xl mx-auto text-center'>
          <p className='text-base md:text-lg mb-8 text-zinc-300'>
            {t('contactText')}
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6'>
            <a href="mailto:williamalmeida1337@gmail.com" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto'>
              <FaEnvelope size={32} className='text-purple-400' />
              <span className='font-semibold text-lg'>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto'>
              <FaLinkedin size={32} className='text-purple-400' />
              <span className='font-semibold text-lg'>LinkedIn</span>
            </a>
            <a href="https://github.com/williamalmeidadev" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto'>
              <FaGithub size={32} className='text-purple-400' />
              <span className='font-semibold text-lg'>GitHub</span>
            </a>
            <a href="https://www.instagram.com/_williamalmeida/" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto'>
              <FaInstagram size={32} className='text-purple-400' />
              <span className='font-semibold text-lg'>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default App;