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
        <div className="container mx-auto">
            <h1>Explore The Technologies</h1>
            <p>Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="container mx-auto grid grid-cols-4">
            {
            technologies.map(technology => <Technology key={technology.id} technology={technology}></Technology>)
        }
        </div>
        </>
    );
};

export default Technologies;