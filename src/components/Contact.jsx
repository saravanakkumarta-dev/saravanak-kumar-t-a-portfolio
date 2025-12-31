const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Get In Touch</h2>
        <p className="text-lg text-slate-600 mb-8">
          I'm currently looking for new opportunities to build new web or mobile applications. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <a href="mailto:saravanakkumarta@retrocoders.dev" className="inline-block border-2 border-slate-900 text-slate-900 font-semibold px-8 py-3 rounded hover:bg-slate-900 hover:text-white transition-colors">
          Say Hello
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-8 text-center border-t border-slate-200">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Saravanak Kumar T A, Built with React & Tailwind.
      </p>
    </footer>
  );
};

export { Contact, Footer };