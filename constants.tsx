import React from 'react';

const iconProps = {
    className: "w-5 h-5 text-dark-accent",
    strokeWidth: 2,
};

export const PhoneIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);

export const MailIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25-2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const LocationIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const LinkedInIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-dark-accent">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const DownloadIcon: React.FC = () => (
    <svg {...iconProps} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
);

export const CheckCircleIcon: React.FC = () => (
    <svg className="w-5 h-5 text-dark-accent flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const ChevronDownIcon: React.FC<{isOpen: boolean}> = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-6 h-6 text-dark-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

// App Icons
export const CanvaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="canva-a" cx="128" cy="128" r="128" gradientUnits="userSpaceOnUse">
                <stop stop-color="#212134" offset="0"/>
                <stop stop-color="#353755" offset=".32"/>
                <stop stop-color="#414163" offset=".53"/>
                <stop stop-color="#464669" offset=".68"/>
                <stop stop-color="#48486C" offset="1"/>
            </radialGradient>
            <radialGradient id="canva-b" cx="128" cy="128" r="77.34" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9D40C4" offset=".14"/>
                <stop stop-color="#9D40C4" offset=".16"/>
                <stop stop-color="#A93DC6" offset=".22"/>
                <stop stop-color="#C539CA" offset=".35"/>
                <stop stop-color="#F033D1" offset=".54"/>
                <stop stop-color="#FF31D4" offset=".62"/>
                <stop stop-color="#F13CCF" offset=".72"/>
                <stop stop-color="#D14AD5" offset=".83"/>
                <stop stop-color="#A45CDF" offset=".93"/>
                <stop stop-color="#8C6AE0" offset="1"/>
            </radialGradient>
        </defs>
        <circle cx="128" cy="128" r="128" fill="url(#canva-a)"/>
        <circle cx="128" cy="128" r="77.34" fill="url(#canva-b)"/>
        <path d="M128 72.86a55.14 55.14 0 1 1-55.14 55.14A55.14 55.14 0 0 1 128 72.86m0-24.38a79.52 79.52 0 1 0 79.52 79.52A79.52 79.52 0 0 0 128 48.48z" fill="#fff"/>
    </svg>
);

export const ChatGptIcon: React.FC<{ className?: string }> = ({ className }) => (
   <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M226.2 62.4a84.3 84.3 0 0 0-41.2-22.8c-1.3-.4-2.7-.1-3.8.7a84.8 84.8 0 0 0-41.3 22.8c-1.1.8-2.5.8-3.6 0a84.8 84.8 0 0 0-41.3-22.8c-1-.7-2.4-.9-3.7-.6-1.5.4-2.8 1.4-3.6 2.8a85 85 0 0 0-16.3 54.3c0 1.2.6 2.3 1.7 2.9l41.6 24 41.5 24.1c1 .6 2.4.6 3.5 0l41.5-24 41.5-24c1-.6 1.7-1.8 1.7-2.9a85.1 85.1 0 0 0-16.4-54.5c-.8-1.4-2-2.3-3.5-2.8zm-65.4 36.8L128 118.3l-32.8-19.1 32.8-19.1 32.8 19.1zM29.8 193.6a84.3 84.3 0 0 0 41.2 22.8c1.3.4 2.7.1 3.8-.7a84.8 84.8 0 0 0 41.3-22.8c1.1-.8 2.5-.8 3.6 0a84.8 84.8 0 0 0 41.3 22.8c1 .7 2.4.9 3.7.6 1.5-.4 2.8-1.4 3.6-2.8a85 85 0 0 0 16.3-54.3c0-1.2-.6-2.3-1.7-2.9l-41.6-24-41.5-24.1c-1-.6-2.4-.6-3.5 0l-41.5 24-41.5 24c-1 .6-1.7 1.8-1.7 2.9a85.1 85.1 0 0 0 16.4 54.5c.8 1.4 2 2.3 3.5 2.8zm65.4-36.8L128 137.7l-32.8 19.1 32.8 19.1 32.8-19.1z" fill="#74AA9C"/>
    </svg>
);

