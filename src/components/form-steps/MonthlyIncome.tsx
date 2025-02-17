
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type MonthlyIncomeProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const incomeOptions = [
  { value: "1800-2200", label: "$1,800 to $2,200" },
  { value: "2200-3000", label: "$2,200 to $3,000" },
  { value: "3000-4500", label: "$3,000 to $4,500" },
  { value: "4500plus", label: "Over $4,500" },
  { value: "under1800", label: "Under $1,800" },
];

export function MonthlyIncome({ monthlyIncome, updateFields }: MonthlyIncomeProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">What is your current monthly gross income?</h3>
        <p className="text-sm text-muted-foreground">
          Select your monthly income range before taxes
        </p>
      </div>

      <RadioGroup
        value={monthlyIncome}
        onValueChange={(value) => updateFields({ monthlyIncome: value })}
        className="grid grid-cols-1 gap-4 pt-4"
      >
        {incomeOptions.map(({ value, label }) => (
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
