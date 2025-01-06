import { Hospital, AppWindow, ClipboardPen, Signature } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger 
} from "@/components/ui/sidebar"

// Menu items.
const items = [
    {
        title: "Patients",
        url: " /jandd_vite/admin",
        icon: Hospital,
    },
    {
        title: "Applicants",
        url: " /jandd_vite/applicants",
        icon: AppWindow,
    },
    {
        title: "Register Staff",
        url: " /jandd_vite/register-staff",
        icon: ClipboardPen,
    },
    {
        title: "Staff Details",
        url: " /jandd_vite/staff-details",
        icon: Signature,
    },
    {
      title: "Staff Accounts",
      url: " /jandd_vite/staff-accounts",
      icon: Signature,
  }
]

interface AppSidebarProps {
  toggleSidebarParent: () => void; // Define the type for the prop
}

export function AppSidebar({ toggleSidebarParent }: AppSidebarProps) {
  return (
    <>
        <SidebarTrigger toggleSidebarParent={toggleSidebarParent} className="ml-1 mb-4 mt-1 px-4 py-2 text-gray-600 " />

        <Sidebar className="w-64 h-screen bg-gray-800 text-gray-100 flex flex-col">
            <SidebarContent className="flex-grow overflow-y-auto">
                <SidebarGroup>
            
                <SidebarTrigger toggleSidebarParent={toggleSidebarParent} className="ml-1 mb-4 px-4 py-2 text-gray-600 " />
                <SidebarGroupLabel className="mb-4 px-4 py-2 text-gray-600 uppercase tracking-wide text-sm">
                    Admin Panel   
                </SidebarGroupLabel>
                <SidebarGroupContent>
                <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className=" text-gray-500 group-hover:text-gray transition "/>
                      <span className=" text-gray-700 group-hover:text-gray transition ">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    </>
    

  )
}
