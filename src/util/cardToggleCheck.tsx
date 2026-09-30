// checker for our checkboxes on our cards
export const cardToggleCheck = (isChecked: boolean, setIsChecked: (value: boolean) => void) => {
  const doneValue = !isChecked;
  setIsChecked(doneValue);
};
