import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center flex-col sm:flex-row">
          <div>Welcome to my Blog</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link className="flex gap-1 text-sm align-middle" href={"/cv"}>
          <LinkIcon className="size-4" /> CV
        </Link>
      </footer>
    </div>
  );
}
