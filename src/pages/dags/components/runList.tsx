import { PrettyNumber } from "@/components/ui/pretty-number"

export const RunList = () => {
    return(
        <div className="w-full flex gap-x-2 text-sm">
            <PrettyNumber value={10} type="danger"/>
            <PrettyNumber value={10} type="warning"/>
            <PrettyNumber value={10} type="success"/>
        </div>
    )
}