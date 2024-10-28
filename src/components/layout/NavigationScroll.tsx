import { PropsWithChildren, useEffect } from "react";

export const NavigationScroll = ({children}: PropsWithChildren) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return children || null;
};
