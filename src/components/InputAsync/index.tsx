import AsyncSelect from "react-select/async";

interface Props {
  label: string;
  placeholder?: string;
  promiseOptions(inputValue: string): Promise<any>;
  onChange?(value: any): void;
  value: {
    label: string;
    value: string;
  }[];
}

export function InputAsync({
  label,
  placeholder,
  onChange,
  promiseOptions,
  value,
}: Props) {
  return (
    <div>
      <label>{label}</label>
      <AsyncSelect
        placeholder={placeholder}
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        onChange={onChange}
        value={value}
        isMulti
      />
    </div>
  );
}
