import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Plan",
      description: "Ideal for small teams. Includes workspace access and basic analytics.",
      price: "$299/mo",
      action: "Get Started"
    },
    {
      name: "Professional Plan",
      description: "For growing teams. Advanced features and priority support.",
      price: "$599/mo",
      action: "Get Started"
    },
    {
      name: "Enterprise Plan",
      description: "Custom solutions for large organizations.",
      price: "Custom",
      action: "Contact Us"
    }
  ];

  return (
    <section id="pricing" className="scroll-mt-28 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center">Flexible Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className="text-center surface-elevated">
            <CardHeader>
              <CardTitle className="font-semibold">{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{plan.description}</p>
              <p className="text-2xl font-bold">{plan.price}</p>
              <Button className="btn-primary w-full">
                {plan.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;