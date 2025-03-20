import { Handle, Position } from "@xyflow/react"
import { FaPython } from "react-icons/fa"

export const GoToFlowNode = () => {
    const styleHandles = {
        background: '#14a3c7',
        width: '25px',
        height: '10px',
        borderRadius: '3px',
        border: 'None'
    }
    const divColor = 'border-green-800'
    return (
        <div className={`p-5 bg-card rounded border-4 ${divColor}`}>
            <Handle type="target" position={Position.Top} style={styleHandles}/>
            <Handle type="source" position={Position.Bottom} style={styleHandles}/>
            <div className="flex gap-x-4">
                <FaPython size={24} className="text-primmary"/>
                <span className="font-bold">GoToFlow Operator</span>
            </div>
            <div className="mt-3">
                <span className="bg-orange-700 p-1">@PythonOperator</span>
            </div>
        </div>
    )
}