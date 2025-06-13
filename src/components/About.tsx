
const About = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-cyan-400">medCaliper</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                medCaliper represents the next generation of medical technology, 
                combining artificial intelligence with clinical expertise to transform 
                brain tumor care.
              </p>
              <p>
                Our mission is to empower healthcare professionals with intelligent 
                tools that enhance decision-making processes while ensuring patient 
                care remains at the center of everything we do.
              </p>
              <p>
                As a proud participant in the LIHE Accelerator Programme, we're 
                committed to bringing innovative solutions to market that make a 
                real difference in patient outcomes.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-black">Why medCaliper?</h3>
              <ul className="space-y-4 text-black">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Evidence-based AI algorithms trained on comprehensive datasets</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Seamless integration with existing clinical workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Continuous learning and improvement capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Backed by leading medical research and innovation programs</span>
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
