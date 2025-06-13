
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-cyan-300 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border border-cyan-500 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-16 h-16 text-cyan-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              medCaliper
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            AI-powered tool for personalised brain tumour care
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Helping make clinical decision-making more efficient and better aligned with patient needs. 
            Backed by innovative AI technology and supported by the LIHE Accelerator Programme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 text-lg"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg"
            >
              Contact Us
            </Button>
          </div>
          
          <div className="mt-16 text-sm text-gray-500">
            Proudly backed by <span className="text-cyan-400 font-semibold">LIHE Accelerator Programme</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
