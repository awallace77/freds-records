import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-black/15 pt-8 md:flex-row">
        <p className="text-sm uppercase tracking-[0.2em]">
          Fred&apos;s Records
        </p>
        <div className="flex gap-6 text-sm opacity-60">
          <Link href="/shop" className="hover:opacity-100">
            Shop
          </Link>
          <a href="#" className="hover:opacity-100">
            Instagram
          </a>
          <a href="#" className="hover:opacity-100">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
