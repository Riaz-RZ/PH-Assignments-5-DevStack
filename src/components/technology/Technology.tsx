import type { Itechnology } from "../../types/TechnologyType"

export interface TechnologyProps {
    technology: Itechnology
}

export default function Technology({ technology }: TechnologyProps) {
    console.log(technology);

    return (
        <>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                {/* Top section */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3">
                        <img
                            src={technology.icon}
                            alt={`${technology.name} icon`}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {technology.badge}
                    </span>
                </div>

                {/* Technology name and category */}
                <div className="mt-5">
                    <h2 className="text-xl font-bold text-slate-800">
                        {technology.name}
                    </h2>

                    <span className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                        {technology.category}
                    </span>
                </div>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">
                    {technology.description}
                </p>

                {/* Rating and difficulty */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-1.5">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-semibold text-slate-700">
                            {technology.rating}
                        </span>
                        <span className="text-xs text-slate-400">/ 5</span>
                    </div>

                    <span className="text-xs font-medium text-slate-500">
                        {technology.difficulty}
                    </span>
                </div>

            </div>
        </>
    )
}

