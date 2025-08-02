import { useState } from 'react';
import Squares from './blocks/Backgrounds/Squares/Squares';
import TextType from './blocks/TextAnimations/TextType/TextType';
import TiltedCard from './blocks/Components/TiltedCard/TiltedCard';
import { FaInstagram, FaLinkedin, FaGithub, FaReact, FaNodeJs, FaCode, FaEnvelope} from "react-icons/fa6";
import { SiNextdotjs, SiPostgresql, SiAuth0, SiVite, SiMedium } from "react-icons/si";
import './App.css'; // Mantenha este import para estilos específicos
import { IoMenu } from "react-icons/io5";

function App() {
  // Estado para controlar a abertura/fechamento do menu móvel
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className='fixed top-0 left-0 w-full z-50 p-4'>
        <nav className='flex justify-between items-center max-w-7xl mx-auto rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg px-4 py-3 md:px-8 md:py-4'>
          {/* Título do Portfólio */}
          <div className='text-white text-lg md:text-2xl font-bold'>
            William Almeida - Portfólio
          </div>
          
          {/* Botão do menu de hambúrguer (visível apenas em telas pequenas) */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white p-2 focus:outline-none'>
              <IoMenu size={24} />
            </button>
          </div>

          {/* Menu principal (oculto em telas pequenas) */}
          <div className='hidden md:flex items-center space-x-6 text-white'>
            <a href="#inicio" className='font-semibold text-lg hover:text-purple-400 transition-colors'>Início</a>
            <a href="#sobremim" className='font-semibold text-lg hover:text-purple-400 transition-colors'>Sobre mim</a>
            <a href="#projetos" className='font-semibold text-lg hover:text-purple-400 transition-colors'>Projetos</a>
            <a href="#contato" className='font-semibold text-lg hover:text-purple-400 transition-colors'>Contato</a>
            <div className='flex items-center space-x-4 ml-6'>
              <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/WilliamAlmeida1" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
                <FaGithub size={24} />
              </a>
              <a href="https://www.instagram.com/_williamalmeida/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
                <FaInstagram size={24} />
              </a>
              <a href="https://medium.com/@williamalmeidadev" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
                <SiMedium size={24} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu de sobreposição para dispositivos móveis */}
      {isMenuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-zinc-900/90 backdrop-blur-sm z-[60] flex flex-col items-center justify-center text-white p-8 animate-fade-in'>
          <button onClick={toggleMenu} className='absolute top-4 right-4 text-white p-2 focus:outline-none'>
            <IoMenu size={28} />
          </button>
          <nav className='flex flex-col space-y-8 text-center text-3xl'>
            <a href="#inicio" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>Início</a>
            <a href="#sobremim" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>Sobre mim</a>
            <a href="#projetos" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>Projetos</a>
            <a href="#contato" onClick={toggleMenu} className='font-semibold hover:text-purple-400 transition-colors'>Contato</a>
          </nav>
          <div className='flex items-center space-x-6 mt-12'>
            <a href="https://www.linkedin.com/in/williamalmeida0/" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/WilliamAlmeida1" target="_blank" rel="noopener noreferrer" className='hover:text-purple-400 transition-colors'>
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

      {/* Seção de Início */}
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
          {/* Contêiner de texto e botões, agora mais largo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className='font-poppins font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-7xl text-white'>
              <TextType
                text={["Olá! Sou William Almeida", "Desenvolvedor Web Full Stack 🖥️", "Bem vindo(a) ao meu portfólio!"]}
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
                Sobre Mim
              </a>
              <a href='#contato' className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 
                                 bg-transparent backdrop-blur-md border border-white/20 shadow-lg 
                                 hover:bg-white/10 hover:border-white/30">
                Entre em Contato
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Seção Sobre Mim */}
      <section id='sobremim' className='min-h-screen py-16 px-4 bg-[#111119] text-white flex flex-col justify-center'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>Sobre mim e meus estudos</h2>
        </div>
        <div className="max-w-6xl mx-auto text-center mb-12 bg-zinc-900 border border-purple-400 p-6 md:p-8 rounded-lg shadow-xl">
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Me chamo <strong>William Almeida</strong>, tenho 17 anos e moro em Paramoti - CE. Sou um entusiasta apaixonado por tecnologia, com foco especial em <strong>desenvolvimento Web</strong>. Fui premiado em olimpíadas nacionais de tecnologia, como a <strong>Maratona Tech</strong> e a <strong>Olimpíada Brasileira de Tecnologia</strong>, o que reforça meu compromisso com o aprendizado e a evolução na área de TI.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 max-w-6xl mx-auto'>
          {/* Card 1 */}
          <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)]'>
            <div className="flex justify-between items-center w-full mb-4">
              <FaCode size={24} className="text-purple-400" />
              <span className="bg-purple-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                2023 - 2025
              </span>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>Desenvolvimento de Sistemas</h3>
            <p className='text-zinc-400 mb-4 text-center'>Curso técnico realizado na escola EEEP Francisco Paiva Tavares</p>
            <button className='mt-auto bg-gray-500 text-white font-semibold py-2 px-4 rounded-full transition-colors cursor-not-allowed w-full text-center' disabled>
              Em andamento!
            </button>
          </div>
          {/* Card 2 */}
          <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.5)]'>
            <div className="flex justify-between items-center w-full mb-4">
              <FaCode size={24} className="text-purple-400" />
              <span className="bg-purple-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                2025
              </span>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>Administrador de Banco de Dados</h3>
            <p className='text-zinc-400 mb-4 text-center'>Curso realizado no Instituto Federal do Rio Grande do Sul (Online)</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className='mt-auto bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors w-full text-center'>
              Ver Certificado
            </a>
          </div>
          {/* Card 3 */}
          <div className='flex flex-col items-center bg-zinc-800 border-2 border-purple-400 p-6 rounded-lg shadow-xl w-full md:w-1/3 transition-all duration-300 hover:shadow-[0_0_25px_rgba(192,132,252,0.8)]'>
            <div className="flex justify-between items-center w-full mb-4">
              <FaCode size={24} className="text-purple-400" />
              <span className="bg-purple-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                2025
              </span>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-2 text-center'>Especialização em Suporte de TI</h3>
            <p className='text-zinc-400 mb-4 text-center'>Curso da Google com aprendizado sobre administração de sistemas.</p>
            <a href="#" target="_blank" rel="noopener noreferrer" className='mt-auto bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors w-full text-center'>
              Ver Certificado
            </a>
          </div>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id='projetos' className='min-h-screen py-16 px-4 bg-[#111119] text-white flex flex-col justify-center'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>Projetos</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {/* Projeto 1 */}
          <div className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'>
            <img src="./acervo.png" alt="Imagem sistema de acervo literário" className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex space-x-3 mb-4 text-purple-400">
              <SiNextdotjs size={24} />
              <SiPostgresql size={24} />
              <FaReact size={24} />
              <SiAuth0 size={24} />
              <FaCode size={24} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Acervo Literário</h3>
            <p className='text-zinc-400 mb-4'>Projeto desenvolvido e em uso para uma escola, utiliza NextJS, PostgreeSQL, React, Auth0, etc</p>
            <button className='bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>
              Ver Projeto
            </button>
          </div>
          {/* Projeto 2 */}
          <div className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'>
            <img src="./acervo.png" alt="Placeholder do Projeto 2" className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex space-x-3 mb-4 text-purple-400">
              <FaReact size={24} />
              <FaNodeJs size={24} />
              <SiAuth0 size={24} />
              <SiPostgresql size={24} />
              <FaCode size={24} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>Gerenciamento Biblioteca</h3>
            <p className='text-zinc-400 mb-4'>Projeto desenvolvido e aplicado para gerenciamento de empréstismos de livros em uma escola do Ceará</p>
            <button className='bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>
              Ver Projeto
            </button>
          </div>
          {/* Projeto 3 */}
          <div className='bg-zinc-800 p-6 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105'>
            <img src="./ecoacao.png" alt="Placeholder do Projeto 3" className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex space-x-3 mb-4 text-purple-400">
              <SiNextdotjs size={24} />
              <FaReact size={24} />
              <FaCode size={24} />
              <SiPostgresql size={24} />
              <SiVite size={24} />
            </div>
            <h3 className='text-2xl font-bold mb-2'>EcoAção</h3>
            <p className='text-zinc-400 mb-4'>Projeto premiado na Olimpíada Brasileira de Tecnologia, usa NextJS, Grok API, Supabase, React, etc</p>
            <button className='bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-full transition-colors'>
              Ver Projeto
            </button>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id='contato' className='min-h-screen py-16 px-4 bg-[#111119] text-white flex flex-col justify-center'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-extrabold font-poppins'>Entre em Contato</h2>
        </div>
        <div className='max-w-2xl mx-auto text-center'>
          <p className='text-base md:text-lg mb-8 text-zinc-300'>
            Fique à vontade para me enviar uma mensagem, conectar-se comigo nas redes sociais ou verificar meus projetos no GitHub.
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
            <a href="https://github.com/WilliamAlmeida1" target="_blank" rel="noopener noreferrer" className='flex items-center space-x-4 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg p-4 md:p-6 rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 w-full sm:w-auto'>
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
    </>
  );
}

export default App;