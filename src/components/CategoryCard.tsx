import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { ReactNode } from "react";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  imageLabel: string;
  footer?: ReactNode;
};

export function CategoryCard({
  title,
  description,
  href,
  imageLabel,
  footer
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[var(--vp-blue)]"
    >
      <ImagePlaceholder label={imageLabel} width={4} height={3} className="rounded-xl" />
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-[var(--vp-text)]">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        {footer ? <div className="mt-4 text-sm text-[var(--vp-blue)]">{footer}</div> : null}
      </div>
    </Link>
  );
}
