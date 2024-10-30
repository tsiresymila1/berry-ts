import { ScssColors } from "@/themes/types.ts";
import { Theme } from "@mui/material";
import { CustomizationState } from "@/store/customization.ts";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
    interface Palette {
        dark: ColorPartial & Partial<PaletteColor>;
        orange: ColorPartial & Partial<PaletteColor>;
    }
    interface TypeText {
        hint: string;
        dark: string;
    }

    interface PaletteColor {
        200?: string
        800?: string
    }
}
export default function themePalette(
    colors: ScssColors,
    custom: CustomizationState
): Partial<Theme["palette"]> {
    return {
        mode: custom.scheme,
        primary: {
            light: colors.primaryLight,
            main: colors.primaryMain,
            dark: colors.primaryDark,
            contrastText: "#FFE2EA",
            200: colors?.primary200,
            800: colors?.primary800,
        },
        secondary: {
            light: colors.secondaryLight,
            main: colors.secondaryMain,
            dark: colors.secondaryDark,
            '200': colors?.secondary200,
            800: colors?.secondary800,
            contrastText: "#FFE2EA",
        },
        error: {
            light: colors.errorLight,
            main: colors.errorMain,
            dark: colors.errorDark,
            contrastText: "#FFE2EA",
        },
        warning: {
            light: colors.warningLight,
            main: colors.warningMain,
            dark: colors.warningDark,
            contrastText: "#FFE2EA",
        },
        success: {
            light: colors.successLight,
            '200': colors?.success200,
            main: colors.successMain,
            dark: colors.successDark,
            contrastText: "#FFE2EA",
        },
        background: {
            paper: colors.paper,
            default: colors.backgroundDefault,
        },
        orange: {
            light: colors.orangeLight,
            main: colors.orangeMain,
            dark: colors.orangeDark,
        },
        dark: {
            light: colors.darkTextPrimary,
            main: colors.darkLevel1,
            dark: colors.darkLevel2,
            800: colors.darkBackground,
            900: colors.darkPaper,
        },
        text: {
            primary: colors.darkTextPrimary,
            secondary: colors.darkTextSecondary,
            disabled: colors.textDark,
            hint: colors.grey100,
            dark: colors.textDark,
        }
    };
}
