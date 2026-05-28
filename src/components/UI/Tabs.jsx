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
      className={`relative w-full ${className}`}
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />

      {/* Premium Tabs Navigation */}
      <div className="relative mb-10 overflow-x-auto pb-2">
        {/* Bottom divider */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />

        {/* Tabs container */}
        <div className="flex min-w-max items-center gap-4 pb-5">
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
                className={`group relative overflow-hidden rounded-[1.35rem] border px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-500 ${
                  isActive
                    ? "border-amber-200/20 bg-gradient-to-br from-[#ffe7b0] via-[#edbf68] to-[#c8922f] text-stone-950 shadow-[0_16px_40px_rgba(237,191,104,0.28)]"
                    : "border-white/10 bg-white/[0.04] text-stone-200 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl hover:-translate-y-1 hover:border-amber-200/15 hover:bg-white/[0.06] hover:text-amber-100 hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                }`}
              >
                {/* Shine effect */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.16] via-transparent to-transparent transition-opacity duration-500 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Active glow */}
                {isActive && (
                  <div className="pointer-events-none absolute inset-0 bg-white/[0.06]" />
                )}

                <span className="relative z-10">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Premium Content Area */}
      <Card
        bordered
        padding="lg"
        className="relative overflow-hidden"
      >
        {/* Background overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/10" />

        {/* Ambient luxury glows */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-amber-300/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 h-60 w-60 rounded-full bg-orange-200/[0.05] blur-3xl" />

        {/* Metallic top border */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 animate-[fadeIn_0.35s_ease]">
          {
            tabs.find(
              (tab) =>
                tab.id === activeTab
            )?.content
          }
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/10 to-transparent" />
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