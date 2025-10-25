interface ComponentSourceProps {
  name: string
}

export function ComponentSource({ name }: ComponentSourceProps) {
  return (
    <div className="bg-muted p-4 rounded border">
      <pre className="text-sm">
        <code>
          {`// Component source for ${name} would go here
// This would typically show the actual component code`}
        </code>
      </pre>
    </div>
  )
}
