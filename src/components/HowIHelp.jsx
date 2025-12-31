const HowIHelp = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          How I Can Help
        </h2>

        <p className="text-slate-600 text-lg mb-10 max-w-3xl">
          I help individuals and small teams build reliable, maintainable
          applications — from new ideas to improving existing products.
        </p>

        <ul className="space-y-5 text-slate-700">
          <li>
            • Build custom <strong>web applications</strong> using React and
            modern frontend practices
          </li>
          <li>
            • Convert existing <strong>web applications into mobile apps </strong>
            using Capacitor (Android / cross-platform)
          </li>
          <li>
            • Develop <strong>offline-first mobile apps</strong> for unreliable
            network environments
          </li>
          <li>
            • Design and implement <strong>backend APIs</strong> using Spring Boot
          </li>
          <li>
            • Improve stability, performance, and structure of existing codebases
          </li>
          <li>
            • Build MVPs and internal tools with a focus on correctness and
            long-term maintainability
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowIHelp;
