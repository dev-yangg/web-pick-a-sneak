interface Props {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

export default function InputField({ id, name, type, label }: Props) {
  return (
    <fieldset className="flex flex-col relative isolate outline outline-foreground-muted rounded-sm has-[input:not(:placeholder-shown)]:outline-foreground">
      <input
        autoComplete="off"
        type={type}
        id={id}
        name={name}
        className="pt-3 pb-2 px-2 peer z-20"
        placeholder=" "
      />
      <label
        className="px-1 capitalize absolute top-1/2 text-foreground-muted bg-background -translate-y-1/2 transition-transform duration-150 ease-cubic left-1 peer-not-placeholder-shown:-translate-y-[calc(100%+0.5rem)] peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:-translate-x-1 peer-not-placeholder-shown:text-foreground pointer-events-none z-10"
        htmlFor={id}>
        {label}
      </label>
    </fieldset>
  );
}
