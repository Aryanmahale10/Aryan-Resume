
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import BackgroundBubbles from './components/BackgroundBubbles';
import type { ContactInfo, Education, Experience, Certification, AppSkill, ExpertiseCategory } from './types';
import { CanvaIcon, ChatGptIcon, ClaudeAiIcon, GoogleStudioIcon, GeminiIcon, PowerBiIcon, AgileIcon, MsOfficeIcon, SqlIcon, MetabaseIcon, BirtIcon, TallyIcon } from './constants';


const profileData = {
    name: "Aryan Mahale",
    title: "Business Analyst",
    imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocLs_7Fx2tjgWfve8arSgBtF1FYc3EQ0BULmoVyo_oy9Mv-qMIID=s192-c", 
};

const contactData: ContactInfo[] = [
    { type: 'Phone', value: '+91 99871 00234' },
    { type: 'Email', value: 'E-Mail', link: 'mailto:aryan.mahale888@gmail.com'},
    { type: 'Location', value: 'Mumbai, India' },
    { type: 'LinkedIn', value: 'Linkedin', link: 'https://www.linkedin.com/in/aryan-a-mahale-0780b4295' },
];

const educationData: Education[] = [
    { degree: 'MBA in Finance (Pursuing)', institution: 'Manipal university of higher education' },
    { degree: 'UGDM - NCRD (CGPA: 7.0)', institution: 'NCRD\'s Sterling Institute of Management Studies' },
];

const summaryData = "Business Analyst (Techno-Functional) with hands-on experience in financial technology, specializing in Bank Treasury systems. Skilled in bridging business and technical teams, developing data-driven dashboards, and managing end-to-end implementation of enterprise solutions. Strong foundation in accounting, finance, and data analytics. Focused on optimizing financial operations through technology and contributing to strategic business initiatives.";

const coreSkillsData: string[] = [
    'Requirement Analysis',
    'Stakeholder Communication',
    'Business Documentation',
    'Data Visualization'
];

const softSkillsData: string[] = [
    'Analytical Thinking',
    'Team Collaboration',
    'Presentation & Reporting'
];

const appSkillsData: AppSkill[] = [
    { name: 'Power BI', logo: PowerBiIcon },
    { name: 'SQL', logo: SqlIcon },
    { name: 'Metabase', logo: MetabaseIcon },
    { name: 'BIRT', logo: BirtIcon },
    { name: 'Tally', logo: TallyIcon },
    { name: 'Google Studio AI', logo: GoogleStudioIcon },
    { name: 'Claude AI', logo: ClaudeAiIcon },
    { name: 'Gemini', logo: GeminiIcon },
    { name: 'ChatGPT', logo: ChatGptIcon },
    { name: 'Canva', logo: CanvaIcon },
    { name: 'Agile', logo: AgileIcon },
    { name: 'MS Office', logo: MsOfficeIcon },
];

const expertiseData: ExpertiseCategory[] = [
    {
        title: 'Treasury',
        skills: ['ALM', 'Money Market', 'Forex', 'Fixed Income'],
    },
    {
        title: 'Instruments Product & Technical',
        skills: ['BRDs', 'FSDs', 'User Stories', 'Wireframes'],
    },
    {
        title: 'SDLC & Methodologies',
        skills: ['Agile & Waterfall project delivery'],
    },
    {
        title: 'Data Analysis',
        skills: ['SQL', 'Financial Data Formats'],
    },
    {
        title: 'Stakeholder Management',
        skills: ['Client Engagement', 'Presales Demos', 'UAT'],
    },
    {
        title: 'Regulatory & Compliance',
        skills: ['SEBI & RBI'],
    },
];

const experienceData: Experience[] = [
    {
        title: 'Business Analyst - Trainee Assistant Consultant',
        company: 'Credence Analytics, Mumbai',
        date: 'JAN 2025 - PRESENT',
        startDate: '2025-01-01',
        details: [
            '- Worked on IDeal 6, Credence Analytics flagship product, with a focus on the FX (Foreign Exchange) module.',
            '- Good understanding of Merchant and Interbank functional processes in Forex.',
            '- Proficient in SQL for backend support',
            '- Hands-on knowledge of SWIFT message facility and its integration in treasury operations.',
            '- Ability to bridge functional and technical aspects, ensuring smooth execution of treasury workflows.',
            '- Successfully led go-live implementation and ongoing system support for enterprise clients.',
            '- Authored and maintained Business Requirement Documents (BRDs) to streamline project execution.',
            '- Built and maintained dashboards and custom reports using Metabase and BIRT,enabling real-time data analysis and decision-making.',
            '- Handled change requests from clients, ensuring timely delivery and alignment with business needs.',
            '- Took initiative in proposing and implementing product enhancements to improve functionality and user experience'
        ]
    },
    {
        title: 'Project Support - Intern',
        company: 'Credence Analytics, Mumbai',
        date: 'MAY 2024 - DEC 2024',
        startDate: '2024-05-13',
        details: [
            'Served as the liaison between business stakeholders and technical teams.',
            'Collaborated with cross-functional teams to manage project timelines, deliverables, and documentation.',
            '- Exposure to Forex deal lifecycle management, from booking to settlement.',
            '- Took initiative in proposing and implementing product enhancements to improve functionality and user experience'
        ]
    }
];

const certificationsData: Certification[] = [
    { name: 'MTSTS Certified – Practical Accounts & Taxation Plus' },
    { name: 'Agile Project Management Foundation – LinkedIn' },
    { name: 'Scrum Fundamentals' },
    { name: 'BFSI Certification – ICT Academy' },
    { name: 'IBM Tech Course – Wealth & Asset Management' },
    { name: 'Certified Workshop on ChatGPT & AI in Microsoft Office' },
];


const App: React.FC = () => {
    return (
        <div className="relative min-h-screen p-4 sm:p-6 md:p-8 font-sans overflow-hidden">
            <BackgroundBubbles />
            <main className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <Sidebar
                        profile={profileData}
                        contact={contactData}
                        education={educationData}
                        summary={summaryData}
                        certifications={certificationsData}
                    />
                </div>
                <div className="lg:col-span-3">
                    <Dashboard 
                        coreSkills={coreSkillsData}
                        softSkills={softSkillsData}
                        experience={experienceData}
                        appSkills={appSkillsData}
                        expertise={expertiseData}
                    />
                </div>
            </main>
        </div>
    );
};

export default App;