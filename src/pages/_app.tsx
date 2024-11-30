import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
      <div className="h-screen w-full m-0 p-o flex">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
  
}
