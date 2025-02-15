
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

type ContactPreferencesProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export function ContactPreferences({
  preferredContact,
  newsletter,
  updates,
  updateFields,
}: ContactPreferencesProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label>Preferred Contact Method</Label>
        <RadioGroup
          value={preferredContact}
          onValueChange={(value) => updateFields({ preferredContact: value })}
          className="space-y-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone" />
            <Label htmlFor="phone">Phone</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="both" id="both" />
            <Label htmlFor="both">Both</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Label>Communication Preferences</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={newsletter}
              onCheckedChange={(checked) =>
                updateFields({ newsletter: checked as boolean })
              }
            />
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="updates"
              checked={updates}
              onCheckedChange={(checked) =>
                updateFields({ updates: checked as boolean })
              }
            />
            <Label htmlFor="updates">Receive product updates</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
