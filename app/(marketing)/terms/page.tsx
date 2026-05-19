import { PolicyDocumentPage } from "@/components/policy-document";
import { policyDocumentMap } from "@/lib/policy-documents";

export default function TermsPage() {
  return <PolicyDocumentPage document={policyDocumentMap.terms} />;
}
