import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function GalleryGrid({ label }: { label: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <ImagePlaceholder
          key={index}
          label={label}
          width={1}
          height={1}
          className="rounded-xl"
        />
      ))}
    </div>
  );
}
