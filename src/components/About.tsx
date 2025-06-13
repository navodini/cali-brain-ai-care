
const About = () => {
  return (
    <section className="py-20 bg-slate-900 text-white" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About MedCaliper
            </h2>
            <p className="text-xl text-slate-300">
              Pioneering the future of brain tumor treatment through AI innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                MedCaliper is dedicated to transforming brain tumor care by harnessing the power of 
                artificial intelligence to provide personalized, precise treatment recommendations.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                We believe that every patient deserves access to the most advanced diagnostic and 
                treatment tools available, and we're committed to making that vision a reality.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our platform combines cutting-edge AI algorithms with clinical expertise to deliver 
                insights that can improve patient outcomes and quality of life.
              </p>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h4 className="text-2xl font-bold text-white mb-4">Why It Matters</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-xl">•</span>
                  <span>Personalized treatment approaches for better outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-xl">•</span>
                  <span>Faster, more accurate diagnostic capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-xl">•</span>
                  <span>Enhanced clinical decision-making support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 text-xl">•</span>
                  <span>Improved quality of life for patients and families</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
