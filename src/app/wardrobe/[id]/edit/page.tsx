
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/prisma/db";
import { updateWardrobeItem } from "./actions";

export const dynamic = "force-dynamic";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditWardrobeItemPage({
  params,
}: EditPageProps) {
  const { id } = await params;
  const itemId = Number(id);

  if (!Number.isSafeInteger(itemId) || itemId <= 0) {
    notFound();
  }

  const saveItem = updateWardrobeItem.bind(null, itemId);

  const items = await db.orm.public.WardrobeItem
    .select("id", "name", "category")
    .where({ id: itemId })
    .all();

  const item = items[0];

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-2xl font-semibold">
        Edit Wardrobe Item
      </h1>

      <form action={saveItem} className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium"
          >
            Item name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            defaultValue={item.name}
            required
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium"
          >
            Category
          </label>

          <input
            id="category"
            name="category"
            type="text"
            defaultValue={item.category}
            required
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-white">
            Save changes
          </button>

          <Link
            href="/wardrobe"
            className="text-sm underline"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}
