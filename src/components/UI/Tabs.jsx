
import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Tabs({ tabs, defaultTab, className = "" }) {
  const initialTab = defaultTab || tabs[0]?.id;
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className={`w-full ${className}`}>
      <div className="mb-6 flex flex-wrap gap-3 border-b border-white/10 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`
                rounded-full px-5 py-2 text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-[#edbf68] text-[#1f1606] shadow-lg"
                    : "bg-[#2d220b] text-[#f8f3e9] hover:bg-[#3a2a0d]"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <Card bordered padding="lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </Card>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultTab: PropTypes.string,
  className: PropTypes.string,
};

export default Tabs;