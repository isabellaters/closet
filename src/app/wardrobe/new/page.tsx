export default function NewWardrobeItemPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Add Wardrobe Item</h1>

      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Item name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>

          <input
            id="category"
            name="category"
            type="text"
            className="mt-1 w-full rounded-lg border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Save item
        </button>
      </form>
    </main>
  );
}