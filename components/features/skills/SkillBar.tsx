import { Skill } from "@/data/resume"
import { getProficiencyLabel } from "@/data/skills"
import { useMemo } from "react"

interface Props {
    skill: Skill
}

export default function SkillBar({ skill }: Props ){
    const prof = useMemo( () => `${Math.round(skill.proficiency*100)}%`, [skill])

    return <div>
        <p>{skill.name}</p>
        <div className="bg-black rounded text-right text-sm">
            <div className={`bg-white text-black rounded pr-2`} style={{ width: prof }}>
                <span>{ getProficiencyLabel(skill.proficiency) }</span>
            </div>
        </div>
    </div>
}