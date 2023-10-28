import { Hidden } from '@layout/mixins';
import { useId } from 'react';

type SelectOptions = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  list: SelectOptions[];
  defaultLabel?: string;
  defaultValue?: string;
}

export const Select = ({
  list,
  onChange,
  defaultValue = '선택하세요',
  defaultLabel = '',
  id,
  ...restProps
}: SelectProps) => {
  const temporaryId = useId();
  const selectId = id ?? temporaryId;
  return (
    <>
      <Hidden>
        <label htmlFor={selectId}>{defaultLabel}</label>
      </Hidden>
      <select id={selectId} onChange={onChange} {...restProps}>
        <option value="">{defaultValue}</option>
        {list.map((option) => (
          <option key={option.value} disabled={option.disabled ?? false} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};
