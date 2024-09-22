import Link from 'next/link'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

const DashboardEvents = () => {
  return (
    <div className="bg-white p-4 rounded-[20px]">
        <div className="flex justify-between items-center mb-4 px-3">
            <h2 className="text-2xl font-semibold">Events</h2>
            <Link href={"/events"} className="text-blue-500">See All</Link>
        </div>

        <DataTable
        value={events}
        rows={10}
        >
            <Column field="title" header="Title" sortable className="text-nowrap" />
            <Column field="venue" header="Venue" sortable className="text-nowrap" />
            <Column field="checkIn" header="Check-in" sortable className="text-nowrap" />
            <Column field="checkOut" header="Check-Out" sortable className="text-nowrap" />
            <Column field="date" header="Date" sortable className="text-nowrap" />
        </DataTable>
    </div>
  )
}

export default DashboardEvents

const events = [
    { id: 1, title: '14th August Seminar', venue: 'Science Block', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '30-09-2024' },
    { id: 2, title: 'Tech Conference', venue: 'Main Hall', checkIn: '09:00 AM', checkOut: '05:00 PM', date: '12-10-2024' },
    { id: 3, title: 'Math Workshop', venue: 'Room 101', checkIn: '11:00 AM', checkOut: '01:00 PM', date: '25-09-2024' },
    { id: 4, title: 'Physics Lecture', venue: 'Science Block', checkIn: '02:00 PM', checkOut: '04:00 PM', date: '30-09-2024' },
    // { id: 5, title: 'Robotics Seminar', venue: 'Lab 3', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '02-10-2024' },
    // { id: 6, title: 'Programming 101', venue: 'Lab 1', checkIn: '10:00 AM', checkOut: '01:00 PM', date: '22-09-2024' },
    // { id: 7, title: 'Art Exhibition', venue: 'Gallery', checkIn: '01:00 PM', checkOut: '03:00 PM', date: '28-09-2024' },
    // { id: 8, title: 'Business Conference', venue: 'Room 102', checkIn: '09:00 AM', checkOut: '11:00 AM', date: '14-10-2024' },
    // { id: 9, title: 'Music Fest', venue: 'Auditorium', checkIn: '06:00 PM', checkOut: '10:00 PM', date: '03-10-2024' },
    // { id: 10, title: 'Health Seminar', venue: 'Room 203', checkIn: '09:00 AM', checkOut: '11:00 AM', date: '06-10-2024' },
    // { id: 11, title: 'Science Fair', venue: 'Main Hall', checkIn: '10:00 AM', checkOut: '04:00 PM', date: '30-09-2024' },
    // { id: 12, title: '14th August Seminar', venue: 'Science Block', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '30-09-2024' },
    // { id: 13, title: 'Astronomy Talk', venue: 'Planetarium', checkIn: '08:00 PM', checkOut: '09:00 PM', date: '10-10-2024' },
    // { id: 14, title: 'Web Development Bootcamp', venue: 'Lab 5', checkIn: '10:00 AM', checkOut: '02:00 PM', date: '22-09-2024' },
    // { id: 15, title: 'Design Thinking Workshop', venue: 'Room 202', checkIn: '11:00 AM', checkOut: '01:00 PM', date: '04-10-2024' },
    // { id: 16, title: 'Cybersecurity Conference', venue: 'Main Hall', checkIn: '09:00 AM', checkOut: '03:00 PM', date: '30-09-2024' },
    // { id: 17, title: 'Digital Marketing Seminar', venue: 'Room 101', checkIn: '02:00 PM', checkOut: '05:00 PM', date: '15-10-2024' },
    // { id: 18, title: 'AI and Machine Learning Workshop', venue: 'Lab 2', checkIn: '11:00 AM', checkOut: '02:00 PM', date: '01-10-2024' },
    // { id: 19, title: '14th August Seminar', venue: 'Science Block', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '30-09-2024' },
    // { id: 20, title: 'Blockchain Conference', venue: 'Lab 4', checkIn: '09:00 AM', checkOut: '11:00 AM', date: '12-10-2024' },
];