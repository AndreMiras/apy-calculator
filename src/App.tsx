import APYCalculator from "./APYCalculator";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => (
  <div className="min-h-screen flex flex-col bg-gray-100">
    <Navigation />
    <main className="flex-grow flex items-center justify-center p-6">
      <APYCalculator />
    </main>
    <Footer />
  </div>
);

export default App;
