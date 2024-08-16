import { ArticleContainer } from "./components/ArticleContainer/ArticleContainer";
import { FeatureContainer } from "./components/FeatureContainer/FeatureContainer";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureContainer />
      <ArticleContainer />
      <Footer />
    </>
  );
}

export default App;
