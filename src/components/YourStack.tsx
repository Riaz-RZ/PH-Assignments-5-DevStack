import type { Itechnology } from "../types/TechnologyType";


interface YourStackProps {
    stack: Itechnology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

export default function YourStack({
    stack,
    onRemove,
    onRemoveAll,
}: YourStackProps) {
    return (
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl font-bold text-slate-800">
                    Your Stack
                </h2>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                {stack.length} Technology Selected
            </span>

            {stack.length === 0 ? (
                <p className="py-6 text-center text-sm text-slate-400 border border-slate-200 mt-4 rounded-2xl">
                    Your Stack is empty.
                </p>
            ) : (
                <div className="mt-5 flex flex-col gap-3">
                    {stack.map((technology) => (
                        <div
                            key={technology.id}
                            className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                        >
                            <img
                                src={technology.icon}
                                alt={`${technology.name} icon`}
                                className="h-10 w-10 object-contain"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-slate-800">
                                    {technology.name}
                                </h3>
                                <p className="text-xs text-slate-500">
                                    {technology.category}
                                </p>
                            </div>

                            <button
                                onClick={() => onRemove(technology.id)}
                                className="cursor-pointer rounded-lg px-2 py-1 text-lg text-red-500 hover:bg-red-50"
                                aria-label={`Remove ${technology.name}`}
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={onRemoveAll}
                        className="mt-2 w-full rounded-xl bg-red-500 py-2 font-medium text-white hover:bg-red-600"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </aside>
    );
}