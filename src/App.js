import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Capabilities from './components/Capabilities';
import Pricing from './components/Pricing';
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
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

export default App;
