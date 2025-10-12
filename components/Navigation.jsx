"use client";
import { useState } from "react";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("About");

  const navItems = [
    { name: "About", icon: "👤" },
    { name: "Works", icon: "💼" },
    { name: "Services", icon: "⚙️" },
    { name: "Resume", icon: "📄" },
    { name: "Skills", icon: "✏️" },
    { name: "Blog", icon: "📚" },
    { name: "Contact", icon: "✈️" },
  ];

  return (
    <nav className="sticky top-0 z-30 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-end py-4 overflow-x-auto">
          <div className="flex gap-2 sm:gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap
                  transition-all duration-300
                  ${
                    activeTab === item.name
                      ? "bg-[#1a1a1a] text-[#9ef01a]"
                      : "text-gray-400 hover:text-white hover:bg-[#151515]"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="hidden sm:inline">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
