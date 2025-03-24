import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh text-white">
        <div>
          <h1>
            Dan's Computer <br /> Repair Shop
          </h1>
          <address>
            555 Gateway Lane <br />
            Kansas City, KS 55555
          </address>
          <p>Open daily: 9am to 5pm</p>

          <Link href="tel:777777777"> 777-777-7777</Link>
        </div>
      </main>
    </div>
  );
}
