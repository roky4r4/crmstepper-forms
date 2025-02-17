
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type EmploymentInfoProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export function EmploymentInfo({
  employment,
  updateFields,
}: EmploymentInfoProps) {
  const updateEmployment = (field: string, value: string) => {
    updateFields({
      employment: { ...employment, [field]: value },
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Where are you working?</h3>
        <p className="text-sm text-muted-foreground">
          Please provide your employment details
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="employer">Who is your employer?</Label>
          <Input
            id="employer"
            value={employment.employer}
            onChange={(e) => updateEmployment("employer", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">What is your position?</Label>
          <Input
            id="position"
            value={employment.position}
            onChange={(e) => updateEmployment("position", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Employment Status</Label>
          <Input
            id="status"
            value={employment.status}
            onChange={(e) => updateEmployment("status", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="income">Monthly Gross Income</Label>
          <Input
            id="income"
            value={employment.income}
            onChange={(e) => updateEmployment("income", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Employment Type</Label>
          <Input
            id="type"
            value={employment.type}
            onChange={(e) => updateEmployment("type", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeAtJob">Time At Job</Label>
          <Input
            id="timeAtJob"
            value={employment.timeAtJob}
            onChange={(e) => updateEmployment("timeAtJob", e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}
