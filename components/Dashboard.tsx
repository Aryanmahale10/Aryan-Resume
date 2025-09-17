
import React, { useState, useMemo } from 'react';
import Card from './Card';
import TimelineItem from './TimelineItem';
import type { Experience, AppSkill, ExpertiseCategory } from '../types';

interface DashboardProps {
    coreSkills: string[];
    softSkills: string[];
    experience: Experience[];
    appSkills: AppSkill[];
    expertise: ExpertiseCategory[];
}

type SortOrder = 'newest' | 'oldest';

const Dashboard: React.FC<DashboardProps> = ({ coreSkills, softSkills, experience, appSkills, expertise }) => {
    const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

    const sortedExperience = useMemo(() => {
        return [...experience].sort((a, b) => {
            const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
            const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
            // FIX: The sorting logic for 'oldest' was attempting to subtract an object `b` from a number `dateA`.
            // Corrected to subtract `dateB` from `dateA` for proper ascending date sorting.
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });
    }, [experience, sortOrder]);
    
    return (
        <div className="flex flex-col gap-8">
            <Card title="Career Journey">
                <div className="mb-6 animate-slide-in">
                    <p className="text-sm text-dark-text-secondary mb-2">Sort by:</p>
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => setSortOrder('newest')}
                            className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${sortOrder === 'newest' ? 'bg-dark-accent/20 text-dark-accent border-dark-accent/50 shadow-md' : 'bg-dark-surface border-dark-border text-dark-text-primary hover:bg-slate-700'}`}>
                            Newest First
                        </button>
                        <button 
                             onClick={() => setSortOrder('oldest')}
                             className={`px-4 py-2 text-sm rounded-lg border transition-all duration-300 ${sortOrder === 'oldest' ? 'bg-dark-accent/20 text-dark-accent border-dark-accent/50 shadow-md' : 'bg-dark-surface border-dark-border text-dark-text-primary hover:bg-slate-700'}`}>
                            Oldest First
                        </button>
                    </div>
                </div>
                <div className="relative border-l-2 border-dark-border pl-6 space-y-8">
                    {sortedExperience.map((job, index) => (
                        <TimelineItem key={index} job={job} />
                    ))}
                </div>
            </Card>

            <Card title="Expertise">
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="font-semibold text-dark-text-primary mb-3">Core Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                            {coreSkills.map((skill) => (
                                <span key={skill} className="bg-dark-accent/10 text-dark-accent text-sm font-medium px-3 py-1 rounded-full border border-dark-accent/20">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-dark-text-primary mb-3">Soft Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                            {softSkills.map((skill) => (
                                <span key={skill} className="bg-dark-accent/10 text-dark-accent text-sm font-medium px-3 py-1 rounded-full border border-dark-accent/20">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>

            <Card title="Business Proficiency">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertise.map((category) => (
                        <div key={category.title} className="bg-dark-bg p-4 rounded-xl">
                            <h4 className="font-semibold text-dark-text-primary mb-3 border-b border-dark-border pb-2">{category.title}</h4>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="bg-dark-accent/10 text-dark-accent text-sm font-medium px-3 py-1 rounded-full border border-dark-accent/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            <Card title="Tools & Apps Proficiency">
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                   {appSkills.map((skill) => (
                       <div 
                           key={skill.name} 
                           className="flex flex-col items-center justify-center p-4 bg-dark-surface/50 rounded-2xl border border-dark-border text-center transition-all duration-300 hover:bg-dark-surface hover:border-dark-border/80 hover:-translate-y-1 hover:shadow-glow"
                       >
                           <skill.logo className="w-12 h-12 mb-3" />
                           <span className="text-sm font-medium text-dark-text-primary">{skill.name}</span>
                       </div>
                   ))}
               </div>
           </Card>
            
        </div>
    );
};

export default Dashboard;