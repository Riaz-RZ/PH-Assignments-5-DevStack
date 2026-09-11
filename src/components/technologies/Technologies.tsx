import { use } from "react";
import type { Itechnology } from "../../types/TechnologyType";
import Technology from "../technology/Technology";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}
const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    console.log(technologies);
    return (
        <>
            <div className="container mx-auto py-4">
                <h1 className="whitespace-nowrap text-3xl font-bold text-slate-800">
                    Explore The <span className="text-purple-700">Technologies</span>
                </h1>
                <p className="text-[#475569] my-3">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="container mx-auto grid grid-cols-4 gap-4">
                {
                    technologies.map(technology => <Technology key={technology.id} technology={technology}></Technology>)
                }
            </div>
        </>
    );
};

export default Technologies;