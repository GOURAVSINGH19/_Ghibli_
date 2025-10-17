import { ArrowRight, Code2, Zap, Palette, Layers } from "lucide-react"

const components = [
    {
        id: 1,
        name: "Button",
        description: "Versatile button component with multiple variants and sizes",
        icon: Code2,
        category: "Forms",
    },
    {
        id: 2,
        name: "Card",
        description: "Flexible container component for organizing content",
        icon: Layers,
        category: "Layout",
    },
    {
        id: 3,
        name: "Input",
        description: "Text input field with validation and error states",
        icon: Code2,
        category: "Forms",
    },
]

export default function Grid() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {components.map((component) => {
                    return (
                        <div
                            key={component.id}
                            className="group min-h-[10rem] relative backdrop-blur-xl bg-white/1/1/2 border border-white/10 shadow-[var(--shadow-md)]  p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none" />
                            <div className="relative space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-semibold text-foreground">{component.name}</h3>
                                        <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground/70 group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                    <p className="text-sm text-foreground/60 leading-relaxed">{component.description}</p>
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-foreground/70 font-medium">
                                        {component.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
