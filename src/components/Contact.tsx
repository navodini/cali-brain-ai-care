
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900 text-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to learn more about how MedCaliper can transform brain tumor care? 
            We'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a 
                    href="mailto:info@medcaliper.co.uk" 
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    info@medcaliper.co.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-cyan-400 mr-4" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-slate-300">United Kingdom</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Follow Our Progress</h4>
              <p className="text-slate-300 mb-4">
                Stay updated on our latest developments and research breakthroughs in AI-powered brain tumor care.
              </p>
              <Button 
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full px-6 py-2 transition-all duration-300"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Message</label>
                <textarea 
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors h-32 resize-none"
                  placeholder="Tell us about your interest in MedCaliper..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
