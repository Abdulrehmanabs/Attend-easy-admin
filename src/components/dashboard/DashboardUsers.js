"use client"
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Link from 'next/link';

const DashboardUsers = () => {

    const passwordTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-start">
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
            </div>
        );
    };

    return (
        <div className="bg-white p-4 rounded-[20px]">
            <div className="flex justify-between items-center mb-4 px-3">
                <h2 className="text-2xl font-semibold">Users</h2>
                <Link href={"/users"} className="text-blue-500">See All</Link>
            </div>
            
            <DataTable 
                value={users} 
                className="w-full"
            >
                <Column field="name" header="Full Name" sortable className="text-nowrap" />
                <Column field="department" header="Department" sortable className="text-nowrap" />
                <Column field="email" header="Email" sortable className="text-nowrap" />
                <Column body={passwordTemplate} header="Password" className="text-nowrap" />
                <Column field="phone" header="Phone" sortable className="text-nowrap" />
            </DataTable>
        </div>
    );
};

export default DashboardUsers;

const users = [
    { id: 1, name: 'Alice Morgan', email: 'alice.morgan@example.com', phone: '03001112233', department: 'Chemistry' },
    { id: 2, name: 'Bob Carter', email: 'bob.carter@example.com', phone: '03002223344', department: 'Physics' },
    { id: 3, name: 'Carla Diaz', email: 'carla.diaz@example.com', phone: '03003334455', department: 'Biology' },
    { id: 4, name: 'David Smith', email: 'david.smith@example.com', phone: '03004445566', department: 'Mathematics' },
    { id: 5, name: 'Ella Johnson', email: 'ella.johnson@example.com', phone: '03005556677', department: 'Computer Science' },
    { id: 6, name: 'Frank Brown', email: 'frank.brown@example.com', phone: '03006667788', department: 'Engineering' },
    // { id: 7, name: 'Grace Lee', email: 'grace.lee@example.com', phone: '03007778899', department: 'History' },
    // { id: 8, name: 'Henry Green', email: 'henry.green@example.com', phone: '03008889900', department: 'Philosophy' },
    // { id: 9, name: 'Isabel Adams', email: 'isabel.adams@example.com', phone: '03009990011', department: 'English' },
    // { id: 10, name: 'Jack Turner', email: 'jack.turner@example.com', phone: '03000011122', department: 'Geography' },
    // { id: 11, name: 'Kara Walker', email: 'kara.walker@example.com', phone: '03001112334', department: 'Psychology' },
    // { id: 12, name: 'Leo Clark', email: 'leo.clark@example.com', phone: '03002223445', department: 'Sociology' },
    // { id: 13, name: 'Mia Hall', email: 'mia.hall@example.com', phone: '03003334556', department: 'Art' },
    // { id: 14, name: 'Noah Allen', email: 'noah.allen@example.com', phone: '03004445667', department: 'Theatre' },
    // { id: 15, name: 'Olivia Wright', email: 'olivia.wright@example.com', phone: '03005556778', department: 'Economics' },
    // { id: 16, name: 'Paul King', email: 'paul.king@example.com', phone: '03006667889', department: 'Political Science' },
    // { id: 17, name: 'Quinn Harris', email: 'quinn.harris@example.com', phone: '03007778990', department: 'Anthropology' },
    // { id: 18, name: 'Rose Scott', email: 'rose.scott@example.com', phone: '03008889001', department: 'Music' },
    // { id: 19, name: 'Steve Martin', email: 'steve.martin@example.com', phone: '03009990112', department: 'Finance' },
    // { id: 20, name: 'Tina Brooks', email: 'tina.brooks@example.com', phone: '03001001223', department: 'Marketing' }
];