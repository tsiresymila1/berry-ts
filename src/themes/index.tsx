import { CustomizationState } from "@/store/customization.ts";
import componentStyleOverrides from "@/themes/components.ts";
import themePalette from "@/themes/palette.ts";
import { ScssColors } from "@/themes/types.ts";
import themeTypography from "@/themes/typography.ts";
import { createTheme } from "@mui/material/styles";
import colors from '@/assets/scss/themes-vars.module.scss';
import darkColors from '@/assets/scss/themes-dark-vars.module.scss';


export const themes = (customization: CustomizationState) => {
    const color: ScssColors = (colors as unknown as ScssColors);
    const darkColor: ScssColors = (darkColors as unknown as ScssColors);
    const selectedColor = customization.scheme === "dark" ? darkColor : color
    console.log()
    return createTheme({
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: '48px',
                    padding: '16px',
                    '@media (min-width: 600px)': {
                        minHeight: '48px'
                    }
                }
            },
            palette: themePalette(selectedColor, customization),
            typography: themeTypography(selectedColor, customization),
            components: componentStyleOverrides(selectedColor, customization)
        }
    );
};

export default themes;
