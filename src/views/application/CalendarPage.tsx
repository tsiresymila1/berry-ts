import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from "@fullcalendar/timegrid";
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import MainCard from "@/components/ui/cards/MainCard.tsx";
import { alpha, darken, useTheme } from "@mui/material/styles";
import { Grid2, ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
    IconChevronLeft,
    IconChevronRight,
    IconLayoutGrid,
    IconLayoutList,
    IconListNumbers,
    IconTemplate
} from "@tabler/icons-react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AddAlarmTwoTone } from "@mui/icons-material";


const CalendarPage = () => {
    const theme = useTheme()
    const calendarRef = useRef<FullCalendar | null>(null);
    const handleDateClick = (arg: DateClickArg) => {
        alert(arg.dateStr)
    }


    const [view, setView] = useState<'dayGridDay' | 'dayGridWeek' | 'dayGridMonth' | 'listWeek'>('dayGridMonth');
    const [title, setTitle] = useState<string | undefined>();

    const handleSetView = useCallback((
        _: MouseEvent<HTMLElement>,
        view: 'dayGridDay' | 'dayGridWeek' | 'dayGridMonth' | 'listWeek' | null,
    ) => {
        if (view != null) {
            setView(view);
            calendarRef.current?.getApi()?.changeView(view);
        }
    }, []);

    useEffect(() => {
        const calendar = calendarRef.current?.getApi()
        if (calendar) {
            setTitle(calendar?.view.title)
        }
    }, [])

    return <MainCard
        title="Event Calendar"
        contentSX={{
            '& .fc .fc-col-header-cell .fc-scrollgrid-sync-inner': {
                padding: `12px`,
                backgroundColor: alpha(darken(theme.palette.primary.dark, 0.2), 0.05),
            },
            '& .fc .fc-listWeek-view .fc-list-sticky .fc-list-day > th, & .fc .fc-listWeek-view .fc-cell-shaded': {
                padding: `12px`,
                backgroundColor: alpha(darken(theme.palette.primary.dark, 0.2), 0.05),
            },
            '& .fc': {
                '--fc-border-color': alpha(darken(theme.palette.primary.dark, 0.2), 0.15),
                '--fc-today-bg-color': alpha(darken(theme.palette.primary.main, 0.2), 0.15)
            }
        }}
        secondary={
            <Button
                variant="contained"
                color="secondary"
                startIcon={
                    <AddAlarmTwoTone/>
                }
            >Add New Event</Button>}
    >
        <Grid2 container spacing={2} pt={2} p={2}>
            <Grid2 size={12} container spacing={2}>
                <Grid2>
                    <Button
                        onClick={() => calendarRef.current?.getApi()?.today()}
                        color="primary" variant="outlined">
                        Today
                    </Button>
                </Grid2>
                <Grid2 size="grow" justifyContent="center">
                    <Stack direction="row" gap={6} justifyContent="center" alignItems="center">
                        <IconButton onClick={() => calendarRef.current?.getApi()?.prev()}>
                            <IconChevronLeft/>
                        </IconButton>
                        <Typography variant="h3">
                            {title ?? calendarRef.current?.getApi()?.view.title}
                        </Typography>
                        <IconButton onClick={() => calendarRef.current?.getApi()?.next()}>
                            <IconChevronRight/>
                        </IconButton>
                    </Stack>
                </Grid2>
                <Grid2>
                    <ToggleButtonGroup
                        value={view}
                        exclusive
                        size="small"
                        color="primary"
                        onChange={handleSetView}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="dayGridMonth" aria-label="left aligned">
                            <IconLayoutGrid/>
                        </ToggleButton>
                        <ToggleButton value="dayGridWeek" aria-label="centered">
                            <IconTemplate/>
                        </ToggleButton>
                        <ToggleButton value="dayGridDay" aria-label="right aligned">
                            <IconLayoutList/>
                        </ToggleButton>
                        <ToggleButton value="listWeek" aria-label="justified">
                            <IconListNumbers/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid2>
            </Grid2>
            <Grid2 size={12}>
                <MainCard border sx={{p: 1, mt: 2}}>
                    <FullCalendar
                        plugins={[listPlugin, dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        dateClick={handleDateClick}
                        ref={calendarRef}
                        headerToolbar={false}
                        initialView='dayGridMonth'
                        datesSet={(e) => {
                            setTitle(e.view.title)
                        }}
                        events={[
                            {title: 'Meeting', start: new Date()}
                        ]}
                    />
                </MainCard>
            </Grid2>
        </Grid2>
    </MainCard>
}

export default CalendarPage;
