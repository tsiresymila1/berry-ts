import { forwardRef, ReactNode, useMemo } from 'react';

// material-ui
import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import { TransitionProps } from "@mui/material/transitions";

// Type definitions for component props
type  TransitionsProps = {
    children: ReactNode;
    type?: 'grow' | 'fade' | 'collapse' | 'slide' | 'zoom';
    position?: 'top-left' | 'top-right' | 'top' | 'bottom-left' | 'bottom-right' | 'bottom';
    direction?: 'up' | 'down' | 'left' | 'right';
} & TransitionProps

// ==============================|| TRANSITIONS ||============================== //

const Transitions = forwardRef<HTMLDivElement, TransitionsProps>(
    ({children, position = 'top-left', type = 'grow', direction = 'up', ...others}, ref) => {
        const positionSX = useMemo(() => {
            switch (position) {
                case 'top-right':
                    return {transformOrigin: 'top right'};
                case 'top':
                    return {transformOrigin: 'top'};
                case 'bottom-left':
                    return {transformOrigin: 'bottom left'};
                case 'bottom-right':
                    return {transformOrigin: 'bottom right'};
                case 'bottom':
                    return {transformOrigin: 'bottom'};
                case 'top-left':
                default:
                    return {transformOrigin: '0 0 0'};
            }
        }, [position]);

        return (
            <Box ref={ref}>
                {type === 'grow' && (
                    <Grow {...others}>
                        <Box sx={positionSX}>{children}</Box>
                    </Grow>
                )}
                {type === 'collapse' && (
                    <Collapse {...others} sx={positionSX}>
                        {children}
                    </Collapse>
                )}
                {type === 'fade' && (
                    <Fade
                        {...others}
                        timeout={{
                            appear: 500,
                            enter: 600,
                            exit: 400
                        }}
                    >
                        <Box sx={positionSX}>{children}</Box>
                    </Fade>
                )}
                {type === 'slide' && (
                    <Slide
                        {...others}
                        timeout={{
                            appear: 0,
                            enter: 400,
                            exit: 200
                        }}
                        direction={direction}
                    >
                        <Box sx={positionSX}>{children}</Box>
                    </Slide>
                )}
                {type === 'zoom' && (
                    <Zoom {...others}>
                        <Box sx={positionSX}>{children}</Box>
                    </Zoom>
                )}
            </Box>
        );
    }
);

export default Transitions;
