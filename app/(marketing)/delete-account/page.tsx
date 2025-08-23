import React from "react";

export default function DeleteAccount() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 font-sans text-[15px] text-neutral-700">
      <h1 className="text-3xl font-bold mb-4 text-black">Delete Your UNIA Account</h1>
      <p className="mb-6 text-sm text-neutral-500">
        Last updated: August 17, 2025
      </p>

      <section className="mb-8">
        <p className="mb-4">
          You have full control over your personal data. If you wish to delete
          your UNIA account and associated data, follow the instructions below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Steps to Delete Your Account</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Open the UNIA mobile app.</li>
          <li>Go to <span className="font-semibold">Settings → Account</span>.</li>
          <li>Tap <span className="font-semibold">Delete My Account</span> and confirm.</li>
          <li>You’ll receive a confirmation email. Click the link to finalize deletion.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">What Happens When You Delete Your Account</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>All profile details, marketplace listings, and messages are permanently deleted.</li>
          <li>Student verification documents are removed within 30 days.</li>
          <li>Transaction records are retained for 7 years to meet legal and accounting requirements.</li>
          <li>Your email and login credentials are permanently removed from our system.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Alternative Request Method</h2>
        <p className="mb-4">
          If you cannot access your account, you can request deletion by emailing
          us at{" "}
          <a href="mailto:privacy.unia@gmail.com" className="text-blue-600 underline">
            privacy.unia@gmail.com
          </a>{" "}
          with the subject line <span className="font-semibold">"Delete My Account"</span>.
          We will verify your identity and process the deletion within 30 days.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3 text-black">Support</h2>
        <p>
          Need help? Contact{" "}
          <a href="mailto:support@unia.com" className="text-blue-600 underline">
            support@unia.com
          </a>.
        </p>
      </section>
    </div>
  );
}
