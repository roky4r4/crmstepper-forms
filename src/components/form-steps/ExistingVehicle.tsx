
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type ExistingVehicleProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const vehicleOptions = [
  { value: "no", label: "No" },
  { value: "trade", label: "Yes, I want to trade" },
  { value: "keep", label: "Yes, But I want to keep it" },
];

export function ExistingVehicle({ existingVehicle, updateFields }: ExistingVehicleProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Do you have an existing vehicle?</h3>
        <p className="text-sm text-muted-foreground">
          Let us know about your current vehicle situation
        </p>
      </div>

      <RadioGroup
        value={existingVehicle}
        onValueChange={(value) => updateFields({ existingVehicle: value })}
        className="grid grid-cols-1 gap-4 pt-4"
      >
        {vehicleOptions.map(({ value, label }) => (
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
