"use client";
import { useEffect, useState } from "react";
import API from "../services/api";
import MetricCard from "./MetricCard";
import StageCard from "./StageCard";

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [totalLeads, setTotalLeads] = useState(0);
  const [convertedLeads, setConvertedLeads] = useState(0);
  const [leadsByStage, setLeadsByStage] = useState({});

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/leads/analytics/data");

      setTotalLeads(res.data.totalLeads);
      setConvertedLeads(res.data.convertedLeads);

      const stageMap = {};
      res.data.leadsByStage.forEach((item) => {
        stageMap[item._id] = item.count;
      });

      setLeadsByStage(stageMap);
    } catch (error) {
      console.error("Failed to fetch analytics", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading analytics...</p>;
  }

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MetricCard title="Total Leads" value={totalLeads} />
        <MetricCard title="Converted Leads" value={convertedLeads} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Leads by Stage
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StageCard stage="Cold" value={leadsByStage.Cold || 0} />
          <StageCard stage="Warm" value={leadsByStage.Warm || 0} />
          <StageCard stage="Hot" value={leadsByStage.Hot || 0} />
        </div>
      </div>
    </div>
  );
}



