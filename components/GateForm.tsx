"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GateForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.replace("/");
        router.refresh();
        return;
      }

      const data = await res.json().catch(() => null);
      setError(data?.error ?? "Incorrect password.");
      setPassword("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <label htmlFor="site-password" className="sr-only">
        Password
      </label>
      <input
        id="site-password"
        name="password"
        type="password"
        autoComplete="current-password"
        autoFocus
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (error) setError("");
        }}
        placeholder="Enter password"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "gate-error" : undefined}
        className="h-12 w-full rounded-md border border-border bg-elevated px-4 text-base text-white placeholder:text-white-30 outline-none transition-colors focus:border-orange focus:ring-1 focus:ring-orange"
      />

      {error && (
        <p id="gate-error" role="alert" className="mt-3 text-sm text-aon-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || password.length === 0}
        className="mt-5 h-12 w-full rounded-md bg-orange text-base font-semibold text-canvas transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Verifying…" : "Enter"}
      </button>
    </form>
  );
}
