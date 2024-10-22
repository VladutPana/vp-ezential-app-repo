import Navbar from './components/Navbar';
import Main from './components/Main';
import Cards from './components/Cards';
import Perks from './components/Perks';
import BentoBox from './components/BentoBox';
import Upcoming from './components/Upcoming';
import Gallery from './components/Gallery';
import Buy from './components/Buy';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      < Navbar />
      < Main />
      < Cards />
      < Perks />
      < BentoBox />
      < Upcoming />
      < Gallery />
      < Buy />
      < Footer />
    </div>
    </>
  );
}

export default App;
