export type PolicySection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PolicyDocument = {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  effectiveDate: string;
  lastUpdated: string;
  description: string;
  audience: string;
  keyPoints: string[];
  sections: PolicySection[];
};

const sharedDefinitionsSection: PolicySection = {
  title: "SHARED DEFINITIONS",
  intro: "For consistency across UNIA's policies:",
  bullets: [
    '"UNIA", "we", "us", or "our" means the UNIA marketplace platform operated by UNIA, UNI AFFORDABLES.',
    '"Platform" means the UNIA mobile application, web application, website, marketplace, services, features, software, and related tools.',
    '"User" means any person who accesses, registers for, or uses the Platform.',
    '"Buyer" means a User who browses, orders, purchases, attempts to purchase, or receives Products through the Platform.',
    '"Seller" or "Vendor" means an approved third-party User who lists, offers, sells, or fulfils Products through the Platform. After this definition, these policies use "Seller" consistently.',
    '"Products" means goods or services listed, advertised, offered, sold, or fulfilled by Sellers through the Platform.',
    '"Policies" means the Terms of Service, Acceptable Use Policy, Seller Policy, Refund and Dispute Policy, Privacy Policy, and any other rules or notices published by UNIA.',
    '"Payment Provider" means a third-party payment processor, bank, mobile money operator, card network, or other financial intermediary used to process payments, settlements, reversals, refunds, or chargebacks.',
    '"Seller Verification Information" means information submitted or collected during seller onboarding, including student identification cards, national identification cards, references, contact details, seller profile details, and intended product categories.',
  ],
};

const policyHierarchySection: PolicySection = {
  title: "POLICY HIERARCHY",
  paragraphs: [
    "These Policies are intended to be read together. If there is an inconsistency between documents, the Terms of Service control for general use of the Platform, the Seller Policy controls for Seller onboarding and Seller obligations, the Acceptable Use Policy controls for prohibited conduct and prohibited Products, the Refund and Dispute Policy controls for refunds, disputes, chargebacks, and dispute handling, and the Privacy Policy controls for collection, use, disclosure, retention, and deletion of personal information.",
    "Nothing in any Policy limits rights that cannot legally be waived under applicable law.",
  ],
};

