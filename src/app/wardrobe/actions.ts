"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/prisma/db";

export async function deleteWardrobeItem(itemId: number) {
  if (!Number.isSafeInteger(itemId) || itemId <= 0) {
    throw new Error("Invalid wardrobe item ID");
  }

  await db.orm.public.WardrobeItem
    .where({ id: itemId })
    .delete();

  revalidatePath("/wardrobe");
}
