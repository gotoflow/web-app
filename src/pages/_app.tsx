import { AppSidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/styles/globals.css";
import '@xyflow/react/dist/style.css';
import type { AppProps } from "next/app";
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="h-screen w-full m-0 p-o flex">
          {router.asPath.endsWith("/login") ? <></> : <AppSidebar />}
          <SidebarTrigger />
          <div className="px-5 w-full">
          <Component {...pageProps} />
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
  
}
