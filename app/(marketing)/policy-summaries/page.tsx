import { PolicyDocumentPage } from "@/components/policy-document";
import { policyDocumentMap } from "@/lib/policy-documents";

export default function PolicySummariesPage() {
  return (
    <PolicyDocumentPage document={policyDocumentMap["policy-summaries"]} />
  );
}
