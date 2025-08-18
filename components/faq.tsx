"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";

const faqs = [
  {
    question: "How do I start selling on UNIA?",
    answer: "Getting started is easy! Simply create your free account, verify your student status with your campus email, and you can start listing products immediately. Upload photos, set your prices, and write descriptions - your store will be live in minutes."
  },
  {
    question: "What payment methods does UNIA accept?",
    answer: "We support the payment methods students prefer: Mobile Money (MTN, Vodafone), debit cards (Visa/Mastercard), and cash payments for campus meetups. Choose what works best for you and your customers."
  },
  {
    question: "How does campus delivery work?",
    answer: "You can arrange delivery however works best - meet on campus, deliver to dorms, or set up pickup points at common areas like the library or student center. Many sellers offer free campus delivery to make buying convenient for fellow students."
  },
  {
    question: "Is UNIA only for students?",
    answer: "UNIA is designed by students, for students. Both buyers and sellers must verify their student status with a valid campus email address. This creates a trusted community where students can safely buy and sell with their peers."
  },
  {
    question: "What can I sell on UNIA?",
    answer: "Almost anything! Popular items include handmade crafts, study materials, tutoring services, food items, tech accessories, vintage clothing, art, and custom services. Just make sure your items follow our community guidelines and are legal to sell."
  },
  {
    question: "How much does it cost to sell on UNIA?",
    answer: "Creating your store is completely free! We only take a small commission when you make a sale, so you never pay upfront costs. This helps us keep the platform running while letting you start your business risk-free."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Frequently <span className="text-[#3B82F6]">Asked</span> Questions
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
Everything you need to know about buying, selling, and succeeding on UNIA. Can't find what you're looking for? Reach out to our student support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 rounded-[22px] bg-[#DCDCDC] p-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[17px] border border-[#EBEBEB] bg-gradient-to-b from-[#F6F6F6] via-[#FDFDFD] to-[#F6F6F6] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center gap-2 text-left"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <IconPlus size={20} className="text-[#3B82F6]" />
                </motion.div>
                <span className="text-lg text-neutral-800">{faq.question}</span>
              </button>
              <AnimatePresence mode="sync">
                {openIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { 
                        height: "auto",
                        opacity: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                          mass: 1
                        }
                      },
                      collapsed: { 
                        height: 0,
                        opacity: 0,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                          mass: 1
                        }
                      }
                    }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-5">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}