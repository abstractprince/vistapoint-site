import { getContent } from "@/content";
import type { Locale } from "@/lib/locale";

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const content = getContent(params.locale);

  return (
    <section className="section-spacing">
      <div className="container-base">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {content.contact.title}
          </h1>
          <p className="mt-4 text-base text-slate-600">{content.contact.lead}</p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid gap-4">
              <label className="text-sm font-medium text-slate-700">
                {content.contact.form.name}
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder={content.contact.form.name}
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                {content.contact.form.email}
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder={content.contact.form.email}
                />
              </label>
              <label className="text-sm font-medium text-slate-700">
                {content.contact.form.message}
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder={content.contact.form.message}
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-[var(--vp-blue)] px-6 py-3 text-sm font-semibold text-white"
              >
                {content.contact.form.submit}
              </button>
            </div>
          </form>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              {content.contact.detailsTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
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
