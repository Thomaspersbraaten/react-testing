import { FormSelect } from "react-bootstrap";

const statuses = [
  {
    label: "publish",
    value: "publish",
  },
  {
    label: "future",
    value: "future",
  },
  {
    label: "draft",
    value: "draft",
  },
  {
    label: "pending",
    value: "pending",
  },
  {
    label: "private",
    value: "private",
  },
];

export function StatusDropdown() {
  return (
    <FormSelect>
      <option value="">Select value</option>
      {statuses.map((status) => (
        <option key={status.value} value={status.value}>
          {status.label}
        </option>
      ))}
      ;
    </FormSelect>
  );
}
