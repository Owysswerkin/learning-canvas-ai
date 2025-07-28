const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Start with problem statement",
      description: "Define the performance gap you need to solve."
    },
    {
      number: 2,
      title: "Identify recommendations",
      description: "Pinpoint training and non-training solutions."
    },
    {
      number: 3,
      title: "Design scenarios",
      description: "Use action maps, stories, and crafted scenarios."
    },
    {
      number: 4,
      title: "Generate microlearning",
      description: "Create lessons to gather feedback and iterate."
    }
  ];

  return (
    <section id="process" className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {steps.map((step) => (
          <div key={step.number}>
            <div className="mx-auto bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mb-4">
              {step.number}
            </div>
            <h3 className="font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;