import React, { useState } from 'react';
import type { Experience } from '../types';
import { ChevronDownIcon } from '../constants';

interface TimelineItemProps {
    job: Experience;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ job }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
             <div className="absolute -left-[34px] top-1.5 w-4 h-4 bg-dark-accent rounded-full border-4 border-dark-bg shadow-glow"></div>
             <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex justify-between items-center cursor-pointer group"
                aria-expanded={isOpen}
                aria-controls={`timeline-details-${job.title}`}
             >
                <div>
                    <h4 className="text-lg font-bold text-dark-text-primary group-hover:text-dark-accent transition-colors">{job.title}</h4>
                    <p className="font-medium text-dark-text-secondary">{job.company}</p>
                    <time className="text-sm font-normal leading-none text-gray-500">{job.date}</time>
                </div>
                <ChevronDownIcon isOpen={isOpen} />
            </button>
            <div 
                id={`timeline-details-${job.title}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-4 rounded-lg bg-dark-bg">
                    <ul className="list-disc pl-5 space-y-2 text-dark-text-secondary">
                        {job.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;