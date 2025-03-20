import * as React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export type DataTableProps = {
    data: Record<string, any>[]
    columns: {
      colName: string
      colLabel: string
    }[]
    filterCol: string
}


export function DataTable({data, columns, filterCol}: DataTableProps) {
    return (
      <div className="w-full">
        <Table>
          <TableCaption>A list of your DAGs</TableCaption>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead className="font-bold text-base border-5">{column.colLabel}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow className={`my-10 text-base hover:bg-gray-600 hover:cursor-pointer leading-10 ${index % 2 == 1 ? 'bg-card': ''}`}>
                {columns.map((column) => (
                  <TableCell className="py-4">{row[column.colName]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }