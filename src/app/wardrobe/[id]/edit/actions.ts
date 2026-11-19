"use server";

import { redirect } from "next/navigation";
import { db } from "@/prisma/db";

export async function updateWardrobeItem(
  itemId: number,
  formData: FormData
) {
  const name = formData.get("name");
  const category = formData.get("category");

  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Item name is required");
  }

  if (typeof category !== "string" || category.trim() === "") {
    throw new Error("Category is required");
  }

  if (!Number.isSafeInteger(itemId) || itemId <= 0) {
    throw new Error("Invalid wardrobe item ID");
  }

  await db.orm.public.WardrobeItem
    .where({ id: itemId })
    .update({
      name: name.trim(),
      category: category.trim(),
    });

  redirect("/wardrobe");
}
