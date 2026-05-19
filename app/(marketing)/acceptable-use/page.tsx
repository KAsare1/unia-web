import { PolicyDocumentPage } from "@/components/policy-document";
import { policyDocumentMap } from "@/lib/policy-documents";

export default function AcceptableUsePage() {
  return <PolicyDocumentPage document={policyDocumentMap["acceptable-use"]} />;
}
