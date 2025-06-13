
import { Brain, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI-Powered Analysis",
      description: "Advanced artificial intelligence algorithms analyze brain tumor data to provide personalized treatment insights and recommendations."
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "Efficient Decision Making",
      description: "Streamline clinical workflows and reduce decision-making time while maintaining the highest standards of patient care."
    },
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "Personalized Care",
      description: "Tailored treatment approaches that align with individual patient needs and unique tumor characteristics."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Revolutionizing Brain Tumor Care
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with clinical expertise 
            to deliver personalized treatment solutions for brain tumor patients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
