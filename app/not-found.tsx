import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f3efe6] px-6 text-center text-[#171512] pt-24">
      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#b24a2f]">
          404 / Lost record
        </p>
        <h1 className="font-display text-7xl tracking-[-0.05em]">
          Nothing here.
        </h1>
        <Link
          href="/shop"
          className="mt-8 inline-block underline underline-offset-8"
        >
          Back to the shop
        </Link>
      </div>
    </main>
  );
}
