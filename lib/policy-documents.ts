export type PolicySection = {
  title: string;
  intro?: string;
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

export const policyDocuments: PolicyDocument[] = [
  {
    slug: "terms",
    title: "Terms of Service",
    shortTitle: "Terms",
    href: "/terms",
    effectiveDate: "May 19, 2026",
    lastUpdated: "May 19, 2026",
    description:
      "These terms govern access to and use of UNIA as a campus-focused marketplace connecting buyers and approved sellers.",
    audience: "All users of the UNIA website and mobile app.",
    keyPoints: [
      "Using UNIA means you agree to the Terms of Service and the related marketplace policies.",
      "UNIA provides the marketplace infrastructure, but products are sold and fulfilled by third-party sellers.",
      "Buyers and sellers are each responsible for accurate information, lawful conduct, and compliance with UNIA rules.",
      "Payments, refunds, reversals, chargebacks, and disputes may involve sellers and payment providers in addition to UNIA.",
    ],
    sections: [
      {
        title: "1. Introduction",
        bullets: [
          "These terms apply when you create an account, browse listings, buy products, sell products, or otherwise use UNIA.",
          "By using the platform, you also agree to the Acceptable Use Policy, Seller Policy, Refund and Dispute Policy, and Privacy Policy.",
        ],
      },
      {
        title: "2. About UNIA",
        bullets: [
          "UNIA is a campus-focused marketplace for university students, student entrepreneurs, and approved campus sellers.",
          "UNIA provides technology for discovery, communication, onboarding, and payment-provider integration.",
          "UNIA is not a warehouse, logistics provider, escrow service, bank, or money transmitter.",
        ],
      },
      {
        title: "3. Eligibility and Accounts",
        bullets: [
          "You must be legally able to enter a binding agreement and provide accurate account information.",
          "You are responsible for safeguarding your login credentials and account activity.",
          "UNIA may suspend or terminate accounts that present fraud, security, impersonation, or compliance risks.",
        ],
      },
      {
        title: "4. Buyer and Seller Responsibilities",
        bullets: [
          "Buyers must review listings, provide correct fulfilment details, pay through supported channels, and raise disputes promptly with evidence.",
          "Sellers must maintain accurate listings, sell lawful products, fulfil orders responsibly, and comply with university rules and platform standards.",
        ],
      },
      {
        title: "5. Marketplace Role and Transactions",
        bullets: [
          "Sellers are independent third parties and are not employees or agents of UNIA.",
          "Unless a transaction flow explicitly says otherwise, the seller is responsible for the underlying sale and product obligations.",
          "UNIA may facilitate messaging, dispute support, order management, and payment-provider integration without becoming the seller of record.",
        ],
      },
      {
        title: "6. Payments, Refunds, and Disputes",
        bullets: [
          "Payments are processed through supported payment providers.",
          "Refunds, reversals, and chargebacks may depend on the seller, the payment provider, the buyer’s bank, or applicable law.",
          "UNIA may review evidence, enforce marketplace rules, and make platform-level access decisions.",
        ],
      },
      {
        title: "7. Privacy, Updates, and Contact",
        bullets: [
          "Personal information is handled under the Privacy Policy.",
          "UNIA may update the terms from time to time, and continued use means you acknowledge the updated terms.",
          "For support, disputes, or legal-policy questions, users can contact UNIA through the addresses listed in the legal documents.",
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
      "This policy defines what users may and may not do on UNIA to keep the marketplace lawful, safe, and trustworthy.",
    audience: "All buyers, sellers, and visitors using UNIA.",
    keyPoints: [
      "UNIA may only be used for lawful marketplace activity connected to supported campus communities.",
      "Illegal, unsafe, fraudulent, abusive, or high-risk conduct is prohibited.",
      "The platform bans prohibited products, verification abuse, security abuse, and content that harms users or the marketplace.",
      "UNIA may remove listings, suspend users, or permanently restrict accounts for violations.",
    ],
    sections: [
      {
        title: "1. Purpose",
        bullets: [
          "The Acceptable Use Policy protects buyers, sellers, universities, payment providers, and the broader marketplace.",
          "It applies to listings, messages, onboarding, product activity, and any other use of the platform.",
        ],
      },
      {
        title: "2. General Acceptable Use Rules",
        bullets: [
          "Use UNIA only for lawful buying, selling, discovery, and coordination of products or services.",
          "Do not misuse the platform in a way that breaks the law, harms others, misleads users, or creates fraud or compliance risk.",
        ],
      },
      {
        title: "3. Prohibited Products and Services",
        bullets: [
          "Prohibited categories include illegal drugs, weapons, explosives, counterfeit goods, stolen goods, pirated goods, and hacked accounts.",
          "Alcohol, tobacco, nicotine products, vapes, prescription medicines, unapproved medical products, and unsafe supplements are not allowed.",
          "UNIA also prohibits adult sexual products, pornography, gambling, fraudulent schemes, exam leaks, fake certificates, hazardous materials, recalled goods, and products banned by university rules.",
        ],
      },
      {
        title: "4. Prohibited Conduct",
        bullets: [
          "Sellers may not provide false identity information, misleading listings, forged documents, or products they do not own or have authority to sell.",
          "Buyers may not place fake orders, abuse refunds or chargebacks, harass sellers, or use unauthorized payment methods.",
          "No user may impersonate another person, evade verification, or misuse another person’s student ID, payment details, or contact information.",
        ],
      },
      {
        title: "5. Content, Communication, and Security Rules",
        bullets: [
          "Users must not post illegal, abusive, threatening, hateful, discriminatory, or privacy-invasive content.",
          "Users must not attack platform security, scrape data without permission, bypass controls, distribute malware, or interfere with service availability.",
        ],
      },
      {
        title: "6. Enforcement and Appeals",
        bullets: [
          "UNIA may remove listings, limit access, reject seller applications, suspend accounts, or permanently remove users for violations.",
          "High-risk conduct includes fraud, identity misuse, prohibited goods, payment abuse, repeated disputes, and threats to user safety.",
          "Users may have appeal rights and statutory rights depending on applicable law.",
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
      "This policy explains who can sell on UNIA, how seller onboarding works, and what standards sellers must meet.",
    audience: "Current sellers and anyone applying to sell on UNIA.",
    keyPoints: [
      "Seller applications are manually reviewed and may require student ID, national ID, references, and product-category details.",
      "Seller verification helps reduce fraud and maintain marketplace safety, but does not guarantee product quality or legality.",
      "Sellers must publish accurate listings, fulfil orders directly, and support buyers responsibly.",
      "UNIA may reject, suspend, or remove sellers who fail verification or create safety, legal, or compliance risks.",
    ],
    sections: [
      {
        title: "1. Purpose",
        bullets: [
          "The Seller Policy sets the rules for onboarding, listing products, fulfilling orders, and maintaining marketplace trust.",
        ],
      },
      {
        title: "2. Who Can Become a Seller",
        bullets: [
          "UNIA may approve students, campus-based vendors, and members of supported university communities.",
          "Approval is discretionary and may be denied or withdrawn to protect users, comply with law, or satisfy payment-provider requirements.",
        ],
      },
      {
        title: "3. Seller Application and Onboarding",
        bullets: [
          "Applicants may be asked for full name, contact details, university affiliation, seller profile information, student or national ID, references, and intended product categories.",
          "Seller applications are manually reviewed by a human reviewer.",
          "UNIA may request additional information before approval, and failure to provide it may lead to rejection or suspension.",
        ],
      },
      {
        title: "4. Seller Verification and Due Diligence",
        bullets: [
          "Verification may include reviewing submitted documents, references, profile information, intended products, and inconsistencies in the application.",
          "UNIA may reject or remove sellers who submit false information, invalid documents, or otherwise create fraud, safety, or compliance risk.",
          "Seller verification is not a guarantee from UNIA about the quality, legality, or authenticity of products.",
        ],
      },
      {
        title: "5. Listing and Fulfilment Requirements",
        bullets: [
          "Every listing must be accurate, lawful, complete, and not misleading.",
          "Listings should include truthful images, correct pricing, condition, availability, and fulfilment details.",
          "Sellers are responsible for preparing products, coordinating delivery or pickup, packaging appropriately, and informing buyers promptly if fulfilment is not possible.",
        ],
      },
      {
        title: "6. Payments, Liability, and Enforcement",
        bullets: [
          "Payments are processed through supported payment providers and may be affected by verification, reviews, disputes, or provider rules.",
          "Sellers remain responsible for their own products, conduct, legal compliance, and buyer-facing obligations.",
          "UNIA may monitor seller activity and take enforcement action, including suspension, removal, or listing restrictions.",
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
      "This policy explains how complaints, transaction disputes, return requests, refunds, and chargeback-related issues are handled on UNIA.",
    audience: "Buyers and sellers involved in orders, complaints, or dispute resolution.",
    keyPoints: [
      "UNIA is a marketplace platform, and sellers remain primarily responsible for the products they list and fulfil.",
      "Refund eligibility depends on the facts of the transaction, the evidence provided, seller conduct, payment-provider rules, and applicable law.",
      "UNIA may help review evidence, contact sellers, and take platform-level enforcement action.",
      "Users may be able to appeal a dispute or enforcement outcome within a limited period.",
    ],
    sections: [
      {
        title: "1. Purpose and Scope",
        bullets: [
          "The policy applies to issues such as non-delivery, failed pickup, wrong items, missing items, damaged goods, inaccurate listings, prohibited products, and payment-related complaints.",
        ],
      },
      {
        title: "2. Marketplace Role and Payment Flow",
        bullets: [
          "UNIA is not a warehouse, fulfilment centre, escrow provider, payment custodian, bank, or money transmitter.",
          "Products are fulfilled directly by sellers, and payments are processed through supported payment providers.",
          "UNIA may support communication, evidence gathering, dispute review, and escalation where appropriate.",
        ],
      },
      {
        title: "3. Buyer and Seller Responsibilities",
        bullets: [
          "Buyers should review descriptions, provide accurate fulfilment information, inspect products promptly, and report issues within a reasonable time.",
          "Sellers must describe products accurately, provide truthful images, fulfil confirmed orders, and cooperate with dispute reviews.",
        ],
      },
      {
        title: "4. Refund Eligibility",
        bullets: [
          "A buyer may be eligible for a refund or other resolution if the product was not received, the seller cancelled after payment, the item was materially different, damaged, counterfeit, unsafe, prohibited, or missing essential components.",
          "Refunds may be refused where the buyer simply changed their mind, damaged the product after receipt, failed to collect it, gave incorrect fulfilment information, or cannot provide reasonable evidence.",
        ],
      },
      {
        title: "5. Dispute Review Process",
        bullets: [
          "Reasonable evidence can include screenshots, payment references, product photos, chat history, delivery or pickup confirmation, timestamps, and other relevant records.",
          "UNIA may review the evidence, request more information, contact the seller, and recommend or support an outcome.",
        ],
      },
      {
        title: "6. Hybrid Resolution, Chargebacks, and Appeals",
        bullets: [
          "UNIA may make final platform-level decisions about account restrictions, listing removal, and seller enforcement.",
          "Chargebacks and payment-provider disputes may be governed by the rules of the payment provider, bank, card network, or mobile money operator.",
          "Users may appeal a dispute or enforcement decision within the applicable appeal window.",
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
      "This policy explains how UNIA collects, uses, shares, retains, and protects personal information across the website and mobile app.",
    audience: "All users whose information is processed by UNIA.",
    keyPoints: [
      "UNIA collects account details, verification information, listing and transaction activity, communication records, and limited payment-related records.",
      "Seller identity documents may be collected for onboarding, fraud prevention, disputes, safety, and payment-provider compliance.",
      "Sensitive information is shared only where lawful, necessary, and proportionate for operations, disputes, compliance, or safety.",
      "Users may request access, correction, deletion, restriction, portability, or objection rights subject to applicable law.",
    ],
    sections: [
      {
        title: "1. Information We Collect",
        bullets: [
          "We may collect account information such as your name, email address, phone number, username, and profile photo.",
          "For student or seller verification, we may collect institution details, student ID details, national ID details, references, and other onboarding information.",
          "We also collect marketplace activity such as listings, order records, reviews, ratings, messages, disputes, and city- or region-level location information.",
        ],
      },
      {
        title: "2. Identity Document Collection and Permissions",
        bullets: [
          "Where you apply to become a seller, UNIA may review student IDs, national IDs, references, and related verification records.",
          "The app may request camera, storage, internet, notification, and location permissions where needed for listings, verification, messaging, and local coordination.",
          "UNIA does not use camera access for background recording, facial recognition, or biometric identification unless separately disclosed and lawfully justified.",
        ],
      },
      {
        title: "3. How We Use Personal Information",
        bullets: [
          "Personal information is used to manage accounts, verify sellers, review applications, operate the marketplace, support payments, prevent fraud, resolve disputes, improve services, and comply with law.",
          "Depending on the context, processing may rely on contract performance, legitimate interests, legal obligation, consent, or the establishment or defence of legal claims.",
        ],
      },
      {
        title: "4. Sharing and Security",
        bullets: [
          "Information may be shared with payment providers, financial intermediaries, hosting and support providers, advisers, regulators, courts, law enforcement, and in limited cases universities or institutions.",
          "Access to sensitive records is restricted to authorized personnel and service providers with a legitimate operational need.",
          "UNIA applies access controls, secure storage, and encrypted transmission where appropriate, but no system can be guaranteed completely secure.",
        ],
      },
      {
        title: "5. Retention, Deletion, and User Rights",
        bullets: [
          "UNIA keeps data only as long as necessary for business, legal, security, dispute, tax, fraud-prevention, and payment-provider obligations.",
          "Deletion requests may be limited where records are needed for compliance, security, dispute handling, or legal claims.",
          "Users may request access, correction, deletion, restriction, portability, consent withdrawal, or objection rights where provided by law.",
        ],
      },
      {
        title: "6. Minors, Updates, and Contact",
        bullets: [
          "UNIA does not knowingly collect personal information from persons under 18 where such collection is prohibited by law or platform rules.",
          "Users in Ghana and other jurisdictions may have additional privacy rights under local law.",
          "UNIA may update this policy from time to time and publish the latest version on the platform.",
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
      "A plain-language overview of the most important marketplace rules for buyers, sellers, prohibited products, refunds, disputes, and contact channels.",
    audience: "Users who want the fast version before reading the full policy documents.",
    keyPoints: [
      "Buy only through supported payment channels and review listings carefully before ordering.",
      "Sellers must complete onboarding and may be removed for misleading buyers or breaking marketplace rules.",
      "UNIA bans prohibited, counterfeit, unsafe, stolen, misleading, and restricted items.",
      "Refunds and disputes depend on the facts, the evidence available, payment-provider rules, and applicable law.",
    ],
    sections: [
      {
        title: "Buyer Rules Summary",
        bullets: [
          "Buy only through supported payment channels.",
          "Review listings carefully and provide accurate delivery, pickup, or handover information.",
          "Communicate respectfully, meet in safe locations, and report issues quickly with evidence.",
        ],
      },
      {
        title: "Seller Rules Summary",
        bullets: [
          "List only lawful and accurate products and do not sell prohibited, counterfeit, unsafe, stolen, or misleading items.",
          "Complete onboarding and verification before approval.",
          "Sellers who fail verification, mislead buyers, or repeatedly fail to fulfil orders may be suspended or removed.",
        ],
      },
      {
        title: "Prohibited Products Summary",
        bullets: [
          "UNIA prohibits illegal drugs, weapons, counterfeit goods, stolen goods, alcohol, tobacco, vapes, prescription medicines, unsafe supplements, adult sexual products, fraudulent schemes, hacked accounts, academic cheating services, fake certificates, hazardous materials, recalled products, and items banned by university rules.",
        ],
      },
      {
        title: "Refund and Dispute Summary",
        bullets: [
          "UNIA may review disputes, request evidence, contact sellers, recommend outcomes, and enforce platform rules.",
          "Refunds, reversals, and chargebacks may still depend on the seller, payment provider, bank, card network, mobile money operator, or applicable law.",
          "Users may appeal a dispute or enforcement decision within seven days where the policy allows.",
        ],
      },
      {
        title: "Contact Summary",
        bullets: [
          "General: general@unia.business",
          "Support: support@unia.business",
          "Disputes: support@unia.business, general@unia.business",
          "Privacy: privacy.unia@gmail.com",
          "Security: general@unia.business",
          "Phone: +233 534 431 116",
        ],
      },
    ],
  },
];

export const policyDocumentMap = Object.fromEntries(
  policyDocuments.map((document) => [document.slug, document]),
) as Record<string, PolicyDocument>;
