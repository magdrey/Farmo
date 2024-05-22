import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col h-[80vh] justify-between">
        <Link href="/bot">Go to chat</Link>
        <div>
          <p className="text-sm text-purple-700"> psssssssssst!!!</p>
          <p className="text-xs text-blue-700">just an interface</p>
        </div>
      </div>
    </main>
  );
}
