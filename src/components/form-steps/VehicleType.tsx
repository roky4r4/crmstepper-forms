
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Car, Truck, Bike } from "lucide-react";

type VehicleTypeProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

const vehicleOptions = [
  { value: "car", label: "Car", icon: Car },
  { value: "truck", label: "Truck", icon: Truck },
  { value: "suv", label: "SUV", icon: Car },
  { value: "van", label: "Van", icon: Car },
  { value: "rv", label: "RV", icon: Truck },
  { value: "atv", label: "ATV", icon: Bike },
  { value: "bike", label: "Bikes", icon: Bike },
  { value: "snowmobile", label: "Snowmobile", icon: Bike },
];

export function VehicleType({ vehicleType, updateFields }: VehicleTypeProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">What kind of vehicle are you looking for?</h3>
        <p className="text-sm text-muted-foreground">
          Select the type of vehicle you're interested in
        </p>
      </div>

      <RadioGroup
        value={vehicleType}
        onValueChange={(value) => updateFields({ vehicleType: value })}
        className="grid grid-cols-2 gap-4 pt-4"
      >
        {vehicleOptions.map(({ value, label, icon: Icon }) => (
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
              <Icon className="mb-3 h-6 w-6" />
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
