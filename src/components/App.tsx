// Importe le composant Header
import Header from "./Header";
import Footer from "./Footer";

// Importe le composant AppRouter
import AppRouter from "../routes/AppRouter";
// import { BrowserRouter as Router } from 'react-router-dom';

// Crée un composant fonctionnel App.
const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
