import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Tabs({
  tabs,
  defaultTab,
  className = "",
}) {
  const initialTab =
    defaultTab || tabs[0]?.id;

  const [activeTab, setActiveTab] =
    useState(initialTab);

  return (
    <section
      className={`w-full ${className}`}
    >
      {/* Premium tab navigation */}
      <div className="relative mb-8 overflow-x-auto">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#edbf68]/20 to-transparent" />

        <div className="flex min-w-max gap-3 pb-5">
          {tabs.map((tab) => {
            const isActive =
              activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() =>
                  setActiveTab(tab.id)
                }
                aria-pressed={isActive}
                className={`group relative rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                  isActive
                    ? "border border-[#edbf68]/20 bg-gradient-to-r from-[#edbf68] to-[#d9aa4f] text-[#1f1606] shadow-xl shadow-[#edbf68]/20"
                    : "border border-white/10 bg-white/5 text-[#f8f3e9] backdrop-blur-sm hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Premium tab content */}
      <Card
        bordered
        padding="lg"
        className="relative overflow-hidden"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-10 -right-10 h-36 w-36 rounded-full bg-[#edbf68]/8 blur-3xl" />

        <div className="relative z-10">
          {
            tabs.find(
              (tab) =>
                tab.id === activeTab
            )?.content
          }
        </div>
      </Card>
    </section>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label:
        PropTypes.string.isRequired,
      content:
        PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultTab: PropTypes.string,
  className: PropTypes.string,
};

export default Tabs;