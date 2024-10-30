import { useCustomizationStore } from "@/store/customization";
import themes from "@/themes";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { NavigationScroll } from "@/components/layout/NavigationScroll";
import { RouterProvider } from "react-router";
import router from "@/routes";
import { SnackbarProvider } from "notistack";

// const theme = unstable_createMuiStrictModeTheme();


const App = () => {
    const custom = useCustomizationStore()

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(custom)}>
                <CssBaseline/>
                <NavigationScroll>
                    <SnackbarProvider>
                        <RouterProvider router={router}/>
                    </SnackbarProvider>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default App
