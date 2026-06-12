export default function Footer() {
  return (
    <footer className="relative bg-canvas">
      <div className="glow-divider" />
      <div className="content-wrap py-8 sm:py-10">
        <div className="grid gap-6 text-center sm:gap-8 md:grid-cols-3 md:items-start md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-mono text-[11px] text-white-30">
              AI-native SDLC acceleration
            </p>
          </div>

          <div>
            <p className="font-mono text-[13px] text-white-50">
              AI in the SDLC Workshop
            </p>
            <p className="mt-1 font-mono text-[13px] text-orange">
              June, 2026
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-[11px] uppercase tracking-widest text-white-30">
              Confidential Draft
            </p>
          </div>
        </div>

        <p className="mt-6 border-t border-border pt-5 text-center font-mono text-[11px] text-white-30 sm:mt-8 sm:pt-6 md:text-left">
          © 2026 PwC. For discussion purposes only.
        </p>
      </div>
    </footer>
  );
}
