import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface ComparisonRow {
  label: string
  cells: [string, string, string]
}

interface ComparisonTableProps {
  heading: string
  columns: [string, string, string]
  rows: ComparisonRow[]
  recommendedIndex?: 0 | 1 | 2
  className?: string
}

function ComparisonTable({
  heading,
  columns,
  rows,
  recommendedIndex = 1,
  className,
}: ComparisonTableProps) {
  return (
    <div className={cn('space-y-6', className)}>
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-fg-primary text-center">
        {heading}
      </h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse" role="table">
          <thead>
            <tr>
              <th className="bg-bg-elevated p-4 md:px-6 text-left text-sm font-medium text-fg-secondary sticky left-0 z-10 min-w-[160px] md:min-w-[200px] border-r border-border-subtle border-b border-b-white/[0.10]">
                <span className="sr-only">Feature</span>
              </th>
              {columns.map((col, i) => (
                <th
                  key={col}
                  scope="col"
                  className={cn(
                    'p-4 md:px-6 text-center font-heading text-sm md:text-base font-semibold border-b border-b-white/[0.10]',
                    i === recommendedIndex
                      ? 'bg-primary/[0.08] border-t-[3px] border-t-primary text-fg-primary'
                      : 'bg-bg-elevated text-fg-primary'
                  )}
                >
                  {i === recommendedIndex && (
                    <Badge variant="primary" size="sm" className="mb-2 block mx-auto w-fit">
                      Recommended
                    </Badge>
                  )}
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className={cn(
                    'p-3.5 md:px-6 text-left text-sm text-fg-secondary font-normal sticky left-0 z-10 min-w-[160px] md:min-w-[200px] border-r border-border-subtle',
                    rowIdx % 2 === 0 ? 'bg-bg-base' : 'bg-bg-inset'
                  )}
                >
                  {row.label}
                </th>
                {row.cells.map((cell, colIdx) => (
                  <td
                    key={colIdx}
                    className={cn(
                      'p-3.5 md:px-6 text-center text-sm',
                      colIdx === recommendedIndex ? 'bg-primary/[0.08]' : '',
                      rowIdx % 2 === 0
                        ? colIdx === recommendedIndex
                          ? 'bg-primary/[0.08]'
                          : 'bg-bg-base'
                        : colIdx === recommendedIndex
                          ? 'bg-primary/[0.06]'
                          : 'bg-bg-inset',
                      'text-fg-primary'
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export { ComparisonTable }
export type { ComparisonRow, ComparisonTableProps }
