import { use, useState } from "react";
import type { Itechnology } from "../../types/TechnologyType";
import Technology from "../technology/Technology";
import YourStack from "../YourStack";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}
const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    const [stack, setStack] = useState<Itechnology[]>([]);

    const handleAdd = (technology: Itechnology) => {
        if (stack.some(item => item.id === technology.id)) {
            alert(`${technology.name} is already in your stack!`);
            return;
        }

        setStack(prev => [...prev, technology]);
    };

    const handleRemove = (id: string) => {
        setStack(prev => prev.filter(item => item.id !== id));
    };

    const handleRemoveAll = () => {
        setStack([]);
    };
    return (
        <>
            <div className="container mx-auto py-4">
                <h1 className="whitespace-nowrap text-3xl font-bold text-slate-800">
                    Explore The <span className="text-purple-700">Technologies</span>
                </h1>

                <p className="my-3 text-[#475569]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">

                {/* Technology Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {technologies.map(technology => (
                        <Technology
                            key={technology.id}
                            technology={technology}
                            onAdd={handleAdd}
                            isAdded={stack.some(item => item.id === technology.id)}
                        />
                    ))}
                </div>

                {/* Your Stack Sidebar */}
                <YourStack
                    stack={stack}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                />

            </div>
        </>
    );
};

export default Technologies;