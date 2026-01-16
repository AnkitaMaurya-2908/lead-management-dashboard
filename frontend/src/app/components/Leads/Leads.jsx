"use client";

import { useEffect, useState, useCallback } from "react";
import API from "@/app/services/api";

import LeadsFilters from "./Filter";
import Table from "./Table";
import LeadsPagination from "./Pagination";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [stage, setStage] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await API.get("/api/leads", {
        params: { search, status, stage, page, limit },
      });

      setLeads(res.data.leads);
      setTotalPages(res.data.pages);
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setLoading(false);
    }
  }, [search, status, stage, page, limit]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const applyFilters = () => {
    setPage(1);
    fetchLeads();
  };

  return (
    <div className="space-y-6">
      <LeadsFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        stage={stage}
        setStage={setStage}
        onApply={applyFilters}
      />

      <Table leads={leads} loading={loading} />

      <LeadsPagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}
