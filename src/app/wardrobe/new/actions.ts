"use server";

import { redirect } from "next/navigation";
import { db } from "@/prisma/db";

export async function createWardrobeItem(formData: FormData) {
  const name = formData.get("name");
  const category = formData.get("category");

  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Item name is required");
  }

  if (typeof category !== "string" || category.trim() === "") {
    throw new Error("Category is required");
  }

  const devUser = await db.orm.public.User.upsert({
    create: {
      email: "dev@closet.local",
      name: "Dev User",
    },
    update: {
      name: "Dev User",
    },
    conflictOn: {
      email: "dev@closet.local",
    },
  });

  await db.orm.public.WardrobeItem.create({
    userId: devUser.id,
    name: name.trim(),
    category: category.trim(),
  });

  redirect("/wardrobe");
}