import { forwardRef, ReactNode, useCallback } from 'react';
import { motion, useCycle } from 'framer-motion';

// Define prop types
interface AnimateButtonProps {
    children: ReactNode;
    offset?: number;
    type?: 'slide' | 'scale' | 'rotate';
    direction?: 'up' | 'down' | 'left' | 'right';
    scale?: number | {hover: number; tap: number};
}

// ==============================|| ANIMATION BUTTON ||============================== //

const AnimateButton = forwardRef<HTMLDivElement, AnimateButtonProps>(
    ({
         children,
         type = 'scale',
         direction = 'right',
         offset = 10,
         scale = {hover: 1, tap: 0.9}
     }, ref) => {
        let offset1, offset2;
        switch (direction) {
            case 'up':
            case 'left':
                offset1 = offset;
                offset2 = 0;
                break;
            case 'right':
            case 'down':
            default:
                offset1 = 0;
                offset2 = offset;
                break;
        }

        const [x, cycleX] = useCycle(offset1, offset2);
        const [y, cycleY] = useCycle(offset1, offset2);

        const handleHoverStart = useCallback(() => {
            if (type === 'slide') {
                if (direction === 'up' || direction === 'down') {
                    cycleY();
                } else {
                    cycleX();
                }
            }
        }, [type, direction, cycleY, cycleX]);

        const handleHoverEnd = useCallback(() => {
            if (type === 'slide') {
                if (direction === 'up' || direction === 'down') {
                    cycleY();
                } else {
                    cycleX();
                }
            }
        }, [type, direction, cycleY, cycleX]);

        switch (type) {
            case 'rotate':
                return (
                    <motion.div
                        ref={ref}
                        animate={{rotate: 360}}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 2,
                            repeatDelay: 0
                        }}
                    >
                        {children}
                    </motion.div>
                );

            case 'slide':
                if (direction === 'up' || direction === 'down') {
                    return (
                        <motion.div
                            ref={ref}
                            animate={{y}}
                            onHoverEnd={handleHoverEnd}
                            onHoverStart={handleHoverStart}
                        >
                            {children}
                        </motion.div>
                    );
                }
                return (
                    <motion.div
                        ref={ref}
                        animate={{x}}
                        onHoverEnd={handleHoverEnd}
                        onHoverStart={handleHoverStart}
                    >
                        {children}
                    </motion.div>
                );

            case 'scale':
            default:
                const scaleValues = typeof scale === 'number' ? {hover: scale, tap: scale} : scale;
                return (
                    <motion.div
                        ref={ref}
                        whileHover={{scale: scaleValues.hover}}
                        whileTap={{scale: scaleValues.tap}}
                    >
                        {children}
                    </motion.div>
                );
        }
    }
);

export default AnimateButton;
