// components/CalendarComponent.js
'use client'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Board Meeting',
    start: new Date(2025, 3, 4, 10, 0), // 5th April 2025, 10:00 AM
    end: new Date(2025, 3, 4, 12, 0),
  },
];

export default function CalendarComponent() {
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        className=' h-screen overflow-y-scroll '
      />
    </div>
  );
}
