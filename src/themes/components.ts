import { CustomizationState } from "@/store/customization.ts";
import { ScssColors } from "./types.ts";

export default function componentStyleOverrides(colors: ScssColors,custom: CustomizationState) {
    const bgColor = colors.background;
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px',
                    fontSize: "0.875rem"
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
                rounded: {
                    borderRadius: `${custom.borderRadius}px`
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: colors.textDark,
                    padding: '24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '12px'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '16px'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: colors.darkTextPrimary,
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: colors.menuSelected,
                        backgroundColor: colors.menuSelectedBack,
                        '&:hover': {
                            backgroundColor: colors.menuSelectedBack
                        },
                        '& .MuiListItemIcon-root': {
                            color: colors.menuSelected
                        }
                    },
                    '&:hover': {
                        backgroundColor: colors.menuSelectedBack,
                        color: colors.menuSelected,
                        '& .MuiListItemIcon-root': {
                            color: colors.menuSelected
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: colors.darkTextPrimary,
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: colors.textDark
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: colors.textDark,
                    '&::placeholder': {
                        color: colors.darkTextPrimary,
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: bgColor,
                    borderRadius: `${custom.borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.backgroundDefault
                    },
                    '&:hover $notchedOutline': {
                        borderColor: colors.backgroundDefault
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: bgColor,
                    padding: '15.5px 14px',
                    borderRadius: `${custom.borderRadius}px`,
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: `${custom.borderRadius}px`
                }
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: colors.primaryMain,
                    '&.Mui-checked': {
                        color: colors.primaryMain, // checked color for light mode
                    },
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: colors.grey300
                    }
                },
                mark: {
                    backgroundColor: colors.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: colors.primaryLight
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: colors.divider,
                    opacity: 1
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: colors.primaryDark,
                    background: colors.primary200
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: 13,
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit',
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: colors.paper,
                    background: colors.grey700
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                }
            }
        }
    };
}
