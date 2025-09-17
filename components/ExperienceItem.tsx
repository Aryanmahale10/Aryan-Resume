
import React from 'react';
import Card from './Card';
import type { ContactInfo, Education, Certification } from '../types';
import { PhoneIcon, MailIcon, LocationIcon, LinkedInIcon, DownloadIcon, CheckCircleIcon } from '../constants';

interface SidebarProps {
    profile: {
        name: string;
        title: string;
        imageUrl: string;
    };
    contact: ContactInfo[];
    education: Education[];
    summary: string;
    certifications: Certification[];
}

const contactIconMap = {
    Phone: <PhoneIcon />,
    Email: <MailIcon />,
    Location: <LocationIcon />,
    LinkedIn: <LinkedInIcon />,
};

const Sidebar: React.FC<SidebarProps> = ({ profile, contact, education, summary, certifications }) => {
    return (
        <aside className="sticky top-8 flex flex-col gap-8">
            <div className="bg-dark-surface rounded-3xl border border-dark-border shadow-lg p-6 text-center transition-all duration-300 ease-out hover:shadow-glow">
                <img 
                    src={profile.imageUrl} 
                    alt={profile.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-dark-accent object-cover shadow-glow"
                />
                <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
                <h2 className="text-lg text-dark-accent font-medium">{profile.title}</h2>
                <button
                    onClick={() => { /* Placeholder for download functionality */ }}
                    aria-label="Download Resume"
                    className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-dark-accent/10 border border-dark-accent/30 text-dark-accent font-semibold transition-all duration-300 hover:bg-dark-accent/20 hover:border-dark-accent/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-dark-accent focus:ring-offset-2 focus:ring-offset-dark-surface"
                >
                    <DownloadIcon />
                    <span>Download Resume</span>
                </button>
                <p className="text-sm text-dark-text-primary text-left mt-6 leading-relaxed border-t border-dark-border pt-6">
                    {summary}
                </p>
            </div>

            <Card title="Contact Information">
                <ul className="space-y-3">
                    {contact.map((item) => (
                        <li key={item.type} className="flex items-center gap-4">
                            {contactIconMap[item.type]}
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-dark-text-primary hover:text-dark-accent transition-colors break-words">
                                    {item.value}
                                </a>
                            ) : (
                                <span className="text-dark-text-primary break-all">{item.value}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </Card>

            <Card title="Education">
                <ul className="space-y-4">
                    {education.map((edu) => (
                        <li key={edu.degree}>
                            <p className="font-semibold text-dark-text-primary">{edu.degree}</p>
                            <p className="text-sm text-dark-text-secondary">{edu.institution}</p>
                        </li>
                    ))}
                </ul>
            </Card>

            <Card title="Certifications">
                 <ul className="space-y-3">
                    {certifications.map((cert) => (
                        <li key={cert.name} className="flex items-center gap-3">
                            <CheckCircleIcon />
                            <span className="text-dark-text-primary text-sm">{cert.name}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        </aside>
    );
};

export default Sidebar;