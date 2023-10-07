type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface SelectProps {
  list: SelectOption[];
  defaultLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ list, onChange, defaultLabel = '선택하세요' }: SelectProps) => {
  return (
    <select onChange={onChange}>
      <option value="">{defaultLabel}</option>
      {list.map((option) => (
        <option key={option.value} disabled={option.disabled} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
