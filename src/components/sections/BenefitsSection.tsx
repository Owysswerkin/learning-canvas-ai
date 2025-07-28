const BenefitsSection = () => {
  const benefits = [
    {
      icon: "📑",
      title: "Use pre-templated learning frameworks",
      description: "Start the analysis process quickly with proven templates."
    },
    {
      icon: "🤖",
      title: "Tap on AI",
      description: "Enhance learning outcomes with intelligent insights."
    },
    {
      icon: "💬",
      title: "Converse with AI SME",
      description: "Get expert-level info even when SMEs aren't available."
    },
    {
      icon: "📤",
      title: "Generate deliverables",
      description: "Share outputs with SMEs to get quick endorsement."
    }
  ];

  return (
    <section id="benefits" className="scroll-mt-28 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center">Benefits</h2>
      <div className="flex flex-col gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <span className="text-2xl">{benefit.icon}</span>
            <div>
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;