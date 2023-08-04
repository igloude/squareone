import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Capabilities from './components/Capabilities';
import Plans from './components/Plans';
import Footer from './components/Footer';
import './styles/index.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main container">
        <Hero />
        <Work />
        <Capabilities />
        <Plans />
      </main>
      <Footer />
    </>
  );
}

export default App;
