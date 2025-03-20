import Image from "next/image"
import {Kanit, Inter} from "next/font/google"
import { SiMlflow } from "react-icons/si";
import { TbHome, TbLayoutDashboard, TbSettings, TbUser } from "react-icons/tb";
import { IconBase } from "react-icons";
const kanit = Kanit({subsets: ["latin"], weight: "600", style: "normal"})
const inter = Inter({subsets: ["latin"], style: "normal"})
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

type SideBarItemProps = {
    Icon: typeof IconBase;
    title: string;
}

const SideBarItem = ({Icon, title}: SideBarItemProps) => {
    return (
        <div className="flex items-center justify-center gap-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-background rounded-full">
                <Icon className="text-white text-xl"/>
            </div>
            <p className={`${kanit.className} font-bold text-lg`}>{title}</p>
        </div>
    )
}


export const AppSidebar = () => {
    const items = [
        {
            title: "Home",
            url: "#",
            icon: TbHome,
        },
        {
            title: "Dashboard",
            url: "#",
            icon: TbLayoutDashboard,
        },
        {
            title: "Flows",
            url: "#",
            icon: SiMlflow,
        },
        {
            title: "Settings",
            url: "#",
            icon: TbSettings,
        },
    ]
    const userItems = [
        {
            title: "Manage Users",
            url: "#",
            icon: TbUser,
        },
    ]
    return (
        <Sidebar className="bg-background">
            <SidebarHeader>
                <div className="flex items-center h-14 gap-x-5 py-10">
                    <Image
                        src="/gotoflow_icon.svg"
                        width={40}
                        height={40}
                        alt="Logo"
                    />
                    <h1 className={`text-white text-lg font-bold ${kanit.className}`}>GoToFlow</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                <item.icon/>
                                <span className="text-base">{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Users</SidebarGroupLabel>
                    <SidebarMenu>
                        {userItems.map((item) => (
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                <item.icon/>
                                <span className="text-base">{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}