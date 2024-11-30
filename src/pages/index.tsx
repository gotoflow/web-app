import { LogoIcon } from "@/components/ui/logo-icon"
import { LoginForm } from "./login/components/login-form"
import { TopMenu } from "@/components/top-menu"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="w-full flex content-center justify-center justify-items-center items-center overflow-hidden relative">
      <div className="absolute left-1/4 top-2/4 z-0">
        <Image
          src="/blob.svg"
          width={400}
          height={400}
          className="text-primmary blur-md animate-spin-slow delay-1000"
          color="#017CEE"
          alt="Blob image for animation"
        />
      </div>
      <div className="absolute top-0 right-1/4 z-0">
        <Image
          src="/blob.svg"
          width={400}
          height={400}
          className="text-primmary blur-md animate-spin-slow ease-in delay-300"
          color="#017CEE"
          alt="Blob image for animation"
        />
      </div>
      <div className="z-10 relative w-full flex flex-col justify-center content-center justify-items-center items-center">
        <TopMenu/>
        <div className="flex flex-col px-7 py-10 border-zinc-50 border-1 bg-card justify-center content-center justify-items-center items-center w-fit">
          <LogoIcon
            width={70}
            height={70}
            className="mb-3"
          />
          <p className="font-bold text-xl mb-5">Login Into <span className="text-primmary font-extrabold">GoToFlow</span></p>
          <div className="w-fit flex flex-col">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  )
}