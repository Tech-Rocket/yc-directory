import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginModal from "@/components/myComponents/Login/LoginModal";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="mb-4">Home page</h1>
        <LoginModal />
      </main>
    </>
  );
}
