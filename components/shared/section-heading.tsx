type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, description, action }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-3 font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-headline text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-muted">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
