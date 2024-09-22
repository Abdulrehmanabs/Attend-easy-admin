import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const EventTable = () => {
    const [globalFilter, setGlobalFilter] = useState(null);

    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-center">
                <Button icon="pi pi-eye" className="border py-1 text-blue-700" />
                <Button icon="pi pi-pencil" className="border py-1 text-blue-700" />
                <Button onClick={() => events.filter(item => item.id !== rowData.id)} icon="pi pi-trash" className="border py-1 text-red-400" />
            </div>
        );
    };

    return (
        <div className="bg-white mx-auto p-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Events</h2>
                <div className="flex items-center gap-4">
                    <IconField iconPosition="left">
                        <InputIcon className="pi pi-search"> </InputIcon>
                        <InputText 
                            className="ps-10 p-2 border min-w-[300px]"
                            type="search"
                            placeholder="Search here..."
                            onInput={(e) => setGlobalFilter(e.target.value)}
                        />
                    </IconField>
                    <Button label="Add new" icon="pi pi-plus" className="border rounded-lg p-2 bg-blue-600 text-white" />
                </div>
            </div>

            {/* Table Section */}
            <DataTable 
                value={events} 
                paginator 
                rows={10} 
                globalFilter={globalFilter} 
                className="w-full"
            >
                <Column field="id" header="Sr#" sortable className="text-nowrap" />
                <Column field="title" header="Title" sortable className="text-nowrap" />
                <Column field="venue" header="Venue" sortable className="text-nowrap" />
                <Column field="checkIn" header="Check-in" sortable className="text-nowrap" />
                <Column field="checkOut" header="Check-Out" sortable className="text-nowrap" />
                <Column field="date" header="Date" sortable className="text-nowrap" />
                <Column body={actionTemplate} header="Action" />
            </DataTable>
        </div>
    );
};

export default EventTable;

// 20 Event Data with some duplication
const events = [
    { id: 1, title: '14th August Seminar', venue: 'Science Block', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '30-09-2024' },
    { id: 2, title: 'Tech Conference', venue: 'Main Hall', checkIn: '09:00 AM', checkOut: '05:00 PM', date: '12-10-2024' },
    { id: 3, title: 'Math Workshop', venue: 'Room 101', checkIn: '11:00 AM', checkOut: '01:00 PM', date: '25-09-2024' },
    { id: 4, title: 'Physics Lecture', venue: 'Science Block', checkIn: '02:00 PM', checkOut: '04:00 PM', date: '30-09-2024' },
    { id: 5, title: 'Robotics Seminar', venue: 'Lab 3', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '02-10-2024' },
    { id: 6, title: 'Programming 101', venue: 'Lab 1', checkIn: '10:00 AM', checkOut: '01:00 PM', date: '22-09-2024' },
    { id: 7, title: 'Art Exhibition', venue: 'Gallery', checkIn: '01:00 PM', checkOut: '03:00 PM', date: '28-09-2024' },
    { id: 8, title: 'Business Conference', venue: 'Room 102', checkIn: '09:00 AM', checkOut: '11:00 AM', date: '14-10-2024' },
    { id: 9, title: 'Music Fest', venue: 'Auditorium', checkIn: '06:00 PM', checkOut: '10:00 PM', date: '03-10-2024' },
    { id: 10, title: 'Health Seminar', venue: 'Room 203', checkIn: '09:00 AM', checkOut: '11:00 AM', date: '06-10-2024' },
    { id: 11, title: 'Science Fair', venue: 'Main Hall', checkIn: '10:00 AM', checkOut: '04:00 PM', date: '30-09-2024' },
    { id: 12, title: '14th August Seminar', venue: 'Science Block', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '30-09-2024' },
    { id: 13, title: 'Astronomy Talk', venue: 'Planetarium', checkIn: '08:00 PM', checkOut: '09:00 PM', date: '10-10-2024' },
    { id: 14, title: 'Web Development Bootcamp', venue: 'Lab 5', checkIn: '10:00 AM', checkOut: '02:00 PM', date: '22-09-2024' },
    { id: 15, title: 'Design Thinking Workshop', venue: 'Room 202', checkIn: '11:00 AM', checkOut: '01:00 PM', date: '04-10-2024' },
    { id: 16, title: 'Cybersecurity Conference', venue: 'Main Hall', checkIn: '09:00 AM', checkOut: '03:00 PM', date: '30-09-2024' },
    { id: 17, title: 'Digital Marketing Seminar', venue: 'Room 101', checkIn: '02:00 PM', checkOut: '05:00 PM', date: '15-10-2024' },
    { id: 18, title: 'AI and Machine Learning Workshop', venue: 'Lab 2', checkIn: '11:00 AM', checkOut: '02:00 PM', date: '01-10-2024' },
    { id: 19, title: '14th August Seminar', venue: 'Science Block', checkIn: '10:00 AM', checkOut: '12:00 PM', date: '30-09-2024' },
    { id: 20, title: 'Blockchain Conference', venue: 'Lab 4', checkIn: '09:00 AM', checkOut: '11:00 AM', date: '12-10-2024' },
];
