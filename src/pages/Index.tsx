
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Video from "@/components/Video";
import About from "@/components/About";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Video />
      <About />
      <Feedback />
      <Contact />
    </div>
  );
};

export default Index;
