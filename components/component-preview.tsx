import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  name: string
  description?: string
  className?: string
}

export function ComponentPreview({ 
  name, 
  description, 
  className 
}: ComponentPreviewProps) {
  return (
    <div className={cn("border rounded-lg p-4", className)}>
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="bg-muted/50 p-4 rounded border">
        <p className="text-sm text-muted-foreground">
          Component preview for {name} would go here
        </p>
      </div>
    </div>
  )
}
