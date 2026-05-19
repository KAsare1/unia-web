import Link from "next/link";
import { policyDocuments } from "@/lib/policy-documents";

export default function PoliciesPage() {
  return (
    <div className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            UNIA Legal Center
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-black">
            Policies and legal documents
          </h1>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {policyDocuments.map((policy) => (
            <Link
              key={policy.slug}
              href={policy.href}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/60"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                {policy.shortTitle}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-black">
                {policy.title}
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-neutral-700">
                {policy.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-sm text-neutral-500">
                <span>Updated {policy.lastUpdated}</span>
                <span className="font-medium text-blue-700 transition group-hover:text-blue-800">
                  Read document
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
