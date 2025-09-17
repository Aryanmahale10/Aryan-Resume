import { useState, useEffect, type RefObject } from 'react';

// FIX: Define a custom options type that extends IntersectionObserverInit to include `triggerOnce`.
interface UseOnScreenOptions extends IntersectionObserverInit {
    triggerOnce?: boolean;
}

function useOnScreen(ref: RefObject<HTMLElement>, options: UseOnScreenOptions = { threshold: 0.1, triggerOnce: true }): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        // FIX: Destructure `options` to separate the custom `triggerOnce` property from standard IntersectionObserverInit properties.
        // This prevents passing an invalid property to the `IntersectionObserver` constructor.
        const { triggerOnce, ...observerOptions } = options;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
                if (triggerOnce) {
                    observer.unobserve(entry.target);
                }
            }
        }, observerOptions);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, options.threshold, options.triggerOnce]); // Re-run effect only if ref or options change

    return isIntersecting;
}

export default useOnScreen;
