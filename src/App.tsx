import './App.css';
import Squares from './blocks/Backgrounds/Squares/Squares';
import TextType from './blocks/TextAnimations/TextType/TextType';
import RotatingText from './blocks/TextAnimations/RotatingText/RotatingText';

function App() {
  return (
    <>
      <section id='inicio'>
        <div className="background-container">
          <Squares
            speed={0.5}
            squareSize={40}
            direction='diagonal'
            borderColor='#271E37'
            hoverFillColor='#222'
          />
        </div>

        <div className="content-overlay">
          <div id='tituloprincipal'>
            <TextType
              text={["Olá! Sou William Almeida", "Desenvolvedor Web", "Bem vindo ao meu portfólio!"]}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
          <div style={{ display: 'flex', marginTop: '20px' }} className="button-container">
            <button className="button-primary">Get Started</button>
            <button className="button-secondary">Learn More</button>
          </div>
        </div>
      </section>
      <section id='tecnologias'>
        <div id="project-title" className='flex flex-col sm:flex-row items-center justify-center mb-8 space-y-4 sm:space-y-0 sm:space-x-4'>
          <h1>Projetos</h1>
          <RotatingText
            texts={['Criativos', 'Responsivos', 'Otimizados', 'Interativos']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-purple-900 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
          />
        </div>
        <div>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
          <p>CARD PROJETO 1</p>
        </div>
      </section>
    </>
  );
}

export default App;