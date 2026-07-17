import InputField from "./InputField";
import { ArrowRight } from "lucide-react";

interface Field {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
}

interface Props {
  fields: Field[];
  isLoggingIn?: boolean;
}

export default function AuthForm({ fields, isLoggingIn = true }: Props) {
  return (
    <form action="" className="flex flex-col gap-3 mt-2">
      {fields.map((input) => (
        <InputField
          key={input.label}
          type={input.type}
          id={input.label}
          name={input.name}
          label={input.label}
          placeholder={input.placeholder}
        />
      ))}

      {isLoggingIn && (
        <a
          href="/forgot-password"
          className="uppercase text-small underline font-semibold mt-2 self-end">
          Forgot password?
        </a>
      )}

      <button
        type="submit"
        className="uppercase bg-foreground text-background rounded-sm px-3 py-2 mt-2 flex items-center group">
        <span className="inline-block grow translate-x-2">
          {isLoggingIn ? "log in" : "sign up"}
        </span>
        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300 ease-cubic">
          <ArrowRight />
        </span>
      </button>
    </form>
  );
}
