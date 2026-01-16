"use client";
import React, { useState } from "react";
import { tabs } from "../data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Sidebar({ activeTab, setActiveTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col`}
    >
      <div className="p-6 flex items-center justify-between border-b border-gray-100">
        <h1
          className={`text-2xl font-bold uppercase transition-all duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          Dashboard
        </h1>

        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="w-10 h-10 flex-shrink-0 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
        >
          {sidebarOpen ? (
            <FiChevronLeft className="w-5 h-5 text-gray-600" />
          ) : (
            <FiChevronRight className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl flex-shrink-0">{tab.icon}</span>
            <span
              className={`text-sm font-medium transition-all duration-300 ${
                sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
              }`}
            >
              {tab.name}
            </span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200">
          <span
            className={`text-sm font-medium transition-all duration-300 ${
              sidebarOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            Support
          </span>
        </button>
      </div>
    </aside>
  );
}
