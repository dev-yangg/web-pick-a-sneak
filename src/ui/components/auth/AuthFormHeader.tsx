interface Props {
  headline?: string;
  subheadline?: string;
}
export default function AuthFormHeader({ headline, subheadline }: Props) {
  return (
    <header>
      <hgroup>
        <h3 className="font-bold capitalize leading-none mb-2">{headline}</h3>
        <p className="text-balance text-foreground/55 leading-tight">
          {subheadline}
        </p>
      </hgroup>
    </header>
  );
}
