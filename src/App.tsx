import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
// import Review from "./components/Review";
import { ReviewCoba } from "./components/ReviewCoba";
import { LearnMore } from "./components/LearnMore";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Cards />
      <ReviewCoba />
      <LearnMore />
      <Footer />
    </>
  );
}

export default App;
