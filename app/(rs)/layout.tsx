export default function RSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* This is where the header is gonna be */}
      <div className="px-4 py-2">{children}</div>
    </div>
  );
}
