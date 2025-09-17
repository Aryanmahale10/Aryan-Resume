import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface SkillBarProps {
    skill: string;
    level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
    const barRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(barRef);

    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-dark-text-primary">{skill}</span>
                <span className="text-sm font-medium text-dark-accent">{level}%</span>
            </div>
            <div className="w-full bg-dark-surface rounded-full h-2.5 overflow-hidden border border-dark-border">
                <div 
                    ref={barRef}
                    className="bg-gradient-to-r from-dark-accent to-sky-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${level}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;