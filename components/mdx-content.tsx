"use client"

import { useMDXComponents } from "@/components/mdx-components"
import { getMDXComponent } from "next-contentlayer/hooks"

interface MDXContentProps {
  code: string
}

export function MDXContent({ code }: MDXContentProps) {
  const MDXComponent = getMDXComponent(code)
  const components = useMDXComponents({})
  
  return <MDXComponent components={components} />
}
