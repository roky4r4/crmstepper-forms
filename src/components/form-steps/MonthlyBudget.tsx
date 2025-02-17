
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type MonthlyBudgetProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const budgetOptions = [
  { value: "under250", label: "Under $250/month" },
  { value: "251-375", label: "$251-$375/month" },
  { value: "376-500", label: "$376-$500/month" },
  { value: "500plus", label: "$500+/month" },
];

export function MonthlyBudget({ monthlyBudget, updateFields }: MonthlyBudgetProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">What is your monthly budget?</h3>
        <p className="text-sm text-muted-foreground">
          Select your preferred monthly payment range
        </p>
      </div>

      <RadioGroup
        value={monthlyBudget}
        onValueChange={(value) => updateFields({ monthlyBudget: value })}
        className="grid grid-cols-2 gap-4 pt-4"
      >
        {budgetOptions.map(({ value, label }) => (
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
