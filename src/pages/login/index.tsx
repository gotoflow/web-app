import { LogoIcon } from "@/components/ui/logo-icon"
import { LoginForm } from "./components/login-form"
import { TopMenu } from "@/components/top-menu"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden relative">
      <TopMenu/>
      <div className="w-1/2">
        <div className="relative w-full flex justify-center w-full">
          <div className="flex flex-col px-7 py-10 border-zinc-50 border-1 bg-card items-center w-1/2 h-100">
            <LogoIcon
              width={70}
              height={70}
              className="mb-3"
            />
            <p className="font-bold text-xl mb-5">Login Into <span className="text-primmary font-extrabold">GoToFlow</span></p>
            <div className="w-full flex flex-col">
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}