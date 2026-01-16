"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Leads from "../components/Leads/Leads";
import Analytics from "../components/Analytics";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("leads");

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        <Header activeTab={activeTab} />
        <div className="p-6">
          {activeTab === "leads" && <Leads />}
          {activeTab === "analytics" && <Analytics />}
        </div>
      </main>
    </div>
  );
}
