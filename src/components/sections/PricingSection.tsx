import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section id="pricing" className="scroll-mt-28 max-w-4xl mx-auto space-y-8 text-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Be Part of Our Story</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Help us build the perfect tool for instructional designers
        </p>
      </div>
      
      <Card className="surface-elevated max-w-2xl mx-auto">
        <CardContent className="space-y-6 p-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Join Our Early Community</h3>
            <p className="text-muted-foreground">
              As we're building Functional, your input shapes every feature. Be part of creating 
              the instructional design platform you've always wanted.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Benefits for Early Users:</h4>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Lifetime discounts on all future plans
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Direct influence on feature development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Priority access to new features and beta releases
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Exclusive community access with fellow instructional designers
              </li>
            </ul>
          </div>
          
          <Button asChild className="btn-primary w-full">
            <a href="https://theboringlearner.com/join-community" target="_blank" rel="noopener noreferrer">
              Join Our Community
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default PricingSection;