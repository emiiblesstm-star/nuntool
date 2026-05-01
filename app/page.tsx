"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Analysis Tools" },
    { id: "tab3", label: "Dcircles" },      // Added Dcircles after Analysis Tools
    { id: "tab2", label: "Pro Tool" },
    { id: "tab6", label: "Smart Edge" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Tabs Navigation */}
      <div className="overflow-x-auto border-b border-zinc-200 dark:border-zinc-800 scrollbar-hide">
        <div
          className="
            inline-flex 
            flex-nowrap 
            w-max 
            items-center 
            gap-3 
            px-3 
            py-2
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-5 py-3 
                text-sm sm:text-base 
                font-medium 
                whitespace-nowrap 
                transition-all 
                rounded-t-md
                min-w-[120px]      /* 👈 Forces proper scroll width */
                ${activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {activeTab === "tab1" && (
          <div
            style={{
              height: "calc(100vh - 55px)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <iframe
              src="https://api.binarytool.site/""
              title="Binary Tool"
              className="w-full border-0"
              style={{
                height: "calc(100vh - 55px + 20px)", // add extra height so cutting doesn't shrink content
                marginTop: "-100px", // 👈 hides upper 20px
              }}
            />
          </div>
        )}
        {activeTab === "tab3" && (
          <iframe
            src="https://dcircles.pages.dev/"
            title="Dcircles"
            className="w-full border-0"
            style={{ height: "calc(100vh - 55px)" }}
          />
        )}
        {activeTab === "tab2" && (
          <iframe
            src="https://v0-derivdashboard-puib.vercel.app/"
            title="Second Tool"
            className="w-full border-0"
            style={{ height: "calc(100vh - 55px)" }}
          />
        )}
        {activeTab === "tab6" && (
          <iframe
            src="https://v0-derivtradingsuite2-4ytf.vercel.app/"
            title="Smart Edge"
            className="w-full border-0"
            style={{ height: "calc(100vh - 55px)" }}
          />
        )}
      </div>
    </div>
  );
}
