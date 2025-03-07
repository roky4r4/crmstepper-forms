
import { MultiStepForm } from "@/components/MultiStepForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Vehicle Financing Application
          </h1>
          <p className="text-lg text-muted-foreground">
            Drive The Car You Deserve - Complete Your Application Below
          </p>
        </div>
        <MultiStepForm />
      </div>
    </div>
  );
};

export default Index;
