import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
// import Review from "./components/Review";
import { ReviewCoba } from "./components/ReviewCoba";
import { LearnMore } from "./components/LearnMore";
import { Footer } from "./components/Footer";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Cards />
      <ReviewCoba />
      <LearnMore />
      <ImageSlider />
      <Footer />
    </>
  );
}

export default App;
