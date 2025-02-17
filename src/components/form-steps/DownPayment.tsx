
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type DownPaymentProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export function DownPayment({ zeroDown, updateFields }: DownPaymentProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Are you looking for $0 DOWN options?</h3>
        <p className="text-sm text-muted-foreground">
          Select whether you're interested in zero down payment options
        </p>
      </div>

      <RadioGroup
        value={zeroDown ? "yes" : "no"}
        onValueChange={(value) => updateFields({ zeroDown: value === "yes" })}
        className="grid grid-cols-2 gap-4 pt-4"
      >
        <div className="relative">
          <RadioGroupItem
            value="yes"
            id="yes"
            className="peer sr-only"
          />
          <Label
            htmlFor="yes"
            className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            Yes
          </Label>
        </div>
        <div className="relative">
          <RadioGroupItem
            value="no"
            id="no"
            className="peer sr-only"
          />
          <Label
            htmlFor="no"
            className="flex flex-col items-center justify-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            No
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
