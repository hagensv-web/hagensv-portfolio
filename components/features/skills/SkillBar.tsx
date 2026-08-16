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
        <div className="bg-zinc-400 dark:bg-zinc-700 rounded-xl text-right text-sm">
            <div className={`bg-green-700 dark:bg-green-900 text-white rounded-xl pr-4`} style={{ width: prof }}>
                <span>{ getProficiencyLabel(skill.proficiency) }</span>
            </div>
        </div>
    </div>
}