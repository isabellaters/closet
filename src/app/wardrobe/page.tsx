import Link from "next/link";

export default function WardrobePage() {
  return (
    <main className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Wardrobe</h1>

        <Link
          href="/wardrobe/new"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Add item
        </Link>
      </div>
    </main>
  );
}