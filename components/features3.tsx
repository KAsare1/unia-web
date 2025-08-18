"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Message type definition
type Message = {
  role: "assistant" | "user";
  content: string;
};

// Card type definition
type Card = {
  id: number;
  name: string;
  designation: string;
  content: string;
  gradient: string;
};

// Reusable components
const GradientTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold mb-4">{children}</h2>
);

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#F9FAFB] rounded-[18px] p-4 border border-[#E1E1E1] shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]">
    {children}
  </div>
);

const ContentBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "space-y-4 rounded-xl p-4 border border-[#E1E1E1] bg-white h-[320px]",
      className
    )}
  >
    {children}
  </div>
);

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <>
    <motion.h3
      whileHover={{ scale: 1.05 }}
      className="text-xl font-bold mt-6 mb-2"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-gray-500 text-sm leading-relaxed"
    >
      {description}
    </motion.p>
  </>
);

// Chat Section Component
const ChatSection = () => {
  const messages: Message[] = [
    {
      role: "assistant",
      content: "Hi! Welcome to UNIA 👋"
    },
    {
      role: "assistant",
      content: "I can help you list products, track orders, or find great deals from student sellers. What would you like to do?"
    },
    {
      role: "user",
      content: "How do I start selling?"
    }
  ];

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`max-w-[80%] text-sm p-2 ${
                  message.role === "user"
                    ? "rounded-[10px_0px_10px_10px] border border-[#E3E3E3] bg-gradient-to-br from-[#60A5FA] to-[#2563EB] text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),_0px_4px_6px_-4px_rgba(0,0,0,0.10)]"
                    : "rounded-[0px_10px_10px_10px] border border-[#E3E3E3] bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),_0px_4px_6px_-4px_rgba(0,0,0,0.10)]"
                }`}
              >
                {message.content}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="border border-gray-200 rounded-full p-3.5 flex items-center gap-3"
        >
          <input
            type="text"
            placeholder="Write a message"
            className="flex-1 outline-none text-sm bg-white placeholder-gray-400"
          />
          <div className="flex items-center gap-3 text-gray-400">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="hover:text-gray-600 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2, x: 5 }}
              className="hover:text-gray-600 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </ContentBox>
      <SectionTitle
        title="Smart customer support"
        description="Get instant help with orders, payments, or selling questions. Our AI assistant knows the ins and outs of student marketplaces."
      />
    </SectionWrapper>
  );
};

// Payment Section Component
const PaymentSection = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: 1,
      name: "Mobile Money",
      designation: "MTN/Vodafone",
      content: "**** **** *789",
      gradient: "from-[#FFCC00] to-[#FF9500]" // Mobile money gold/orange
    },
    {
      id: 2,
      name: "Debit Card",
      designation: "Visa/Mastercard",
      content: "**** **** **** 2156",
      gradient: "from-[#1E40AF] to-[#3730A3]" // Card blue
    },
    {
      id: 3,
      name: "Cash Payment",
      designation: "Campus Pickup",
      content: "Meet & Pay in Person",
      gradient: "from-[#3B82F6] to-[#1D4ED8]" // UNIA brand colors (blue)
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="mb-8 text-center">
          <h2 className="text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#333333] via-[#5E5E5E] to-[#000000]">
            GH₵12,000
          </h2>
          <p className="text-gray-500 text-sm">This Month's Earnings</p>
        </div>
        <div className="relative h-48">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className={`absolute w-full h-[180px] rounded-[20px] p-6 text-white bg-gradient-to-br ${card.gradient}`}
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -10,
                scale: 1 - index * 0.06,
                zIndex: cards.length - index,
              }}
            >
              <div className="flex justify-between items-center relative z-10">
                <div className="w-12 h-8 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-md"></div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                </div>
              </div>
              <div className="mt-6 relative z-10">
                <p className="tracking-[0.2em] text-lg font-medium">
                  {card.content}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-sm opacity-90">{card.name}</p>
                  <span className="text-sm opacity-75">•</span>
                  <p className="text-sm opacity-90">{card.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentBox>
      <SectionTitle
        title="Easy payments"
        description="We accept all kinds of cards. We make sure you get money whichever way possible."
      />
    </SectionWrapper>
  );
};

// Team Section Component
const TeamSection = () => {
  return (
    <SectionWrapper>
      <ContentBox>
        <div className="flex items-center justify-between mb-6">
          <button className="text-[#3B82F6] hover:text-[#2563EB] transition-colors font-medium">
            + Invite
          </button>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white ring-2 ring-gray-50"
                style={{
                  backgroundImage: `url(https://i.pravatar.cc/150?img=${i})`,
                  backgroundSize: "cover",
                }}
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-gray-50 border-2 border-white ring-2 ring-gray-50 flex items-center justify-center text-sm font-medium text-gray-500">
              +2
            </div>
          </div>
        </div>
        <div className="h-52 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-[10px] absolute inset-0 border border-dashed border-[rgba(59,130,246,0.59)] bg-[rgba(59,130,246,0.06)] p-5"
          />
          <motion.div
            whileHover={{ rotate: 9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-[16px] absolute inset-0 border-[0.7px] border-[#E0E0E0] bg-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),_0px_4px_6px_-4px_rgba(0,0,0,0.10)] p-5"
          >
            <div>
              <span className="bg-gradient-to-b from-[#60A5FA] to-[#2563EB] text-white px-3 py-1 rounded text-sm font-medium">
                Hot
              </span>
              <h4 className="text-sm font-semibold mt-3 mb-1">Campus Market Day</h4>
              <p className="text-gray-500 text-xs">
                Organize a popup market in the student center. Perfect opportunity to showcase handmade products.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-5">
              <div className="flex -space-x-2">
                <div
                  className="w-7 h-7 rounded-full border-2 border-white ring-2 ring-gray-50"
                  style={{
                    backgroundImage: "url(https://i.pravatar.cc/150?img=5)",
                    backgroundSize: "cover",
                  }}
                />
                <div
                  className="w-7 h-7 rounded-full border-2 border-white ring-2 ring-gray-50"
                  style={{
                    backgroundImage: "url(https://i.pravatar.cc/150?img=6)",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div className="flex items-center gap-4 text-gray-400 dark:text-blue-200 text-sm mt-2">
                  <span className="flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-blue-900/40 px-2 py-1 rounded-md">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    12 interested
                  </span>
                  <span className="flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-blue-900/40 px-2 py-1 rounded-md">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 20V10M18 20V4M6 20v-4" />
                    </svg>
                    5 vendors
                  </span>
                </div>
            </div>
          </motion.div>
        </div>
      </ContentBox>
      <SectionTitle
        title="Build your student network"
        description="Connect with fellow student entrepreneurs, share tips, and grow your businesses together on campus."
      />
    </SectionWrapper>
  );
};

// Main Features3 component
const Features3 = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <GradientTitle>
            Smart features <span className="text-[#3B82F6]">that work for students</span>
          </GradientTitle>
          <p className="text-gray-600">
            From AI-powered recommendations to seamless payments, UNIA is built with cutting-edge tech that understands student life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ChatSection />
          <PaymentSection />
          <TeamSection />
        </div>
      </div>
    </section>
  );
};

export default Features3;