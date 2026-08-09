import { AlarmClock, BoltLightning, Card, Cloud, Pie, WalletMoney } from "reicon-react";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const Features = () => {
  const featuresItems = [
    {
      id: 1,
      icon: BoltLightning,
      head: "One-click transaction categorization and syncing",
      sub: "Automatically organize your financial data in seconds. With just one click, your transactions instantly synced",
      cn: "top-25 z-10",
    },
    {
      id: 2,
      icon: AlarmClock,
      head: "Real-time budget tracking with spending alerts",
      sub: "Our advanced analytics give you a real-time view of your entire operation—sales, profit margins.",
      cn: "top-25 z-20",
    },
    {
      id: 3,
      icon: Cloud,
      head: "Integrated saving plans with automated goals",
      sub: "Take the stress out of saving with built-in plans that adapt to your lifestyle.",
      cn: "top-25 z-30",
    },
    {
      id: 4,
      icon: WalletMoney,
      head: "Income & expense with smart analytics",
      sub: "Track your cash flow with clarity and confidence. Categorize your income and expenses with smart analytics",
      cn: "top-25 z-40",
    },
    {
      id: 5,
      icon: Card,
      head: "Seamless payments, anywhere",
      sub: "Accept and send payments instantly across borders with transparent fees and no hidden charges",
      cn: "top-25 z-50",
    },
    {
      id: 6,
      icon: Pie,
      head: "Grow with real-time insights",
      sub: "Make smarter financial decisions with live dashboards that turn your spending patterns into actionable insights",
      cn: "top-25 z-60",
    },
  ];
  return (
    <>
      <div className="w-full relative py-10">
        <div className="w-full flex justify-center items-center">
          <div className="px-3 py-1 bg-linear-to-t from-secondary/90 to-secondary/40 tracking-tighter border-secondary flex justify-center items-center gap-2 border rounded-full text-primary ring-1 ring-background/30 ring-inset text-sm font-semibold">
            Features
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 px-10 md:px-20 lg:px-60 z-30 pt-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center leading-8 md:leading-none"
            delay={0.5}
          >
            Smarter Features to Manage and Grow your Money
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-lg md:text-xl text-center text-muted"
            delay={0.8}
          >
            Everything you need in one platform to track, plan, and optimize
            your finances.
          </TextAnimate>
        </div>
        <div className="w-full flex justify-center items-start flex-col md:flex-row md:gap-5 px-5 md:px-10 lg:px-20 py-10">
          <div className="w-full sticky top-25 left-0 p-2 lg:p-4 bg-secondary/20 rounded-3xl">
            <img src="/creditcard.svg" alt="" className="w-full pb-2 lg:pb-4" />
            <div className="w-full bg-background rounded-xl border border-muted/30 py-2 px-3">
              <div className="w-full flex justify-between items-center pb-2 text-foreground">
                <p className="font-semibold">$2500</p>
                <p className="text-sm">12.5% spent</p>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full relative">
                <div className="w-1/4 h-2 absolute top-0 left-0 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            {featuresItems.map((i) => (
              <div
                key={i.id}
                className={`w-full flex justify-center items-start sticky gap-3 left-0 ${i.cn} p-3 rounded-2xl border border-muted/30 bg-background mb-4`}
              >
                <div className="bg-secondary p-2 rounded-lg">
                  <i.icon size={20} />
                </div>
                <div className="w-full">
                  <h4 className="text-xl font-semibold text-foreground leading-5 pb-2">
                    {i.head}
                  </h4>
                  <p className="text-md text-muted leading-5">{i.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
