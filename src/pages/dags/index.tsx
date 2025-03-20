import { DataTable } from "@/components/table";
import React from "react";
import { PrettyNumber } from "@/components/ui/pretty-number";
import { TbRefresh, TbTrash } from "react-icons/tb";

export default function DagsPage () {
    const headers = [
        // {accessorKey: 'name', header: 'Name'},
        // {acessoryKey: 'runs', header: 'Runs'},
        // {accessoryKey: 'actions', header: 'Actions'},
        {
            colName: 'name',
            colLabel: 'Name'
        }, {
            colName: 'runs',
            colLabel: 'Runs'
        }, {
            colName: 'actions',
            colLabel: 'Actions'
        }
    ]
    const bodyDagTable = [
        {name: <span className="font-bold text-primmary text-lg">Dag 1</span>, runs: <div className="flex gap-x-2"><PrettyNumber value={500} className="border-green-500"/> <PrettyNumber value={80} className="border-yellow-500"/></div>, actions: <div className="flex gap-x-2"><TbTrash color="#ff0000" size={24}/> <TbRefresh color="#ffff00" size={24}/></div>, id: "batatinha"},
        {name: <span className="font-bold text-primmary text-lg">Dag 2</span>, runs: <div className="flex gap-x-2"><PrettyNumber value={500} className="border-green-500"/> <PrettyNumber value={80} className="border-yellow-500"/></div>, actions: <div className="flex gap-x-2"><TbTrash color="#ff0000" size={24}/> <TbRefresh color="#ffff00" size={24}/></div>, id: "batatinha"},
        {name: <span className="font-bold text-primmary text-lg">Dag 2</span>, runs: <div className="flex gap-x-2"><PrettyNumber value={500} className="border-green-500"/> <PrettyNumber value={80} className="border-yellow-500"/></div>, actions: <div className="flex gap-x-2"><TbTrash color="#ff0000" size={24}/> <TbRefresh color="#ffff00" size={24}/></div>, id: "batatinha"},

    ]
    return (
        <div className="w-full">
        <div className="w-full">
            <div className="w-full mt-12">
                <DataTable columns={headers} data={bodyDagTable} filterCol="name"/>
            </div>
        </div>
        </div>
    )
} 