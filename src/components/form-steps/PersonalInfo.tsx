
import { FormData } from "../MultiStepForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type PersonalInfoProps = FormData & {
  updateFields: (fields: Partial<FormData>) => void;
};

export function PersonalInfo({
  firstName,
  lastName,
  email,
  phone,
  updateFields,
}: PersonalInfoProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
    </div>
  );
}
