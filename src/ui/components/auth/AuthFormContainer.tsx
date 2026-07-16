export default function AuthFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full h-dvh grid place-items-center px-8">
      <section className="w-fluid-width-xs text-foreground bg-background rounded-lg outline-5 px-5 py-7 flex flex-col gap-4">
        {children}
      </section>
    </main>
  );
}
