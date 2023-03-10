import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondaryBgAl}}>
           
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.secondary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            degree={edu.degree}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            gpa = {edu.GPA}
                        />
                    ))}
                </div>
                {/* <div className="education-image">
                    <img src={theme.eduimg} alt=""/>
                </div> */}
            </div>
        </div>
    )
}

export default Education
