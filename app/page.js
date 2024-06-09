"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <main>
        <h1>Hello</h1>
      </main>
    </ProtectedRoute>
  );
}
