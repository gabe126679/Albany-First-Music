import { ThemeProvider } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Auditions from './components/Auditions';
import FiveS from './components/FiveS';
import OpenSessions from './components/OpenSessions';
import Community from './components/Community';
import Ensemble from './components/Ensemble';
import Show from './components/Show';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FiveS />
          <Auditions />
          <OpenSessions />
          <Community />
          <Ensemble />
          <Show />
          <ApplicationForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
