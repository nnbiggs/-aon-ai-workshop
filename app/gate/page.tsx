import type { Metadata } from "next";
import GateForm from "@/components/GateForm";

export const metadata: Metadata = {
  title: "AI in the SDLC Workshop",
  robots: { index: false, follow: false },
};

export default function GatePage() {
  return (
    <main className="dot-grid flex min-h-[100dvh] w-full items-center justify-center bg-canvas px-4 py-12">
      <div className="flex w-full max-w-md flex-col items-center text-center">
        <h1 className="hero-title text-balance text-[2rem] leading-tight sm:text-4xl">
          AI in the SDLC Workshop
        </h1>

        <p className="mt-4 text-pretty text-sm leading-relaxed text-white-50">
          This site is private. Please enter the password to continue.
        </p>

        <div className="mt-8 w-full">
          <GateForm />
        </div>
      </div>
    </main>
  );
}
