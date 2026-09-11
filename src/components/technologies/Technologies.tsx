
import { use, useState } from "react";
import { toast } from "react-toastify";
import type { Itechnology } from "../../types/TechnologyType";
import Technology from "../technology/Technology";
import YourStack from "../YourStack";


interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);

    const [stack, setStack] = useState<Itechnology[]>([]);

    // Add technology
    const handleAdd = (technology: Itechnology) => {
        if (stack.some(item => item.id === technology.id)) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }

        setStack(prev => [...prev, technology]);

        toast.success(`${technology.name} added to stack!`);
    };

    // Remove one technology
    const handleRemove = (id: string) => {
        const technology = stack.find(item => item.id === id);

        setStack(prev => prev.filter(item => item.id !== id));

        toast.info(`${technology?.name} removed from stack!`);
    };

    // Remove all technologies
    const handleRemoveAll = () => {
        setStack([]);

        toast.success("All technologies removed from stack!");
    };

    return (
        <>
            <div className="container mx-auto py-4">
                <h1 className="whitespace-nowrap text-3xl font-bold text-slate-800">
                    Explore The{" "}
                    <span className="text-purple-700">
                        Technologies
                    </span>
                </h1>

                <p className="my-3 text-[#475569]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="container mx-auto grid grid-cols-4 gap-4">

                {/* Technology Cards */}
                <div className="col-span-3 grid grid-cols-3 gap-4">
                    {technologies.map(technology => (
                        <Technology
                            key={technology.id}
                            technology={technology}
                            onAdd={handleAdd}
                            isAdded={stack.some(
                                item => item.id === technology.id
                            )}
                        />
                    ))}
                </div>

                {/* Your Stack */}
                <div className="col-span-1">
                    <YourStack
                        stack={stack}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>

            </div>
        </>
    );
};

export default Technologies;