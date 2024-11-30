import { ThemeToggle } from "./ui/theme-toggle"
import { FaGithubAlt } from "react-icons/fa";
export const TopMenu = () => {
    return (
        <div className="w-full fixed inset-y-0 py-3 h-fit flex items-center gap-x-5 justify-end px-10 z-50">
            <ThemeToggle/>
            <FaGithubAlt className=""/>
        </div>
    )
}