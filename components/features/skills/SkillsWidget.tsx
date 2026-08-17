'use client'

import { languages, otherSkills, technologies } from "@/data/skills"
import { useMemo, useState } from "react"
import SkillBar from "./SkillBar"
import SkillToggleButton from "./SkillToggleButton"

export default function SkillsWidget(){

    const [ showAllLanguages, setShowAllLanguages ] = useState<boolean>(false)
    const [ showAllTechnologies, setShowAllTechnologies ] = useState<boolean>(false)
    const [ showAllOtherSkills, setShowallOtherSkills ] = useState<boolean>(false)

    const topLanguages = useMemo( () => languages.sort( (a, b) => b.proficiency - a.proficiency).slice(0,showAllLanguages ? undefined : 5), [ showAllLanguages ] )
    const topTechnologies = useMemo( () => technologies.sort( (a, b) => b.proficiency - a.proficiency).slice(0,showAllTechnologies ? undefined : 5), [ showAllTechnologies ] )
    const topOtherSkills = useMemo( () => otherSkills.sort( (a, b) => b.proficiency - a.proficiency).slice(0,showAllOtherSkills ? undefined : 5), [ showAllOtherSkills ] )

    const showFullList = useMemo( () => 
        showAllLanguages ? 
            (showAllTechnologies || showAllOtherSkills) : 
            (showAllTechnologies && showAllOtherSkills)  
    , [ showAllLanguages, showAllTechnologies, showAllOtherSkills ])

    const toggleAllLanguages = () => {
        setShowAllLanguages( show => !show )
    }

    const toggleAllTechnologies = () => {
        setShowAllTechnologies( show => !show )
    }

    const toggleAllOtherSkills = () => {
        setShowallOtherSkills( show => !show )
    }

    const toggleFullList = () => {
        setShowAllLanguages( !showFullList )
        setShowAllTechnologies( !showFullList )
        setShowallOtherSkills( !showFullList )
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-3 md:col-span-1">
                    <h3>Languages:</h3>
                    { topLanguages.map( skill => (
                        <SkillBar key={skill.name} skill={skill} />
                    )) }
                    <SkillToggleButton onClick={toggleAllLanguages} className="block md:hidden">
                        { showAllLanguages ? "Show Less" : "Show More" }
                    </SkillToggleButton>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <h3>Technologies:</h3>
                    { topTechnologies.map( skill => (
                        <SkillBar key={skill.name} skill={skill} />
                    )) }
                    <SkillToggleButton onClick={toggleAllTechnologies} className="block md:hidden">
                        { showAllTechnologies ? "Show Less" : "Show More" }
                    </SkillToggleButton>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <h3>Other Skills:</h3>
                    { topOtherSkills.map( skill => (
                        <SkillBar key={skill.name} skill={skill} />
                    )) }
                    <SkillToggleButton onClick={toggleAllOtherSkills} className="block md:hidden">
                        { showAllOtherSkills ? "Show Less" : "Show More" }
                    </SkillToggleButton>
                </div>
            </div>
            <SkillToggleButton onClick={toggleFullList} className="hidden md:block">
                { showFullList ? "Show Less" : "Show More" }
            </SkillToggleButton>
        </div>
    )
}