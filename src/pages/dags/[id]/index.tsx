import { AnimatedSVGEdge } from '@/components/react-flow/edge';
import { GoToFlowNode } from '@/components/react-flow/node';
import { Background, ReactFlow } from '@xyflow/react';
import { useMemo } from 'react';

export default function DagView (){
    const nodeTypes = useMemo(() => ({ goToFlow: GoToFlowNode }), []);
    const edgeTypes = {
        animatedSvg: AnimatedSVGEdge,
      };
    const nodes = [
        {
            id: '1',
            type: 'goToFlow',
            data: { label: 'Node 1' },
            position: { x: 250, y: 5 }
        }, {
            id: '2',
            type: 'goToFlow',
            data: { label: 'Node 2' },
            position: { x: 100, y: 200 }
        }, {
            id: '3',
            type: 'goToFlow',
            data: { label: 'Node 3' },
            position: { x: 400, y: 200 }
        }
    ]
    const edges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            type: 'animatedSvg'
        }, {
            id: 'e2-3',
            source: '1',
            target: '3',
            type: 'animatedSvg'
        }
    ]
    return (
        <div className='w-100 h-screen'>
            <ReactFlow
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                nodes={nodes}
                edges={edges}
                >
                <Background gap={16}/>
            </ReactFlow>
        </div>
    )
}