import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const AnnouncementsTable = () => {
    const [globalFilter, setGlobalFilter] = useState(null);

    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-center">
                <Button icon="pi pi-eye" className="border py-1 text-blue-700" />
                <Button icon="pi pi-pencil" className="border py-1 text-blue-700" />
                <Button onClick={() => announcements.filter(item => item.id !== rowData.id)} icon="pi pi-trash" className="border py-1 text-red-400" />
            </div>
        );
    };

    return (
        <div className="bg-white mx-auto p-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Announcements</h2>
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
                value={announcements} 
                paginator 
                rows={10} 
                globalFilter={globalFilter} 
                className="w-full"
            >
                <Column field="id" header="Sr#" sortable className=" text-nowrap" />
                <Column field="title" header="Title" sortable className=" text-nowrap" />
                <Column field="description" header="Description" sortable className=" text-nowrap" />
                <Column body={actionTemplate} header="Action" />
            </DataTable>
        </div>
    );
};

export default AnnouncementsTable;

const announcements = [
    { id: 1, title: '14th August Seminar', description: 'Please Submit Your Mid Results Before 30th August...' },
    { id: 2, title: 'Annual Science Expo', description: 'The Science Expo will be held on 15th September...' },
    { id: 3, title: 'AI Workshop', description: 'Join us for an AI Workshop on 22nd September...' },
    { id: 4, title: 'Sports Day', description: 'Sports Day is scheduled for 25th October, register now...' },
    { id: 5, title: 'Cultural Festival', description: 'Participate in the Cultural Festival on 1st November...' },
    { id: 6, title: 'Guest Lecture Series', description: 'Attend the Guest Lecture on Quantum Computing on 10th October...' },
    { id: 7, title: 'Hackathon', description: 'The University Hackathon will take place from 5th to 7th November...' },
    { id: 8, title: 'Math Seminar', description: 'Don\'t miss the Math Seminar on 12th October...' },
    { id: 9, title: 'Entrepreneurship Meetup', description: 'Entrepreneurship Meetup on 30th September...' },
    { id: 10, title: 'Literature Conference', description: 'The Annual Literature Conference will be on 18th November...' },
    { id: 11, title: 'Environment Day', description: 'Join the Environment Day celebrations on 22nd October...' },
    { id: 12, title: 'Physics Symposium', description: 'Physics Symposium on 10th November...' },
    { id: 13, title: 'Chemistry Workshop', description: 'Sign up for the Chemistry Workshop on 25th September...' },
    { id: 14, title: 'Music Concert', description: 'Music Concert by students on 29th October...' },
    { id: 15, title: 'Art Exhibition', description: 'Art Exhibition will be held on 2nd December...' },
    { id: 16, title: 'Alumni Meetup', description: 'Alumni Meetup on 12th September, register early...' },
    { id: 17, title: 'Robotics Workshop', description: 'Robotics Workshop on 17th October...' },
    { id: 18, title: 'Dance Performance', description: 'Attend the Dance Performance on 22nd November...' },
    { id: 19, title: 'Career Fair', description: 'Career Fair on 3rd October, bring your resumes...' },
    { id: 20, title: 'Drama Club', description: 'Drama Club auditions on 15th October...' }
];

