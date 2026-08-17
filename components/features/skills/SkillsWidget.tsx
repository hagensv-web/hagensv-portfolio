'use client'

import { languages, otherSkills, technologies } from "@/data/skills"
import { useMemo, useState } from "react"
import SkillBar from "./SkillBar"

export default function SkillsWidget(){

    const [ showFullList, setShowFullList ] = useState<boolean>(false)

    const topLanguages = useMemo( () => languages.sort( (a, b) => b.proficiency - a.proficiency).slice(0,showFullList ? undefined : 5), [ showFullList ] )
    const topTechnologies = useMemo( () => technologies.sort( (a, b) => b.proficiency - a.proficiency).slice(0,showFullList ? undefined : 5), [ showFullList ] )
    const topOtherSkills = useMemo( () => otherSkills.sort( (a, b) => b.proficiency - a.proficiency).slice(0,showFullList ? undefined : 5), [ showFullList ] )

    const toggleFullList = () => {
        setShowFullList( show => !show )
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-3 md:col-span-1">
                    <h3>Languages:</h3>
                    { topLanguages.map( skill => (
                        <SkillBar key={skill.name} skill={skill} />
                    )) }
                </div>
                <div className="col-span-3 md:col-span-1">
                    <h3>Technologies:</h3>
                    { topTechnologies.map( skill => (
                        <SkillBar key={skill.name} skill={skill} />
                    )) }
                </div>
                <div className="col-span-3 md:col-span-1">
                    <h3>Other Skills:</h3>
                    { topOtherSkills.map( skill => (
                        <SkillBar key={skill.name} skill={skill} />
                    )) }
                </div>
            </div>
            <button onClick={toggleFullList} className="block cursor-pointer rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 my-5 m-auto px-4 py-2">
                { showFullList ? "Show Less" : "Show More" }
            </button>
        </div>
    )
}