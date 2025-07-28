const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-28 mt-36 pb-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <img 
        src="https://res.cloudinary.com/dylxm9fqw/image/upload/v1747641051/IF3QGeVO_400x400_gfcno0.jpg" 
        alt="Founder photo" 
        className="w-32 h-32 rounded-full shadow-soft" 
      />
      <div>
        <p className="mb-4">
          <strong>Hi, I'm Trustin.</strong><br/>
          With over a decade in instructional design and learning tech, I built Functional to empower professionals to design smarter, faster, and more effectively.
        </p>
        <a 
          href="mailto:hello@functional.com" 
          className="underline text-primary hover:text-primary/80 transition-colors"
        >
          hello@functional.com
        </a>
      </div>
    </section>
  );
};

export default AboutSection;