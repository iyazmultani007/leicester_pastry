"use client";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import React from "react";

function Dashboard() {
  return (
    <ProtectedRoute>
      <div>dashboard</div>
    </ProtectedRoute>
  );
}

export default Dashboard;
