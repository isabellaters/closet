"use client";

import { useState } from "react";
import { deleteWardrobeItem } from "./actions";

type DeleteItemButtonProps = {
  itemId: number;
};

export default function DeleteItemButton({
  itemId,
}: DeleteItemButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      await deleteWardrobeItem(itemId);
    } catch (error) {
      console.error("Failed to delete item:", error);
      alert("Unable to delete this item. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50"
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
