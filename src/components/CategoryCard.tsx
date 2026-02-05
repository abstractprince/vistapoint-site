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
      className="group flex h-full flex-col rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-5 transition hover:border-[var(--vp-text)]"
    >
      <ImagePlaceholder label={imageLabel} width={4} height={3} className="rounded-[var(--vp-radius)]" />
      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold text-[var(--vp-text)]">{title}</h3>
        <p className="mt-2 text-sm text-[var(--vp-muted)]">{description}</p>
        {footer ? <div className="mt-4 text-sm text-[var(--vp-text)]">{footer}</div> : null}
      </div>
    </Link>
  );
}
