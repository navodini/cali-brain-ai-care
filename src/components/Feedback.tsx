
const Feedback = () => {
  return (
    <section className="py-20 bg-slate-50" id="feedback">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Feedback
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Clinicians</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              If you're a clinician working with brain tumours, we'd love to hear your thoughts.
              Your insights are incredibly valuable in shaping MedCaliper into a tool that truly makes a difference in practice.
            </p>
            <p className="text-lg">
              📝 <a 
                href="https://research.typeform.com/to/GzGrkyqS" 
                className="text-cyan-600 hover:text-cyan-700 font-semibold underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Clinician Feedback
              </a>
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Patients</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Ultimately, our work is driven by a deep commitment to patient-centred care.
              Your feedback is important for us to continue improving this tool, ensuring it truly meets the needs of patients and families.
            </p>
            <p className="text-lg mb-4">
              📝 <a 
                href="https://research.typeform.com/to/S9jVlFra" 
                className="text-cyan-600 hover:text-cyan-700 font-semibold underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give Patient Feedback
              </a>
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Please consider sharing this with anyone who might benefit from understanding these advancements in brain tumour care.
            </p>
            <p className="text-slate-600">
              For any questions, reach out at{' '}
              <a 
                href="mailto:info@medcaliper.co.uk"
                className="text-cyan-600 hover:text-cyan-700 font-semibold underline transition-colors"
              >
                info@medcaliper.co.uk
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
