import { PolicyDocumentPage } from "@/components/policy-document";
import { policyDocumentMap } from "@/lib/policy-documents";

export default function RefundDisputePolicyPage() {
  return (
    <PolicyDocumentPage
      document={policyDocumentMap["refund-dispute-policy"]}
    />
  );
}
