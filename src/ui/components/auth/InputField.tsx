interface Props {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

export default function InputField({
  id,
  name,
  type,
  label,
  placeholder,
}: Props) {
  return (
    <fieldset className="flex flex-col">
      <label className="capitalize self-start" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="outline outline-foreground-muted px-1 py-1.5 rounded-sm"
        placeholder={placeholder}
      />
    </fieldset>
  );
}
