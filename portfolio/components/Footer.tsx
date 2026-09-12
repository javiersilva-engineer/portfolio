import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-border/60 py-10">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-6 text-[13.5px] text-paper-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {site.fullName}
        </span>
        <span className="font-mono text-[12.5px]">
          Alicante, España
        </span>
      </div>
    </footer>
  );
}
