
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type EmploymentStatusProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const statusOptions = [
  { value: "employed", label: "Employed" },
  { value: "self-employed", label: "Self Employed" },
  { value: "retired", label: "Retired" },
  { value: "disability", label: "Disability" },
  { value: "other", label: "Other" },
  { value: "unemployed", label: "Unemployed" },
];

export function EmploymentStatus({ employmentStatus, updateFields }: EmploymentStatusProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">What is your employment status?</h3>
        <p className="text-sm text-muted-foreground">
          Select your current employment situation
        </p>
      </div>

      <RadioGroup
        value={employmentStatus}
        onValueChange={(value) => updateFields({ employmentStatus: value })}
        className="grid grid-cols-2 gap-4 pt-4"
      >
        {statusOptions.map(({ value, label }) => (
          <div key={value} className="relative">
            <RadioGroupItem
              value={value}
              id={value}
              className="peer sr-only"
            />
            <Label
              htmlFor={value}
              className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
