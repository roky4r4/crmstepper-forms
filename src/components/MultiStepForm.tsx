
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { PersonalInfo } from "./form-steps/PersonalInfo";
import { BusinessDetails } from "./form-steps/BusinessDetails";
import { ContactPreferences } from "./form-steps/ContactPreferences";
import { Confirmation } from "./form-steps/Confirmation";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  size: string;
  website: string;
  preferredContact: string;
  newsletter: boolean;
  updates: boolean;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  industry: "",
  size: "",
  website: "",
  preferredContact: "",
  newsletter: false,
  updates: false,
};

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);

  const steps = [
    "Personal Information",
    "Business Details",
    "Contact Preferences",
    "Confirmation",
  ];

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((curr) => curr + 1);
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep((curr) => curr - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      toast({
        title: "Form submitted successfully!",
        description: "We'll be in touch soon.",
      });
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
    } else {
      next();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo {...formData} updateFields={updateFields} />;
      case 1:
        return <BusinessDetails {...formData} updateFields={updateFields} />;
      case 2:
        return <ContactPreferences {...formData} updateFields={updateFields} />;
      case 3:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Card className="p-6 space-y-8 shadow-lg">
        <div className="space-y-6">
          <div className="progress-step">
            <div
              className="progress-bar"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <div className="flex justify-center items-center space-x-2">
            {steps.map((step, index) => (
              <div key={step} className="step-indicator">
                <div
                  className={`step-indicator-dot ${
                    index <= currentStep ? "active" : ""
                  } ${index < currentStep ? "completed" : ""}`}
                >
                  {index < currentStep && (
                    <Check className="w-2 h-2 text-white" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`step-indicator-line ${
                      index < currentStep ? "active" : ""
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-center">
            {steps[currentStep]}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {renderStep()}

          <div className="flex justify-between pt-4">
            {currentStep > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={back}
                className="flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button
              type="submit"
              className="ml-auto flex items-center"
            >
              {currentStep === steps.length - 1 ? (
                "Submit"
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
