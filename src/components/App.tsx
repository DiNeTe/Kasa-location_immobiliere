import Header from "./Header";
import Footer from "./Footer";
import AppRouter from "../routes/AppRouter";

// composant fonctionnel React
const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <header>
        <Header />
        </header>
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
