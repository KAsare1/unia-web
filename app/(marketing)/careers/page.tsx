import React from "react";

export default function Careers() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 font-sans text-[15px] text-neutral-700">
      <h1 className="text-3xl font-bold mb-4 text-black">Careers at UNIA</h1>
      <p className="mb-6 text-sm text-neutral-500">Last updated: August 26, 2025</p>
      <section className="mb-8">
        <p className="mb-4">
          Join our mission to empower student entrepreneurs and build the future of campus commerce. We’re always looking for passionate, creative, and driven people to join our team.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Open Intern Positions</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Frontend Developer Intern</li>
          <li>Backend Developer Intern</li>
          <li>Mobile Application Developer Intern</li>
          <li>DevOps Intern</li>
          <li>UI/UX Designer Intern</li>
          <li>Marketing & Community Manager Intern</li>
          <li>Campus Ambassador Intern (multiple universities)</li>
          <li>Mobile Application Security Testing Intern</li>
        </ul>
        <p className="mt-4 text-sm text-neutral-600">Don’t see your role? We welcome general intern applications from talented individuals.</p>
        <p className="mt-2 text-xs text-neutral-500">UNIA is a language agnostic company. We value skills and problem-solving over specific programming languages or frameworks.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">How to Apply</h2>
        <p className="mb-4">
          Email your resume and a short cover letter to {" "}
          <a href="mailto:unia.affordables@gmail.com" className="text-blue-600 underline">careers@unia.com</a>.
          Please include the position you’re applying for in the subject line.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-3 text-black">Why Work With Us?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Remote-friendly and flexible work environment</li>
          <li>Mission-driven, fast-growing startup</li>
          <li>Opportunities for growth and leadership</li>
          <li>Collaborative, supportive team culture</li>
          <li>Make a real impact on student communities</li>
        </ul>
      </section>
    </div>
  );
}
