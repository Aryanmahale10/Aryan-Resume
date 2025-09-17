
export interface ContactInfo {
    type: 'Phone' | 'Email' | 'Location' | 'LinkedIn';
    value: string;
    link?: string;
}

export interface Education {
    degree: string;
    institution: string;
}

export interface Experience {
    title: string;
    company: string;
    date: string;
    startDate?: string; // For reliable sorting
    details: string[];
}

export interface Certification {
    name: string;
}

export interface AppSkill {
    name: string;
    logo: React.FC<{ className?: string }>;
}

export interface ExpertiseCategory {
    title: string;
    skills: string[];
}