export const policyDocuments: PolicyDocument[] = [
  {
    slug: "terms",
    title: "Terms of Service",
    shortTitle: "Terms",
    href: "/terms",
    effectiveDate: "May 19, 2026",
    lastUpdated: "May 19, 2026",
    description:
      "These Terms of Service govern access to and use of the UNIA platform and explain the relationship between UNIA, buyers, sellers, and payment providers.",
    audience: "All users of the UNIA mobile and web application.",
    keyPoints: [
      "Using UNIA means you agree to the Terms of Service and the related marketplace policies.",
      "UNIA operates the platform infrastructure, but products are sold and fulfilled by third-party sellers.",
      "Payments, reversals, refunds, and chargebacks are handled through supported payment providers and applicable transaction flows.",
      "UNIA may make platform-level decisions on enforcement, access, and disputes while statutory rights remain preserved.",
    ],
    sections: [
      sharedDefinitionsSection,
      policyHierarchySection,
      {
        title: "1. INTRODUCTION",
        paragraphs: [
          'Welcome to UNIA. These Terms of Service ("Terms") govern your access to and use of the Platform.',
          "By creating an account, accessing the Platform, listing Products, purchasing Products, or otherwise using UNIA, you agree to be bound by these Terms and any Policies referenced in these Terms, including our Acceptable Use Policy, Seller Policy, Refund and Dispute Policy, and Privacy Policy.",
          "If you do not agree with these Terms, you must not access or use UNIA.",
        ],
      },
      {
        title: "2. ABOUT UNIA",
        paragraphs: [
          "UNIA is a campus-focused marketplace that enables university students, student entrepreneurs, campus-based Sellers, and members of supported university communities to list, discover, buy, and sell Products within or around their university community.",
          "UNIA provides technology infrastructure for product discovery, ordering, seller onboarding, communication, payment-provider integration, dispute support, and marketplace interaction. UNIA is not a fulfilment centre, warehouse, logistics provider, payment custodian, bank, escrow provider, money transmitter, or financial institution.",
          "Products are fulfilled directly by third-party Sellers to Buyers. Payments are processed through supported Payment Providers and, unless otherwise stated in a specific transaction flow, funds are settled directly to Sellers.",
        ],
      },
      {
        title: "3. LEGAL OPERATOR",
        paragraphs: [
          'UNIA is operated by UNIA, UNI AFFORDABLES, trading as "UNIA". The operator name used in these Terms should match the registered business name and the name used in payment-provider, tax, regulatory, and business registration records.',
        ],
      },
      {
        title: "4. ELIGIBILITY AND ACCOUNTS",
        paragraphs: [
          "To use UNIA, you must be legally capable of entering into a binding agreement, provide accurate account information, comply with these Terms and applicable laws, and use the Platform only for lawful purposes.",
          "You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.",
          "UNIA may suspend or terminate accounts that contain false information, impersonate another person, violate these Terms, or create security, fraud, or compliance risks.",
        ],
      },
      {
        title: "5. BUYER RESPONSIBILITIES",
        paragraphs: [
          "Buyers must review Product details before ordering, provide accurate contact and fulfilment information, pay only through supported payment channels, communicate respectfully with Sellers, collect or receive Products according to agreed arrangements, and raise disputes promptly with evidence.",
        ],
      },
      {
        title: "6. SELLER RESPONSIBILITIES",
        paragraphs: [
          "Sellers must comply with these Terms, the Acceptable Use Policy, and the Seller Policy. Sellers are responsible for accurate listings, lawful Products, order fulfilment, Buyer communication, product quality, product safety, and compliance with applicable laws, university rules, Payment Provider requirements, and UNIA marketplace standards.",
        ],
      },
      {
        title: "7. MARKETPLACE ROLE AND MERCHANT RESPONSIBILITY",
        paragraphs: [
          "UNIA operates as a marketplace platform. Sellers are independent third parties and are not employees, agents, partners, or representatives of UNIA.",
          "For marketplace transactions, the relevant Seller is responsible for the underlying sale, product listing, fulfilment, Buyer support, and product-related obligations. Unless otherwise stated in a specific transaction flow, the Seller is treated as the merchant responsible for the Product transaction. UNIA provides the technology platform and does not act as the seller of record, fulfilment provider, escrow provider, bank, payment custodian, or money transmitter.",
          "UNIA may facilitate communication, order management, payment-provider integration, and dispute support, but the sale contract for a Product is primarily between the Buyer and the Seller.",
        ],
      },
      {
        title: "8. PAYMENTS, SETTLEMENT, REFUNDS, REVERSALS, AND CHARGEBACKS",
        paragraphs: [
          "Payments on UNIA are processed through supported third-party Payment Providers. By making or receiving payments through the Platform, you agree to comply with the applicable Payment Provider's terms, rules, and requirements.",
          "UNIA does not hold Buyer funds as escrow and does not take custody of funds on behalf of Buyers or Sellers. Funds are processed through supported Payment Providers and, unless otherwise stated in a specific transaction flow, settled directly to Sellers through the applicable payment flow.",
          "Refunds may be initiated by the Seller or processed through the applicable Payment Provider, depending on the payment flow, provider rules, and transaction facts. UNIA may assist with dispute review and escalation but does not guarantee that every refund request will be approved.",
          "Chargebacks, reversals, and payment-provider disputes are subject to the rules of the relevant Payment Provider, bank, card network, mobile money operator, or other financial intermediary. Users must cooperate with evidence requests. UNIA may provide transaction records, order details, communications, listing information, and other relevant information to support a review.",
        ],
      },
      {
        title: "9. FULFILMENT",
        paragraphs: [
          "UNIA is not a fulfilment centre. Products are shipped, delivered, handed over, or made available for pickup directly by Sellers. The Seller and Buyer are responsible for agreeing on the fulfilment method, timing, location, and any applicable delivery or pickup arrangements.",
        ],
      },
      {
        title: "10. DISPUTES AND PLATFORM-LEVEL AUTHORITY",
        paragraphs: [
          "Returns, refunds, and disputes are handled in accordance with UNIA's Refund and Dispute Policy.",
          "UNIA may review disputes and make final platform-level decisions regarding account restrictions, Seller enforcement, listing removal, marketplace access, and platform support. However, UNIA does not act as a court, escrow provider, bank, payment custodian, or financial institution, and payment reversals, chargebacks, and refunds may depend on the relevant Seller, Payment Provider, bank, card network, mobile money operator, or applicable law.",
        ],
      },
      {
        title: "11. APPEAL RIGHTS AND STATUTORY RIGHTS",
        paragraphs: [
          "A User may request a review of a dispute decision or enforcement action by contacting UNIA support within seven days of being notified of the decision. The request must include the reason for appeal and any additional evidence. UNIA may accept, reject, or modify the original decision after review. UNIA's decision after appeal will be final for platform purposes.",
          "Nothing in these Terms removes, excludes, restricts, or limits any consumer, data protection, payment, statutory, regulatory, or other rights that cannot legally be waived under applicable law.",
        ],
      },
      {
        title: "12. EXAMPLES AND ENFORCEMENT STANDARDS",
        paragraphs: [
          '"Reasonable" means conduct, timing, evidence, or action that a fair marketplace operator would consider proportionate in the circumstances, taking into account user safety, transaction value, available evidence, payment-provider rules, and applicable law.',
          '"High-risk" includes conduct or Products that may involve fraud, identity misuse, prohibited goods, unsafe Products, illegal activity, repeated disputes, payment abuse, threats, harassment, counterfeit goods, stolen goods, or material harm to Users, UNIA, Payment Providers, universities, or the public.',
          "\"Materially different\" means a Product differs from the listing in a significant way, including wrong item, undisclosed damage, missing essential components, materially different quantity, counterfeit status, materially different condition, or a description that would likely have affected the Buyer's decision to purchase.",
        ],
      },
      {
        title: "13. PRIVACY AND DATA PROTECTION",
        paragraphs: [
          "UNIA collects and processes personal information in accordance with its Privacy Policy. Where Sellers submit student identification cards, national identification cards, references, or other Seller Verification Information, UNIA uses that information for seller onboarding, identity review, fraud prevention, platform safety, compliance, dispute handling, and marketplace integrity purposes.",
        ],
      },
      {
        title: "14. LIABILITY, DISCLAIMERS, AND INDEMNITY",
        paragraphs: [
          'UNIA provides the Platform on an "as is" and "as available" basis. To the fullest extent permitted by applicable law, UNIA does not guarantee the quality, legality, safety, availability, or suitability of Seller Products, the accuracy of user-generated content, uninterrupted platform operation, successful fulfilment of every order, or that every transaction is free from risk.',
          "To the fullest extent permitted by applicable law, UNIA's total liability for claims arising from or relating to the Platform will be limited to the greater of the amount of platform fees paid by the User to UNIA in the three months before the claim arose or GHS 1,000, unless applicable law requires otherwise.",
          "This liability cap does not apply to liability that cannot legally be excluded or limited under applicable law, including non-waivable consumer rights, data protection rights, fraud, wilful misconduct, or any other liability that applicable law does not permit UNIA to exclude or limit.",
          "Sellers agree to indemnify UNIA for claims, complaints, losses, chargebacks, penalties, regulatory issues, product safety issues, intellectual property claims, and Buyer disputes arising from their Products, listings, fulfilment, misrepresentations, or breach of UNIA Policies.",
        ],
      },
      {
        title: "15. UPDATES, GOVERNING LAW, AND CONTACT",
        paragraphs: [
          "UNIA may update these Terms from time to time. Continued use of UNIA after updated Terms become effective means you accept the updated Terms.",
          "These Terms are governed by the laws of Ghana. Contact: support@unia.business.",
        ],
      },
    ],
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    shortTitle: "Acceptable Use",
    href: "/acceptable-use",
    effectiveDate: "May 19, 2026",
    lastUpdated: "May 19, 2026",
    description:
      "This policy explains the rules users must follow when using UNIA and the conduct, listings, and behavior that are prohibited on the platform.",
    audience: "All buyers, sellers, and visitors using UNIA.",
    keyPoints: [
      "UNIA may only be used for lawful marketplace activity within supported campus communities.",
      "Illegal, unsafe, fraudulent, abusive, or high-risk conduct is prohibited.",
      "The platform restricts prohibited products, verification abuse, misleading content, harassment, and security attacks.",
      "UNIA may remove listings, reject seller applications, suspend accounts, or report misconduct where lawful and necessary.",
    ],
    sections: [
      sharedDefinitionsSection,
      policyHierarchySection,
      {
        title: "1. PURPOSE",
        paragraphs: [
          'This Acceptable Use Policy ("AUP") explains the rules Users must follow when using UNIA. It protects Buyers, Sellers, universities, Payment Providers, and the wider marketplace from unlawful, harmful, fraudulent, abusive, or high-risk activity.',
        ],
      },
      {
        title: "2. GENERAL ACCEPTABLE USE RULES",
        paragraphs: [
          "Users may use UNIA only for lawful marketplace activity connected to buying, selling, discovering, and coordinating Products or services within supported campus communities.",
          "Users must not use UNIA in a way that breaks the law, harms or exploits another person, misleads Buyers, Sellers, UNIA, Payment Providers, or universities, creates fraud or compliance risk, interferes with Platform security, or violates any UNIA Policy.",
        ],
      },
      {
        title: "3. PROHIBITED PRODUCTS AND SERVICES",
        paragraphs: [
          "Sellers must not list, advertise, sell, facilitate, or promote prohibited, illegal, unsafe, or restricted Products or services on UNIA.",
          "Prohibited Products and services include illegal drugs, controlled substances, weapons, firearms, ammunition, explosives, counterfeit goods, stolen goods, pirated goods, alcohol, tobacco, nicotine products, vapes, prescription medicines, unapproved medical products, unsafe supplements, adult sexual products, pornography, gambling, fraudulent financial schemes, stolen devices, hacked accounts, academic cheating services, exam leaks, fake certificates, forged documents, intellectual-property-infringing goods, hazardous chemicals, recalled Products, Products prohibited by university rules, and any Product or service considered unlawful, unsafe, restricted, or high-risk by UNIA, its Payment Providers, or applicable law.",
        ],
      },
      {
        title: "4. PROHIBITED SELLER CONDUCT",
        paragraphs: [
          "Sellers must not provide false identity, student, business, or contact information; submit fake, altered, stolen, or misleading identification documents; list Products they do not own or have authority to sell; misrepresent Product condition, price, origin, authenticity, availability, delivery time, or warranty; use stolen images or misleading photos; bypass platform controls; pressure Buyers into unsafe arrangements; repeatedly fail to fulfil orders; refuse reasonable cooperation during reviews; create multiple accounts to avoid enforcement; or use UNIA for fraud, money laundering, or unlawful activity.",
        ],
      },
      {
        title: "5. PROHIBITED BUYER CONDUCT",
        paragraphs: [
          "Buyers must not place fake or fraudulent orders, make false claims, abuse refunds or chargebacks, harass Sellers, attempt to obtain Products without payment, use unauthorised payment methods, manipulate ratings, or coordinate scams through the Platform.",
        ],
      },
      {
        title: "6. IDENTITY, KYC, AND VERIFICATION ABUSE",
        paragraphs: [
          "Users must not impersonate another person, create an account using another person's identity, upload forged or misleading identification documents, sell or share accounts without permission, evade onboarding or verification checks, or use another person's student ID, national ID, payment account, or contact information without authorisation.",
        ],
      },
      {
        title: "7. CONTENT, COMMUNICATION, AND SECURITY RULES",
        paragraphs: [
          "Users must not upload, post, send, or share illegal, fraudulent, misleading, abusive, threatening, harassing, defamatory, hateful, discriminatory, exploitative, sexually explicit, infringing, malicious, privacy-invasive, spammy, or harmful content.",
          "Users must not access or attempt to access accounts, systems, data, or areas of the Platform without authorisation; probe or attack Platform security; interfere with Platform availability; scrape or harvest data without permission; bypass controls; introduce malware; or use the Platform to compromise another service.",
        ],
      },
      {
        title: "8. ENFORCEMENT STANDARDS",
        paragraphs: [
          '"High-risk" conduct includes fraud, identity misuse, prohibited goods, unsafe Products, repeated disputes, payment abuse, threats, harassment, counterfeit goods, stolen goods, or conduct likely to harm Users, UNIA, Payment Providers, universities, or the public.',
          '"Reasonable cooperation" includes timely responses, truthful information, relevant evidence, order records, payment references, listing details, delivery or pickup proof, and any other information reasonably needed to review a report, dispute, or enforcement issue.',
        ],
      },
      {
        title: "9. ENFORCEMENT, APPEALS, AND STATUTORY RIGHTS",
        paragraphs: [
          "UNIA may issue warnings, remove content or listings, reject Seller applications, suspend or terminate accounts, restrict marketplace features, cancel or block transactions, report activity to Payment Providers, universities, regulators, law enforcement, or affected parties where lawful and necessary, retain relevant records, and take any other action necessary to protect the Platform and its Users.",
          "A User may request a review of an enforcement action by contacting UNIA support within seven days of being notified of the decision. The request must include the reason for appeal and any additional evidence. UNIA may accept, reject, or modify the original decision after review. UNIA's decision after appeal will be final for platform purposes.",
          "Nothing in this AUP removes, excludes, restricts, or limits any rights that cannot legally be waived under applicable law.",
        ],
      },
      {
        title: "10. REPORTING VIOLATIONS",
        paragraphs: [
          "Users should report suspected violations, including fraud, unsafe Products, prohibited listings, harassment, fake accounts, or suspicious activity, to support@unia.business.",
        ],
      },
    ],
  },
  {
    slug: "seller-policy",
    title: "Seller Policy",
    shortTitle: "Seller Policy",
    href: "/seller-policy",
    effectiveDate: "May 19, 2026",
    lastUpdated: "May 19, 2026",
    description:
      "This policy explains who can become a seller on UNIA, how seller verification works, and the standards sellers must meet when listing and fulfilling products.",
    audience: "Current sellers and anyone applying to sell on UNIA.",
    keyPoints: [
      "Seller onboarding may require identification documents, references, and profile details.",
      "UNIA manually reviews seller applications and may request more information before approval.",
      "Sellers are responsible for accurate listings, lawful products, timely fulfilment, and compliance with UNIA rules.",
      "UNIA may monitor seller activity and take warnings, suspensions, listing removals, or account termination action where necessary.",
    ],
    sections: [
      sharedDefinitionsSection,
      policyHierarchySection,
      {
        title: "1. PURPOSE",
        paragraphs: [
          "This Seller Policy explains the rules and requirements that apply to Sellers on UNIA. It ensures that Sellers are properly onboarded, Products are accurately listed, orders are fulfilled responsibly, and the marketplace remains safe and trustworthy for campus communities.",
        ],
      },
      {
        title: "2. WHO CAN BECOME A SELLER",
        paragraphs: [
          "UNIA may allow students, campus-based vendors, and approved members of supported university communities to apply to become Sellers. UNIA may approve, reject, suspend, or remove Sellers where necessary to protect Users, comply with applicable law, satisfy Payment Provider requirements, or maintain marketplace integrity.",
        ],
      },
      {
        title: "3. SELLER APPLICATION AND ONBOARDING",
        paragraphs: [
          "To become a Seller, applicants must complete UNIA's seller onboarding process. UNIA may request full name, contact details, campus or university affiliation, seller profile information, uploaded image of a student identification card or valid national identification card, references or supporting information, and details of the Products or services the Seller intends to list.",
          "Seller applications are manually reviewed by a human reviewer. UNIA verifies uploaded identification and references before accepting a Seller application. UNIA may request additional information before approving a Seller. Failure to provide requested information may result in rejection or suspension.",
        ],
      },
      {
        title: "4. SELLER VERIFICATION AND DUE DILIGENCE",
        paragraphs: [
          "UNIA performs onboarding checks to help confirm Seller identity, reduce fraud, and maintain marketplace safety. These checks may include reviewing the Seller application, checking uploaded identification documents, reviewing submitted references, reviewing Seller profile information, assessing intended Product categories, and checking for suspicious, inconsistent, incomplete, or misleading information.",
          "UNIA may reject, suspend, or remove Sellers who fail verification, provide false information, submit invalid documents, or present a fraud, safety, legal, compliance, or reputational risk. Seller verification does not mean UNIA guarantees the quality, legality, safety, authenticity, or availability of the Seller's Products.",
        ],
      },
      {
        title: "5. SELLER ACCOUNT RESPONSIBILITIES",
        paragraphs: [
          "Sellers must keep account information accurate, protect login credentials, use only their own identity and authorised payment details, respond to Buyers and UNIA promptly, comply with all UNIA Policies, comply with applicable laws and university rules, cooperate with reviews and investigations, and notify UNIA of unauthorised access or suspicious activity.",
        ],
      },
      {
        title: "6. PRODUCT LISTING REQUIREMENTS",
        paragraphs: [
          "Sellers are responsible for ensuring that every listing is accurate, lawful, complete, and not misleading. Listings should include a clear Product title, accurate description, truthful images, correct price, Product condition, availability status, delivery, pickup, or handover information, and any limitations, defects, or important Buyer-facing information.",
          "Sellers must not list Products prohibited under the Acceptable Use Policy.",
        ],
      },
      {
        title: "7. FULFILMENT AND BUYER SUPPORT",
        paragraphs: [
          "UNIA is not a fulfilment centre. Sellers are responsible for fulfilling orders directly to Buyers, confirming availability, preparing Products, communicating fulfilment details, delivering or handing over Products within agreed timeframes, packaging Products appropriately, avoiding unsafe arrangements, and informing Buyers promptly if an order cannot be fulfilled.",
        ],
      },
      {
        title: "8. PAYMENTS TO SELLERS",
        paragraphs: [
          "Payments are processed through supported Payment Providers. Funds are processed through supported Payment Providers and, unless otherwise stated in a specific transaction flow, settled directly to Sellers. UNIA does not act as a bank, escrow provider, deposit-taking institution, payment custodian, or money transmitter.",
          "Sellers must provide accurate payment information and comply with Payment Provider requirements. UNIA is not responsible for delays, reversals, restrictions, failed settlements, chargebacks, or payment holds caused by Payment Providers or financial intermediaries.",
        ],
      },
      {
        title: "9. SELLER LIABILITY AND INDEMNITY",
        paragraphs: [
          "Sellers are responsible for all claims, complaints, losses, chargebacks, penalties, regulatory issues, product safety issues, intellectual property claims, and Buyer disputes arising from their Products, listings, fulfilment, misrepresentations, or breach of UNIA Policies.",
          "Sellers must cooperate with dispute reviews and provide evidence where requested, including Product photos, communication records, delivery confirmation, pickup confirmation, or other relevant information.",
        ],
      },
      {
        title: "10. STANDARDS AND EXAMPLES",
        paragraphs: [
          '"Accurate listing" means the listing should not mislead a reasonable Buyer about Product identity, quantity, price, condition, authenticity, availability, defects, delivery method, or any important limitation.',
          '"Timely fulfilment" means fulfilment within the timeframe stated in the listing, agreed in messages, or otherwise communicated to the Buyer. If no timeframe is stated, the Seller should fulfil within a reasonable period based on the Product type, campus location, and agreed handover method.',
        ],
      },
      {
        title: "11. MONITORING, ENFORCEMENT, APPEALS, AND STATUTORY RIGHTS",
        paragraphs: [
          "UNIA may monitor Seller activity, listings, disputes, Buyer reports, fulfilment patterns, and compliance signals to maintain marketplace safety. UNIA may review Seller accounts at any time and may request updated information, additional verification, or supporting documents.",
          "If a Seller violates this Seller Policy, UNIA may issue a warning, remove or edit listings, reject Product listings, pause Seller activity, restrict account features, suspend or terminate the Seller account, block future Seller applications, report activity to Payment Providers, universities, regulators, or law enforcement where lawful and necessary, and take any other action necessary to protect Users and the Platform.",
          "A Seller may request a review of an enforcement action by contacting UNIA support within seven days of being notified of the decision. The request must include the reason for appeal and any additional evidence. UNIA may accept, reject, or modify the original decision after review. UNIA's decision after appeal will be final for platform purposes.",
          "Nothing in this Seller Policy removes, excludes, restricts, or limits any rights that cannot legally be waived under applicable law.",
        ],
      },
    ],
  },
  {
    slug: "refund-dispute-policy",
    title: "Refund and Dispute Policy",
    shortTitle: "Refunds & Disputes",
    href: "/refund-dispute-policy",
    effectiveDate: "May 19, 2026",
    lastUpdated: "May 19, 2026",
    description:
      "This policy explains how complaints, transaction disputes, refunds, and chargeback-related matters are handled on UNIA.",
    audience: "Buyers and sellers involved in orders, complaints, or dispute resolution.",
    keyPoints: [
      "UNIA is a marketplace platform and sellers remain primarily responsible for the products they list and fulfil.",
      "Refund outcomes depend on the transaction facts, the evidence available, seller conduct, payment-provider rules, and applicable law.",
      "UNIA may review evidence, request more information, contact sellers, and take platform-level enforcement action.",
      "Chargebacks and payment-provider disputes are governed by the relevant provider, bank, network, or operator rules.",
    ],
    sections: [
      sharedDefinitionsSection,
      policyHierarchySection,
      {
        title: "1. PURPOSE",
        paragraphs: [
          "This Refund and Dispute Policy explains how returns, refunds, complaints, and transaction disputes are handled on UNIA.",
          "UNIA is a marketplace platform. Products are sold and fulfilled directly by third-party Sellers. UNIA may provide tools and support to help Buyers and Sellers resolve issues, but the Seller is primarily responsible for the Products they list and fulfil.",
        ],
      },
      {
        title: "2. SCOPE",
        paragraphs: [
          "This policy applies to disputes involving non-delivery, failed pickup or handover, damaged Products, materially inaccurate Product descriptions, wrong items, missing items, counterfeit or prohibited Products, payment issues, refund requests, and Buyer-Seller complaints arising from transactions on UNIA.",
        ],
      },
      {
        title: "3. MARKETPLACE ROLE AND PAYMENT FLOW",
        paragraphs: [
          "UNIA is not a fulfilment centre, warehouse, logistics provider, escrow provider, bank, payment custodian, or money transmitter.",
          "Products are fulfilled directly by Sellers to Buyers. Funds are processed through supported Payment Providers and, unless otherwise stated in a specific transaction flow, settled directly to Sellers.",
          "UNIA may assist with dispute review, communication, evidence collection, Seller enforcement, and escalation to Payment Providers where appropriate.",
        ],
      },
      {
        title: "4. BUYER AND SELLER RESPONSIBILITIES",
        paragraphs: [
          "Buyers are responsible for reviewing Product descriptions, providing accurate fulfilment information, being available for agreed delivery or pickup, inspecting Products promptly where practical, reporting issues within a reasonable time, providing evidence, and communicating respectfully.",
          "Sellers are responsible for accurately describing Products, providing truthful images and information, fulfilling confirmed orders, resolving legitimate Buyer complaints, complying with applicable refund obligations, cooperating with UNIA during dispute reviews, and providing evidence where requested.",
        ],
      },
      {
        title: "5. REFUND ELIGIBILITY",
        paragraphs: [
          "A Buyer may be eligible for a refund, replacement, or other resolution where the Buyer paid for an item but did not receive it, the Seller cancelled the order after payment, the Product received is materially different from the listing, the wrong item was delivered or handed over, the item is damaged in a way that was not disclosed, the item is counterfeit, prohibited, unsafe, or illegal, required components or quantities are missing, the Seller cannot fulfil the order, or applicable law requires a refund.",
          "A refund may be refused where the Buyer changed their mind after receiving the correct Product, the Product matched the listing and was delivered or handed over as agreed, the Buyer damaged the Product after receipt, the Buyer failed to collect the Product after agreeing to pickup or handover, the Buyer provided incorrect delivery or contact information, the Buyer cannot provide reasonable evidence, the dispute is reported after an unreasonable delay, the Buyer abuses the process, the Product was clearly listed as used, damaged, incomplete, or non-returnable, or applicable law does not require a refund.",
        ],
      },
      {
        title: "6. STANDARDS AND EXAMPLES",
        paragraphs: [
          "\"Materially different\" means the Product differs from the listing in a significant way, including wrong item, undisclosed damage, missing essential components, materially different quantity, counterfeit status, materially different condition, or a description that would likely have affected the Buyer's decision to purchase.",
          '"Reasonable evidence" may include screenshots, order records, payment references, Product photos, delivery or pickup confirmation, chat messages, timestamps, and other records relevant to the dispute.',
          '"Reasonable time" means as soon as practical after the issue is discovered, taking into account the Product type, transaction value, delivery or pickup method, and whether delay would make the issue harder to verify.',
        ],
      },
      {
        title: "7. DISPUTE REVIEW PROCESS",
        paragraphs: [
          "When UNIA receives a dispute, UNIA may acknowledge the complaint, review Buyer evidence, contact the Seller, request additional evidence, review listing information, order records, messages, and payment references, recommend a resolution, take Seller enforcement action, and escalate the issue to a Payment Provider where necessary.",
          "UNIA may close a dispute if a User fails to respond, refuses to provide evidence, behaves abusively, or appears to be misusing the dispute process.",
        ],
      },
      {
        title: "8. HYBRID DISPUTE RESOLUTION AUTHORITY",
        paragraphs: [
          "UNIA may make final platform-level decisions regarding account restrictions, Seller enforcement, listing removal, marketplace access, and platform support. However, UNIA does not act as a court, escrow provider, bank, payment custodian, or financial institution. Payment reversals, chargebacks, and refunds may depend on the relevant Seller, Payment Provider, bank, card network, mobile money operator, or applicable law.",
        ],
      },
      {
        title: "9. APPEAL RIGHTS AND STATUTORY RIGHTS",
        paragraphs: [
          "A User may request a review of a dispute decision or enforcement action by contacting UNIA support within seven days of being notified of the decision. The request must include the reason for appeal and any additional evidence. UNIA may accept, reject, or modify the original decision after review. UNIA's decision after appeal will be final for platform purposes.",
          "Nothing in this Refund and Dispute Policy removes, excludes, restricts, or limits any consumer, payment, statutory, regulatory, or other rights that cannot legally be waived under applicable law.",
        ],
      },
      {
        title: "10. CHARGEBACKS AND PAYMENT PROVIDER DISPUTES",
        paragraphs: [
          "If a Buyer raises a chargeback or Payment Provider dispute, the Payment Provider's rules may apply. Users must cooperate with requests for evidence. UNIA may provide transaction records, communications, listing information, and other relevant evidence to the Payment Provider where appropriate.",
          "Abuse of chargebacks, false claims, or collusive disputes may result in account suspension or termination.",
        ],
      },
      {
        title: "11. REPORTING A PROBLEM",
        paragraphs: [
          "Buyers should report transaction issues as soon as possible through UNIA's support channels. A dispute report should include order reference, Product listing details, Seller username or profile, payment reference, screenshots of messages, photos or videos of the Product, delivery, pickup, or handover evidence, description of the issue, and preferred resolution.",
          "Reports can be sent to support@unia.business, general@unia.business.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    shortTitle: "Privacy Policy",
    href: "/privacy",
    effectiveDate: "May 19, 2026",
    lastUpdated: "May 19, 2026",
    description:
      "This policy explains how UNIA collects, uses, discloses, retains, and protects personal information across the website and mobile app.",
    audience: "All users whose information is processed by UNIA.",
    keyPoints: [
      "UNIA collects account information, seller verification information, marketplace activity records, and limited payment-related data.",
      "Seller identity documents may be collected for onboarding, disputes, fraud prevention, safety, and payment-provider compliance.",
      "Personal information may be disclosed where lawful and necessary for payments, support, disputes, compliance, or safety.",
      "Users may have access, correction, deletion, portability, restriction, and objection rights depending on applicable law.",
    ],
    sections: [
      sharedDefinitionsSection,
      policyHierarchySection,
      {
        title: "1. INTRODUCTION",
        paragraphs: [
          "This Privacy Policy for UNIA, UNI AFFORDABLES describes how and why we access, collect, store, use, disclose, and otherwise process personal information when Users access or use the Platform.",
          "UNIA is an online marketplace platform designed for student entrepreneurs and the broader student community to buy and sell goods and services. This Privacy Policy applies to the UNIA mobile application, web application, website, marketplace, services, and related tools.",
          "If you do not agree with this Privacy Policy, you should not use the Platform. Questions may be sent to privacy.unia@gmail.com.",
        ],
      },
      {
        title: "2. INFORMATION WE COLLECT",
        paragraphs: [
          "We may collect personal information provided directly by Users, generated through marketplace activity, or required for seller onboarding and verification.",
          "This may include basic account information such as full name, email address, phone number, username, display name, and optional profile photo.",
          "For student or seller verification, we may collect educational institution name, student email address, student ID number where applicable, academic programme or major, expected graduation year, uploaded student identification card, uploaded national identification card, references, and other Seller Verification Information.",
          "For marketplace activity, we may collect Product listings, titles, descriptions, photos, prices, purchase and sales history, reviews, ratings, in-platform communications, transaction records, order references, dispute records, and city or region-level location information for local transactions.",
          "For payments, we collect limited transaction information necessary to support payment processing, record-keeping, refunds, chargebacks, reversals, dispute handling, fraud prevention, and Payment Provider compliance. Sensitive payment data such as full card numbers and security codes is handled by the relevant Payment Provider and is not stored by UNIA.",
        ],
      },
      {
        title: "3. IDENTITY DOCUMENT COLLECTION",
        paragraphs: [
          "Where a User applies to become a Seller, UNIA may collect and review uploaded student identification cards, national identification cards, references, and other verification information. This information is used for seller onboarding, identity verification, fraud prevention, marketplace safety, dispute handling, compliance with Payment Provider requirements, and legal or regulatory obligations.",
          "UNIA does not collect identity documents for purposes unrelated to seller verification, marketplace safety, fraud prevention, compliance, or dispute handling.",
        ],
      },
      {
        title: "4. APPLICATION PERMISSIONS",
        paragraphs: [
          "The Platform may request camera access to take Product photos and upload identification documents, storage or gallery access to select Product images or verification documents, internet access for core marketplace functionality, push notification permission for transaction confirmations, messages, security alerts, and optional promotional notifications, and location permission where needed to show local marketplace listings or support local transaction coordination.",
          "UNIA does not use camera access for background recording, facial recognition, or biometric identification unless a separate notice and lawful basis is provided.",
        ],
      },
      {
        title: "5. HOW WE USE PERSONAL INFORMATION",
        paragraphs: [
          "We process personal information to create and manage accounts, verify seller identity, review seller applications, operate the marketplace, display listings, facilitate orders, support payments, communicate with Users, provide customer support, prevent fraud, enforce Policies, resolve disputes, improve the Platform, comply with law, satisfy Payment Provider requirements, and protect the safety and integrity of the marketplace.",
        ],
      },
      {
        title: "6. LAWFUL BASIS FOR PROCESSING",
        paragraphs: [
          "Depending on the context and applicable law, we process personal information on the basis of contract performance, legitimate interests, legal obligation, consent where required, and the establishment, exercise, or defence of legal claims.",
          "Our legitimate interests include fraud prevention, marketplace safety, platform security, seller verification, dispute handling, service improvement, and enforcement of UNIA Policies.",
          "Where consent is required, Users may withdraw consent, but withdrawal may affect access to features that depend on the relevant processing.",
        ],
      },
      {
        title: "7. ACCESS RESTRICTIONS AND SECURITY",
        paragraphs: [
          "Access to Seller Verification Information, identity documents, dispute evidence, payment references, and other sensitive records is restricted to authorised personnel and service providers who require access for onboarding, compliance, fraud prevention, dispute handling, legal, security, or operational purposes.",
          "UNIA applies reasonable administrative, technical, and organisational safeguards designed to protect personal information, including access controls, secure storage, encrypted transmission where appropriate, administrative access restrictions, and internal review procedures.",
          "No electronic transmission or storage system can be guaranteed to be completely secure.",
        ],
      },
      {
        title: "8. WHEN AND WITH WHOM WE SHARE PERSONAL INFORMATION",
        paragraphs: [
          "UNIA may share personal information with Payment Providers, banks, mobile money operators, card networks, hosting providers, analytics providers, customer support providers, fraud prevention providers, professional advisers, regulators, law enforcement authorities, courts, and other parties where required or permitted by law.",
          "UNIA may disclose transaction records, order details, communications, listing information, Seller Verification Information, and dispute evidence to Payment Providers only where lawful, necessary, and proportionate for payment processing, settlements, refunds, reversals, chargebacks, fraud reviews, compliance reviews, or disputes.",
          "UNIA may disclose information to universities only where lawful, necessary, and proportionate, and only where the disclosure is connected to campus safety, serious misconduct, suspected fraud, identity misuse, prohibited activity, threats, harassment, illegal Products, or a credible violation of university rules. Where practical and lawful, UNIA will limit the disclosure to the minimum information necessary for the relevant purpose.",
          "UNIA may disclose information to regulators, law enforcement, courts, or authorities only where required or permitted by law, legal process, public safety needs, fraud prevention, investigation of unlawful activity, or protection of rights.",
          "UNIA does not sell identity documents or Seller Verification Information.",
        ],
      },
      {
        title: "9. RETENTION PERIODS",
        paragraphs: [
          "UNIA retains personal information only for as long as necessary for the purposes described in this Privacy Policy, unless a longer period is required or permitted by law, Payment Provider requirements, fraud prevention needs, dispute resolution, accounting, tax, regulatory compliance, or legal claims.",
        ],
        bullets: [
          "Active account data: while the account is active and for a reasonable period after closure.",
          "Approved Seller Verification Information: for the duration of the Seller account plus up to five years where necessary for fraud prevention, legal, regulatory, dispute, or Payment Provider compliance purposes.",
          "Rejected Seller application records: up to 12 to 24 months where necessary to prevent repeated fraudulent applications or support compliance reviews.",
          "Transaction records and payment references: up to seven years for accounting, tax, legal, and Payment Provider compliance purposes.",
          "Dispute records and evidence: up to five years after dispute closure.",
          "Removed prohibited listings and enforcement records: up to three to five years.",
          "Support tickets: up to two to five years.",
          "Security logs: up to six to 24 months unless longer retention is needed for investigation or security purposes.",
          "Marketing records: until consent is withdrawn or the User unsubscribes.",
        ],
      },
      {
        title: "10. DELETION REQUESTS",
        paragraphs: [
          "Users may request deletion of their personal information by contacting UNIA. Deletion requests are subject to legal, fraud prevention, dispute resolution, accounting, tax, regulatory, Payment Provider, security, and legitimate business retention requirements.",
          "UNIA may retain limited records after account deletion where necessary to prevent fraud, resolve disputes, comply with law, support Payment Provider reviews, enforce Policies, or establish, exercise, or defend legal claims.",
        ],
      },
      {
        title: "11. USER RIGHTS AND STATUTORY RIGHTS",
        paragraphs: [
          "Subject to applicable law, Users may have rights to access, correct, delete, restrict, object to processing, withdraw consent, request portability, and lodge complaints with a data protection authority.",
          "Nothing in this Privacy Policy removes, excludes, restricts, or limits any privacy, data protection, consumer, statutory, regulatory, or other rights that cannot legally be waived under applicable law.",
          "Requests may be sent to privacy.unia@gmail.com. UNIA may require identity verification before responding to privacy rights requests.",
        ],
      },
      {
        title: "12. MINORS",
        paragraphs: [
          "UNIA does not knowingly collect personal information from persons under 18 where such collection is prohibited by applicable law or platform rules. If UNIA becomes aware that it has collected personal information from a minor unlawfully, it will take reasonable steps to deactivate the account and delete the information, subject to legal and safety obligations.",
        ],
      },
      {
        title: "13. GHANA-SPECIFIC PRIVACY NOTICE",
        paragraphs: [
          "UNIA is intended to comply with applicable privacy and data protection requirements, including Ghana's Data Protection Act, 2012 (Act 843), where applicable. Users in other regions may have additional privacy rights under their local laws.",
        ],
      },
      {
        title: "14. UPDATES TO THIS PRIVACY POLICY",
        paragraphs: [
          "UNIA may update this Privacy Policy from time to time. Where changes are material, UNIA may notify Users through the Platform, email, or other reasonable means. Continued use of the Platform after an updated Privacy Policy becomes effective means the User acknowledges the updated policy.",
        ],
      },
      {
        title: "15. CONTACT",
        bullets: [
          "Privacy matters: privacy.unia@gmail.com",
          "Security concerns: general@unia.business",
          "General support: support@unia.business",
          "Disputes: support@unia.business, general@unia.business",
          "Phone: +233 534 431 116",
          "Mailing address: JUBILEE LINK, UNIVERSITY OF GHANA, LEGON, Accra, Greater Accra Region, Ghana",
        ],
      },
    ],
  },
  {
    slug: "policy-summaries",
    title: "User-Facing Policy Summaries",
    shortTitle: "Policy Summaries",
    href: "/policy-summaries",
    effectiveDate: "May 19, 2026",
    lastUpdated: "May 19, 2026",
    description:
      "This page provides the user-facing summaries of buyer rules, seller rules, prohibited products, refund expectations, dispute handling, and contact channels.",
    audience: "Users who want a fast reference version of the core marketplace rules.",
    keyPoints: [
      "Buy through supported payment channels and review listings before ordering.",
      "Sellers must be onboarded, verified, and accurate in the products they list.",
      "UNIA prohibits unlawful, unsafe, counterfeit, stolen, misleading, and restricted items.",
      "Refunds and disputes depend on the facts, evidence, payment-provider rules, and applicable law.",
    ],
    sections: [
      {
        title: "BUYER RULES SUMMARY",
        paragraphs: [
          "Buy only through supported payment channels. Review listings before ordering. Provide accurate contact, delivery, pickup, or handover information. Communicate respectfully with Sellers. Meet in safe locations for pickup. Report issues quickly with evidence. Refunds are not guaranteed and depend on the facts of the transaction, Seller response, Payment Provider rules, and applicable law.",
        ],
      },
      {
        title: "SELLER RULES SUMMARY",
        paragraphs: [
          "List only lawful and accurate Products. Do not sell prohibited, counterfeit, unsafe, stolen, misleading, or restricted items. Fulfil orders directly and communicate clearly with Buyers. Sellers must complete onboarding and verification before approval. Sellers who fail verification, mislead Buyers, violate marketplace rules, or repeatedly fail to fulfil orders may be suspended or removed.",
        ],
      },
      {
        title: "PROHIBITED PRODUCTS SUMMARY",
        paragraphs: [
          "Do not list illegal drugs, weapons, counterfeit goods, stolen goods, alcohol, tobacco, vapes, prescription medicines, unsafe supplements, adult sexual products, gambling services, fraudulent schemes, hacked accounts, academic cheating services, fake certificates, hazardous materials, recalled Products, or Products prohibited by university rules.",
        ],
      },
      {
        title: "REFUND AND DISPUTE SUMMARY",
        paragraphs: [
          "UNIA may help review disputes, request evidence, contact Sellers, recommend outcomes, and take platform enforcement action. UNIA may make final platform-level decisions about account restrictions, Seller enforcement, listing removal, and marketplace access. However, refunds, reversals, and chargebacks may depend on the Seller, Payment Provider, bank, card network, mobile money operator, or applicable law. Users may appeal a dispute or enforcement decision within seven days.",
        ],
      },
      {
        title: "CONTACT SUMMARY",
        bullets: [
          "General: general@unia.business",
          "Support: support@unia.business",
          "Disputes: support@unia.business, general@unia.business",
          "Privacy: privacy.unia@gmail.com",
          "Security: general@unia.business",
          "Phone: +233 534 431 116",
          "Website: https://unia-web.vercel.app/",
        ],
      },
    ],
  },
];

export const policyDocumentMap = Object.fromEntries(
  policyDocuments.map((document) => [document.slug, document]),
) as Record<string, PolicyDocument>;
