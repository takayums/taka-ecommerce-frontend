export default function LayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen items-center justify-center font-[family-name:var(--font-nunito-sans)] bg-[#568AFF]">
      {children}
    </main>
  );
}
