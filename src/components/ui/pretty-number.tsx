export type PrettyNumberProps = {
    value: number,
    className?: string,
}

export const PrettyNumber = ({value, className}: PrettyNumberProps) => {
    return (
        <div className={`rounded-full border-2  p-1 w-12 h-12 flex items-center justify-center ${className}`}>
            <span className={`font-bold`}>{value}</span>
        </div>
    )
}