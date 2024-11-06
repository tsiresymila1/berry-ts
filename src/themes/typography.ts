import { Theme } from "@mui/material/styles";
import { ScssColors } from "@/themes/types.ts";
import { CustomizationState } from "@/store/customization.ts";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        customInput: CSSProperties | undefined | Record<string, any>;
        mainContent: CSSProperties | undefined;
        menuCaption: CSSProperties | undefined;
        subMenuCaption: CSSProperties | undefined;
        commonAvatar: CSSProperties | undefined;
        smallAvatar: CSSProperties | undefined;
        mediumAvatar: CSSProperties | undefined;
        largeAvatar: CSSProperties | undefined;
    }

    interface TypographyVariantsOptions {
        customInput?: CSSProperties | undefined;
        mainContent?: CSSProperties | undefined;
        menuCaption?: CSSProperties | undefined;
        subMenuCaption?: CSSProperties | undefined;
        commonAvatar?: CSSProperties | undefined;
        smallAvatar?: CSSProperties | undefined;
        mediumAvatar?: CSSProperties | undefined;
        largeAvatar?: CSSProperties | undefined;
    }
}


declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        customInput: true;
        mainContent: true;
        menuCaption: true;
        subMenuCaption: true;
        commonAvatar: true;
        smallAvatar: true;
        mediumAvatar: true;
        largeAvatar: true;
    }
}

export default function themeTypography(
    colors: ScssColors,
    custom: CustomizationState
): Partial<Theme["typography"]> {
    return {
        fontSize: 14,
        htmlFontSize: 14,
        fontFamily: custom?.fontFamily,
        h6: {
            fontWeight: 500,
            color: colors.heading,
            fontSize: "0.75rem",
        },
        h5: {
            fontSize: "0.875rem",
            color: colors.heading,
            fontWeight: 500,
        },
        h4: {
            fontSize: "1rem",
            color: colors.heading,
            fontWeight: 600,
        },
        h3: {
            fontSize: "1.25rem",
            color: colors.heading,
            fontWeight: 600,
        },
        h2: {
            fontSize: "1.5rem",
            color: colors.heading,
            fontWeight: 700,
        },
        h1: {
            fontSize: "2.125rem",
            color: colors.heading,
            fontWeight: 700,
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 500,
            color: colors.textDark,
        },
        subtitle2: {
            fontSize: "0.75rem",
            fontWeight: 400,
            color: colors.darkTextSecondary2,
        },
        caption: {
            fontSize: "0.75rem",
            color: colors.darkTextSecondary2,
            fontWeight: 400,
        },
        body1: {
            fontSize: "0.84rem",
            fontWeight: 400,
            lineHeight: "1.334em",
        },
        body2: {
            letterSpacing: "0em",
            fontWeight: 400,
            lineHeight: "1.5em",
            fontSize: '0.875rem',
            color: colors.darkTextPrimary2,
            whiteSpace: "break-spaces",
            margin: "0em"
        },
        button: {
            textTransform: "capitalize",
        },
        customInput: {
            marginTop: 1,
            marginBottom: 1,
            "& > label": {
                top: 23,
                left: 0,
                color: colors.grey500,
                '&[data-shrink="false"]': {
                    top: 5,
                },
            },
            "& > div > input": {
                padding: "30.5px 14px 11.5px !important",
            },
            "& legend": {
                display: "none",
            },
            "& fieldset": {
                top: 0,
            },
        },
        mainContent: {
            background: colors.background,
            width: "100%",
            minHeight: "calc(100vh - 88px)",
            flexGrow: 1,
            padding: "20px",
            marginTop: "88px",
            marginRight: "20px",
            borderRadius: `${custom?.borderRadius}px`,
        },
        menuCaption: {
            fontSize: "0.84rem",
            fontWeight: 500,
            color: colors.heading,
            padding: "6px",
            textTransform: "capitalize",
            marginTop: "10px",
        },
        subMenuCaption: {
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: colors.darkTextSecondary2,
            textTransform: "capitalize",
        },
        commonAvatar: {
            cursor: "pointer",
            borderRadius: "8px",
        },
        smallAvatar: {
            width: "22px",
            height: "22px",
            fontSize: "1rem",
        },
        mediumAvatar: {
            width: "34px",
            height: "34px",
            fontSize: "1.2rem",
        },
        largeAvatar: {
            width: "44px",
            height: "44px",
            fontSize: "1.5rem",
        },
    };
}
