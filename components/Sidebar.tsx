"use client";

import { Logs, CircleGauge, Package, Heart, Layers } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: CircleGauge,
  },
  {
    title: "Products",
    url: "/products",
    icon: Package,
  },
  {
    title: "Order",
    url: "/orders",
    icon: Logs,
  },
  {
    title: "Favorite",
    url: "/favorites",
    icon: Heart,
  },
  {
    title: "Product Stock",
    url: "/stocks",
    icon: Layers,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="font-[family-name:var(--font-nunito-sans)] ">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="justify-center text-black text-xl font-extrabold">
            <Link href="/admin/dashboard">
              <span className="text-[#4880FF]">Dash</span>Stack
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="p-6 space-y-3">
              {items.map((item) => {
                const isActive = pathname === `/admin${item.url}`;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`rounded-xl hover:text-white font-medium ${isActive ? "bg-[#4880FF] text-white" : "bg-white"} hover:bg-[#4880FF] p-6`}
                    >
                      <Link href={`/admin${item.url}`}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
