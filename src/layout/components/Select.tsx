import { Hidden } from '@layout/mixins';
import { useId } from 'react';

type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface SelectProps {
  list: SelectOption[];
  defaultLabel?: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ list, onChange, defaultLabel = '선택하세요', id }: SelectProps) => {
  const temporaryId = useId();
  const selectId = id ?? temporaryId;
  return (
    <>
      <Hidden>
        <label htmlFor={selectId}>선택하세요</label>
      </Hidden>
      <select id={selectId} onChange={onChange}>
        <option value="">{defaultLabel}</option>
        {list.map((option) => (
          <option key={option.value} disabled={option.disabled} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
