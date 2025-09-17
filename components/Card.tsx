import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(cardRef, { threshold: 0.1, triggerOnce: true });

    return (
        <div 
            ref={cardRef}
            className={`bg-dark-surface rounded-3xl border border-dark-border shadow-lg p-6 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-glow hover:border-dark-accent/50 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ willChange: 'transform, opacity, box-shadow' }}
        >
            <h3 className="text-xl font-bold text-dark-text-primary mb-4 border-b border-dark-border pb-2">
                <span className="bg-gradient-to-r from-dark-accent to-dark-accent-end text-transparent bg-clip-text">
                    {title}
                </span>
            </h3>
            {children}
        </div>
    );
};

export default Card;