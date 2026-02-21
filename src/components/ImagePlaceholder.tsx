const ratioToPadding = (width: number, height: number) =>
  `${(height / width) * 100}%`;

export type ImagePlaceholderProps = {
  label: string;
  width?: number;
  height?: number;
  className?: string;
};

export function ImagePlaceholder({
  label,
  width = 16,
  height = 9,
  className
}: ImagePlaceholderProps) {
  return (
    <div
      className={[
        "w-full overflow-hidden rounded border border-slate-200 bg-slate-100 text-slate-500",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="relative w-full" style={{ paddingTop: ratioToPadding(width, height) }}>
        <div className="absolute inset-0 flex items-center justify-center text-center text-xs font-semibold uppercase tracking-[0.2em]">
          {label}
        </div>
      </div>
    </div>
  );
}
