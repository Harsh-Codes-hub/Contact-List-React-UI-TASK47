const Input = ({
  inputType,
  inputName,
  inputPlaceHolder,
  maxLength,
  minLength,
  required,
  onChange,
  value,
}) => {
  return (
    <label htmlFor={inputName} className="w-full">
      <input
        className="text-md w-full px-2 py-1 text-xl border border-slate-800 rounded-md text-white placeholder:text-slate-400"
        type={inputType}
        name={inputName}
        id={inputName}
        placeholder={inputPlaceHolder}
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default Input;
