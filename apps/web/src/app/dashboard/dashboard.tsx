"use client";
import { authClient } from "@/lib/auth-client";

export default function Dashboard({
  session,
}: {
  session: typeof authClient.$Infer.Session;
}) {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <p className="mb-6">
        Welcome, {session?.user?.name || session?.user?.email}!
      </p>
    </div>
  );
}
