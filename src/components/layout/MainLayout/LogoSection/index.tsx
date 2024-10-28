import { Link } from 'react-router-dom';

import ButtonBase from '@mui/material/ButtonBase';

import config from '@/config';
import Logo from '@/components/ui/Logo';
import { useCustomizationStore } from '@/store/customization';
import { FC } from "react";

const LogoSection: FC = () => {
    const {defaultId, setMenuOpen} = useCustomizationStore();

    return (
        <ButtonBase
            disableRipple
            onClick={() => setMenuOpen(defaultId)}
            component={Link}
            to={config.defaultPath}
        >
            <Logo/>
        </ButtonBase>
    );
};

export default LogoSection;
