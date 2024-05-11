export const getOrganizerHeadline = ({
  selectionMax,
  selectionMin,
  nameOfOptions,
}: {
  selectionMax?: number;
  selectionMin?: number;
  nameOfOptions: string;
}) => {
  if (selectionMax !== undefined && selectionMin !== undefined) {
    if (selectionMax < selectionMin) {
      return "Incorrect min and max values";
    }
    if (selectionMax === selectionMin) {
      return `Select exactly ${selectionMax} ${nameOfOptions}`;
    }
    return `Select between ${selectionMin} and ${selectionMax} ${nameOfOptions}`;
  }
  if (selectionMax) {
    return `Select up to ${selectionMax} ${nameOfOptions}`;
  }
  if (selectionMin) {
    return `Select at least ${selectionMin} ${nameOfOptions}`;
  }

  return `Select some ${nameOfOptions}`;
};
