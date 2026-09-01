import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-t p-4">
      <div className="mx-auto flex max-w-xl justify-around">
        <Link href="/">Home</Link>
        <Link href="/wardrobe">Wardrobe</Link>
        <Link href="/outfits">Outfits</Link>
        <Link href="/planner">Plan</Link>
      </div>
    </nav>
  );
}