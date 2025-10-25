'use client'
import Sidenav from "./Sidenav";


export default function Grid() {

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 border-l-1 border-r-1 border-[var(--bg-light)] flex ">
            <div className="min-h-full">
                <Sidenav />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  border-b-1 border-[var(--bg-light)]">
                <div
                    className="group min-h-[24rem] relative  p-6  cursor-pointer overflow-hidden border-b-1 md:border-b-0 border-[var(--bg-light)]"
                >
                  card
                </div>
            </div>
        </div>
    )
}
