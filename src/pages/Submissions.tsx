
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";

type Submission = {
  id: string;
  vehicleType: string;
  monthlyBudget: string;
  existingVehicle: string;
  employmentStatus: string;
  monthlyIncome: string;
  incomeLength: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: string;
  status: "new" | "contacted" | "qualified" | "closed";
  zeroDown: boolean;
  employment: {
    employer: string;
    position: string;
    status: string;
    income: string;
    type: string;
    timeAtJob: string;
  };
};

const mockSubmissions: Submission[] = [
  {
    id: "1",
    vehicleType: "car",
    monthlyBudget: "251-375",
    existingVehicle: "no",
    employmentStatus: "employed",
    monthlyIncome: "3000-4500",
    incomeLength: "12-24",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "555-0123",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    status: "new",
    zeroDown: true,
    employment: {
      employer: "Tech Corp",
      position: "Developer",
      status: "Full-time",
      income: "4000",
      type: "Permanent",
      timeAtJob: "2 years",
    },
  },
  {
    id: "2",
    vehicleType: "truck",
    monthlyBudget: "500plus",
    existingVehicle: "trade",
    employmentStatus: "self-employed",
    monthlyIncome: "4500plus",
    incomeLength: "over24",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    phone: "555-0124",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: "contacted",
    zeroDown: false,
    employment: {
      employer: "Self",
      position: "Business Owner",
      status: "Self-employed",
      income: "6000",
      type: "Business Owner",
      timeAtJob: "5 years",
    },
  },
];

const formatBudget = (budget: string) => {
  switch (budget) {
    case "under250":
      return "Under $250/month";
    case "251-375":
      return "$251-$375/month";
    case "376-500":
      return "$376-$500/month";
    case "500plus":
      return "$500+/month";
    default:
      return "";
  }
};

const getStatusColor = (status: Submission["status"]) => {
  switch (status) {
    case "new":
      return "bg-blue-500";
    case "contacted":
      return "bg-yellow-500";
    case "qualified":
      return "bg-green-500";
    case "closed":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

export default function Submissions() {
  const [submissions] = useState<Submission[]>(mockSubmissions);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Form Submissions</h1>
          <div className="space-x-2">
            <Badge variant="secondary">{submissions.length} Total</Badge>
            <Badge variant="secondary">
              {submissions.filter((s) => s.status === "new").length} New
            </Badge>
          </div>
        </div>

        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Vehicle Info</TableHead>
                <TableHead>Financial Info</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Employment Details</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">
                        {submission.firstName} {submission.lastName}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Type:</span>{" "}
                        <span className="capitalize">{submission.vehicleType}</span>
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Existing Vehicle:</span>{" "}
                        <span className="capitalize">
                          {submission.existingVehicle}
                        </span>
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Zero Down:</span>{" "}
                        {submission.zeroDown ? "Yes" : "No"}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Budget:</span>{" "}
                        {formatBudget(submission.monthlyBudget)}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Monthly Income:</span>{" "}
                        {submission.monthlyIncome}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Income Length:</span>{" "}
                        {submission.incomeLength}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm">{submission.email}</p>
                      <p className="text-sm text-muted-foreground">
                        {submission.phone}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Employer:</span>{" "}
                        {submission.employment.employer}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Position:</span>{" "}
                        {submission.employment.position}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Type:</span>{" "}
                        {submission.employment.type}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Time at Job:</span>{" "}
                        {submission.employment.timeAtJob}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getStatusColor(submission.status)}`}
                      variant="secondary"
                    >
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDistance(new Date(submission.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
