import { getContent } from "@/content";
import type { Locale } from "@/lib/locale";

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-[var(--vp-text)] md:text-4xl">
            {content.contact.title}
          </h1>
          <p className="mt-4 text-base text-[var(--vp-muted)]">{content.contact.lead}</p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-card)] p-6">
            <div className="grid gap-4">
              <label className="text-sm font-medium text-[var(--vp-muted)]">
                {content.contact.form.name}
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-lg border border-[var(--vp-border)] px-3 py-2 text-sm"
                  placeholder={content.contact.form.name}
                />
              </label>
              <label className="text-sm font-medium text-[var(--vp-muted)]">
                {content.contact.form.email}
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-lg border border-[var(--vp-border)] px-3 py-2 text-sm"
                  placeholder={content.contact.form.email}
                />
              </label>
              <label className="text-sm font-medium text-[var(--vp-muted)]">
                {content.contact.form.message}
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-[var(--vp-border)] px-3 py-2 text-sm"
                  placeholder={content.contact.form.message}
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-[var(--vp-text)] px-6 py-3 text-sm font-semibold text-white"
              >
                {content.contact.form.submit}
              </button>
            </div>
          </form>
          <div className="rounded-[var(--vp-radius)] border border-[var(--vp-border)] bg-[var(--vp-bg-muted)] p-6">
            <h2 className="text-lg font-semibold text-[var(--vp-text)]">
              {content.contact.detailsTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[var(--vp-muted)]">
              <li>{content.footer.contactDetails.email}</li>
              <li>{content.footer.contactDetails.phone}</li>
              <li>{content.footer.contactDetails.address}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
