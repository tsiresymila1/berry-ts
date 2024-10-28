import { FC } from 'react';
import MuiAvatar from '@mui/material/Avatar';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

// Define props types
interface AvatarProps {
    color?: string;
    outline?: boolean;
    size?: 'badge' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    sx?: SxProps<Theme>;

    [key: string]: any;
}

// ==============================|| AVATAR ||============================== //

const Avatar: FC<AvatarProps> = ({color, outline, size, sx = {}, ...others}) => {
    const colorSX = color && !outline ? {color: 'background.paper', bgcolor: `${color}.main`} : {};
    const outlineSX = outline
        ? {
            color: color ? `${color}.main` : `primary.main`,
            bgcolor: 'background.paper',
            border: '2px solid',
            borderColor: color ? `${color}.main` : `primary.main`
        }
        : {};

    let sizeSX = {};
    switch (size) {
        case 'badge':
            sizeSX = {width: 28, height: 28};
            break;
        case 'xs':
            sizeSX = {width: 34, height: 34};
            break;
        case 'sm':
            sizeSX = {width: 40, height: 40};
            break;
        case 'md':
            sizeSX = {width: 60, height: 60};
            break;
        case 'lg':
            sizeSX = {width: 72, height: 72};
            break;
        case 'xl':
            sizeSX = {width: 82, height: 82};
            break;
        default:
            sizeSX = {};
    }

    return <MuiAvatar sx={{...colorSX, ...outlineSX, ...sizeSX, ...sx}} {...others} />;
};

export default Avatar;
