
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600">
              Interested in learning more about medCaliper? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Ready to Transform Brain Tumor Care?
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you're a healthcare professional, researcher, or potential partner, 
                we're excited to discuss how medCaliper can support your work in advancing 
                personalized brain tumor treatment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></div>
                  <span className="text-slate-700">Backed by LIHE Accelerator Programme</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></div>
                  <span className="text-slate-700">Cutting-edge AI technology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mr-4"></div>
                  <span className="text-slate-700">Patient-centered approach</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700">Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    className="mt-2 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500" 
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-slate-700">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="mt-2 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500" 
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="organization" className="text-slate-700">Organization</Label>
                  <Input 
                    id="organization" 
                    type="text" 
                    className="mt-2 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500" 
                    placeholder="Your organization"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-700">Message</Label>
                  <Textarea 
                    id="message" 
                    className="mt-2 border-slate-300 focus:border-cyan-500 focus:ring-cyan-500" 
                    placeholder="Tell us about your interest in medCaliper..."
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