export const ClaudeAiIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm37.8 191.1c-14.7 9-31.6 14.1-49.8 14.1-41.5 0-77.8-24.8-94.5-60.7 1-28.1 13.9-53.5 35.1-71.1 22.8-18.8 52-28.5 83.2-28.5 2.9 0 5.8.2 8.6.5-38.3 9.2-66.6 45.4-66.6 88.5s28.3 79.3 66.6 88.5c-5.4.9-10.9 1.4-16.6 1.4-9.3 0-18.3-1.5-26.8-4.3z" fill="#D97A53"/>
    </svg>
);

export const GoogleStudioIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#4285F4"/>
        <g fill="#FFF">
            <rect x="7" y="12" width="2" height="6" rx="1"/>
            <rect x="11" y="9" width="2" height="9" rx="1"/>
            <rect x="15" y="6" width="2" height="12" rx="1"/>
        </g>
    </svg>
);

export const GeminiIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M12 2L13.88 7.14L19 9L13.88 10.86L12 16L10.12 10.86L5 9L10.12 7.14L12 2Z"/>
        <path fill="#EA4335" d="M20 12L18.88 14.14L17 15L18.88 15.86L20 18L21.12 15.86L23 15L21.12 14.14L20 12Z"/>
        <path fill="#FBBC05" d="M20 2L18.88 4.14L17 5L18.88 5.86L20 8L21.12 5.86L23 5L21.12 4.14L20 2Z"/>
    </svg>
);

export const PowerBiIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F2C811" d="M3,3 L3,21 L11,21 L11,12.9 L18,12.9 L18,21 L21,21 L21,3 L3,3 Z M8,12 L8,18 L5,18 L5,12 L8,12 Z M13,8 L13,18 L10,18 L10,8 L13,8 Z M18,5 L18,11 L15,11 L15,5 L18,5 Z"/>
    </svg>
);

export const AgileIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.92,7.91a6.49,6.49,0,0,0-8.84,0L6.6,6.43A8.49,8.49,0,0,1,18.49,6l-1.57,1.88M12,17.47a6.5,6.5,0,0,0,4.92-2.34L18.49,18A8.5,8.5,0,0,1,6.6,17.43l1.48-1.48a6.44,6.44,0,0,0,3.92,1.52m-4-6a4.5,4.5,0,0,0,4,4.47V20l4-4-4-4v2.53A4.5,4.5,0,0,1,7.5,10a4.5,4.5,0,0,1,4.5-4.5V3l-4,4,4,4V8.47A4.5,4.5,0,0,0,8,11.47Z" fill="#2196F3"/>
    </svg>
);

export const MsOfficeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.77 0h12.189L24 9.252v12.01a2.74 2.74 0 0 1-2.738 2.738H2.738A2.74 2.74 0 0 1 0 21.262V2.738A2.74 2.74 0 0 1 2.77 0z" fill="#E83B11"/>
        <path d="M4.508 2.738v18.524h13.984v-9.262H9.252V2.738H4.508z" fill="#FF5C30"/>
        <path d="M9.252 12h9.239L24 9.252 18.492 0H9.252v12z" fill="#FDB813"/>
    </svg>
);

export const SqlIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#38bdf8">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

export const MetabaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="4" height="8" rx="1" fill="#38bdf8"/>
        <rect x="10" y="8" width="4" height="12" rx="1" fill="#94a3b8"/>
        <rect x="16" y="4" width="4" height="16" rx="1" fill="#f8fafc"/>
    </svg>
);

export const BirtIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#f8fafc"/>
        <path d="M12 2a10 10 0 00-7.07 17.07L12 12V2z" fill="#38bdf8"/>
        <path d="M14 14l6-2a10 10 0 00-4-10l-2 6z" fill="#94a3b8"/>
    </svg>
);

export const TallyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <rect width="24" height="24" rx="4" fill="#38bdf8"/>
         <path d="M7 7h10v2H7z" fill="#0f172a"/>
         <path d="M11 9h2v10h-2z" fill="#0f172a"/>
    </svg>
);