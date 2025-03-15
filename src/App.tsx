import { useEffect } from 'react';
import Home from './pages/Home/Home';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import './assets/styles/Fonts.scss';
import './assets/styles/App.css';

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = anchor.getAttribute('href');
        const targetId = href?.substring(1);
        
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, 
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="App">
      <Home />
      <WhatsAppButton 
        phoneNumber="+554195564466" 
        message="Olá! Gostaria de agendar uma consulta jurídica."
      />
    </div>
  );
};

export default App;