
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, PenLine, Car, Truck, Bike } from "lucide-react";
import { VehicleType } from "./form-steps/VehicleType";
import { DownPayment } from "./form-steps/DownPayment";
import { MonthlyBudget } from "./form-steps/MonthlyBudget";
import { ExistingVehicle } from "./form-steps/ExistingVehicle";
import { EmploymentStatus } from "./form-steps/EmploymentStatus";
import { MonthlyIncome } from "./form-steps/MonthlyIncome";
import { IncomeLength } from "./form-steps/IncomeLength";
import { PersonalInfo } from "./form-steps/PersonalInfo";
import { EmploymentInfo } from "./form-steps/EmploymentInfo";

export type FormData = {
  vehicleType: string;
  zeroDown: boolean;
  monthlyBudget: string;
  existingVehicle: string;
  employmentStatus: string;
  monthlyIncome: string;
  incomeLength: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  address: {
    street: string;
    province: string;
    city: string;
    postalCode: string;
  };
  employment: {
    employer: string;
    position: string;
    status: string;
    income: string;
    type: string;
    timeAtJob: string;
  };
};

const INITIAL_DATA: FormData = {
  vehicleType: "",
  zeroDown: false,
  monthlyBudget: "",
  existingVehicle: "",
  employmentStatus: "",
  monthlyIncome: "",
  incomeLength: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: {
    day: "",
    month: "",
    year: "",
  },
  address: {
    street: "",
    province: "",
    city: "",
    postalCode: "",
  },
  employment: {
    employer: "",
    position: "",
    status: "",
    income: "",
    type: "",
    timeAtJob: "",
  },
};

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);

  const steps = [
    "Vehicle Type",
    "Down Payment",
    "Monthly Budget",
    "Existing Vehicle",
    "Employment Status",
    "Monthly Income",
    "Income Length",
    "Personal Information",
    "Employment Information",
  ];

  const getVehicleIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'car':
      case 'suv':
      case 'van':
        return Car;
      case 'truck':
      case 'rv':
        return Truck;
      case 'bike':
      case 'atv':
      case 'snowmobile':
        return Bike;
      default:
        return Car;
    }
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
        title: "Application submitted successfully!",
        description: "We'll be in touch soon with your personalized results.",
      });
      console.log("Form submitted:", formData);
    } else {
      next();
    }
  };

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    // Automatically move to next step after selection, but only for radio selection steps
    if (currentStep < 7) { // Don't auto-advance for PersonalInfo and EmploymentInfo steps
      next();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <VehicleType {...formData} updateFields={updateFields} />;
      case 1:
        return <DownPayment {...formData} updateFields={updateFields} />;
      case 2:
        return <MonthlyBudget {...formData} updateFields={updateFields} />;
      case 3:
        return <ExistingVehicle {...formData} updateFields={updateFields} />;
      case 4:
        return <EmploymentStatus {...formData} updateFields={updateFields} />;
      case 5:
        return <MonthlyIncome {...formData} updateFields={updateFields} />;
      case 6:
        return <IncomeLength {...formData} updateFields={updateFields} />;
      case 7:
        return <PersonalInfo {...formData} updateFields={updateFields} />;
      case 8:
        return <EmploymentInfo {...formData} updateFields={updateFields} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {formData.vehicleType && currentStep > 0 && (
        <Card className="p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {(() => {
                const IconComponent = getVehicleIcon(formData.vehicleType);
                return <IconComponent className="h-6 w-6 text-primary" />;
              })()}
              <div>
                <p className="text-sm text-muted-foreground">Selected Vehicle Type</p>
                <p className="font-medium capitalize">{formData.vehicleType}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentStep(0)}
              className="flex items-center text-primary hover:text-primary/80"
            >
              <PenLine className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </Card>
      )}

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
