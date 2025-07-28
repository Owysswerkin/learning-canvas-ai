import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Why use an Instructional system design tool?",
      answer: "Functional is a passion project still in development—built to streamline your design process, centralize collaboration, and evolve based on real-world needs."
    },
    {
      question: "What does Functional app do?",
      answer: "It provides a platform for instructional designers to design their training based on proven learning design frameworks."
    },
    {
      question: "What if I need custom features?",
      answer: "Functional includes a feature kanban board where you can suggest new ideas and vote on upcoming enhancements."
    }
  ];

  return (
    <section id="faq" className="max-w-4xl mx-auto space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;