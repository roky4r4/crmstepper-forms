
import { FormData } from "../MultiStepForm";

type ConfirmationProps = {
  formData: FormData;
};

export function Confirmation({ formData }: ConfirmationProps) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium">Please review your information</h3>
        <p className="text-sm text-muted-foreground">
          Make sure everything is correct before submitting
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium mb-2">Personal Information</h4>
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">Name:</span>{" "}
              {formData.firstName} {formData.lastName}
            </p>
            <p>
              <span className="text-muted-foreground">Email:</span>{" "}
              {formData.email}
            </p>
            <p>
              <span className="text-muted-foreground">Phone:</span>{" "}
              {formData.phone}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Business Information</h4>
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">Company:</span>{" "}
              {formData.companyName}
            </p>
            <p>
              <span className="text-muted-foreground">Industry:</span>{" "}
              {formData.industry}
            </p>
            <p>
              <span className="text-muted-foreground">Size:</span> {formData.size}
            </p>
            <p>
              <span className="text-muted-foreground">Website:</span>{" "}
              {formData.website}
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <h4 className="font-medium mb-2">Contact Preferences</h4>
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">
                Preferred Contact Method:
              </span>{" "}
              {formData.preferredContact}
            </p>
            <p>
              <span className="text-muted-foreground">Newsletter:</span>{" "}
              {formData.newsletter ? "Yes" : "No"}
            </p>
            <p>
              <span className="text-muted-foreground">Product Updates:</span>{" "}
              {formData.updates ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
