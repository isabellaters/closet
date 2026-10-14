import Link from "next/link";
import { db } from "@/prisma/db";

export default async function WardrobePage() {
   const items = await db.orm.public.WardrobeItem
    .select("id", "name", "category")
    .all();

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

      {items.length === 0 ? (
        <p className="mt-8 text-gray-500">
          Your wardrobe is empty. Add your first item!
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border p-5"
            >
              <h2 className="text-lg font-semibold">
                {item.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
