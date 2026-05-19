import Link from "next/link";
import { policyDocuments, type PolicyDocument } from "@/lib/policy-documents";

type PolicyDocumentProps = {
  document: PolicyDocument;
};

export function PolicyDocumentPage({ document }: PolicyDocumentProps) {
  const relatedDocuments = policyDocuments.filter(
    (policy) => policy.slug !== document.slug,
  );

  return (
    <div className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            UNIA Legal
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-black">
            {document.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-700">
            {document.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-neutral-600">
            <span className="rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
              Effective: {document.effectiveDate}
            </span>
            <span className="rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
              Last updated: {document.lastUpdated}
            </span>
            <span className="rounded-full bg-white px-4 py-2 ring-1 ring-black/5">
              Audience: {document.audience}
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_2.2fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Key Points
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700">
                {document.keyPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">
                More Policies
              </h2>
              <div className="mt-4 space-y-3">
                <Link
                  href="/policies"
                  className="block rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-800 transition hover:bg-blue-100"
                >
                  View all legal documents
                </Link>
                {relatedDocuments.map((policy) => (
                  <Link
                    key={policy.slug}
                    href={policy.href}
                    className="block rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700 transition hover:border-blue-200 hover:bg-neutral-50 hover:text-black"
                  >
                    {policy.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            {document.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <h2 className="text-2xl font-bold text-black">{section.title}</h2>
                {section.intro ? (
                  <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                    {section.intro}
                  </p>
                ) : null}
                {section.bullets?.length ? (
                  <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-7 text-neutral-700 marker:text-blue-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

          </main>
        </div>
      </div>
    </div>
  );
}
