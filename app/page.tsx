import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginModal from "@/components/myComponents/LoginModal";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="mb-4">Home page</h1>
        <LoginModal />
      </main>
    </>
  );
}
