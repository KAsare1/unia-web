import { PolicyDocumentPage } from "@/components/policy-document";
import { policyDocumentMap } from "@/lib/policy-documents";

export default function SellerPolicyPage() {
  return <PolicyDocumentPage document={policyDocumentMap["seller-policy"]} />;
}
