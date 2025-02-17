
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type IncomeLengthProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const lengthOptions = [
  { value: "under3", label: "Less Than 3 Months" },
  { value: "3-6", label: "3 - 6 Months" },
  { value: "6-12", label: "6 - 12 Months" },
  { value: "12-24", label: "12 Months - 2 Years" },
  { value: "over24", label: "2 Years +" },
];

export function IncomeLength({ incomeLength, updateFields }: IncomeLengthProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">How long have you been earning this income?</h3>
        <p className="text-sm text-muted-foreground">
          Select the duration of your current income level
        </p>
      </div>

      <RadioGroup
        value={incomeLength}
        onValueChange={(value) => updateFields({ incomeLength: value })}
        className="grid grid-cols-1 gap-4 pt-4"
      >
        {lengthOptions.map(({ value, label }) => (
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
