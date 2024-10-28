import { ForwardedRef, forwardRef, ReactNode } from 'react';

// material-ui
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { SxProps } from "@mui/system";

// constant
const headerSX = {
    '& .MuiCardHeader-action': {mr: 0}
};

// Define props types
export type  MainCardProps = {
    border?: boolean;
    boxShadow?: boolean;
    children?: ReactNode;
    content?: boolean;
    contentClass?: string;
    contentSX?: SxProps;
    darkTitle?: boolean;
    secondary?: ReactNode;
    shadow?: string | number;
    sx?: object;
    title?: ReactNode;
} & CardProps

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
    (
        {
            border = false,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...others
        },
        ref
    ) => {
        return (
            <Card
                ref={ref as ForwardedRef<HTMLDivElement>}
                {...others}
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderColor: 'divider',
                    ':hover': {
                        boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                    },
                    ...sx
                }}
            >
                {/* card header and action */}
                {!darkTitle && title && <CardHeader
                    sx={headerSX}
                    title={title}
                    action={secondary}/>}
                {darkTitle && title && <CardHeader
                    sx={headerSX}
                    title={
                        <Typography variant="h3">{title}</Typography>
                    }
                    action={secondary}/>}

                {/* content & header divider */}
                {title && <Divider/>}
                {/* card content */}
                {content ? (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                ) : (
                    children
                )}
            </Card>
        );
    }
);

export default MainCard;
