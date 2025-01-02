import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="font-[family-name:var(--font-nunito-sans)] flex flex-col w-full">
        <div className="bg-white px-5 py-3">
          <SidebarTrigger />
        </div>
        <div className="p-5 bg-[#F5F6FA] flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
}
