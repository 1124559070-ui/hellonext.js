"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadMessage() {
      const response = await fetch("/api/hello");

      if (response.ok) {
        const data: { message: string } = await response.json();
        setMessage(data.message);
      }
    }

    void loadMessage();
  }, []);

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {message && (
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          {message}
        </h1>
      )}
    </main>
  );
}
