import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const UsersTable = () => {
    const [globalFilter, setGlobalFilter] = useState(null);

    const passwordTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-center">
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
                <span className='bg-gray-400 rounded-full w-3 h-3' />
            </div>
        );
    };
    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-center">
                <Button icon="pi pi-pencil" className="border py-1 text-blue-700" />
                <Button onClick={() => users.filter(item => item.id !== rowData.id)} icon="pi pi-trash" className="border py-1 text-red-400" />
            </div>
        );
    };

    return (
        <div className="bg-white mx-auto p-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Users</h2>
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
                value={users} 
                paginator 
                rows={10} 
                globalFilter={globalFilter} 
                className="w-full"
            >
                <Column field="id" header="Sr#" sortable className=" text-nowrap" />
                <Column field="name" header="Full Name" sortable className=" text-nowrap" />
                <Column field="department" header="Department" sortable className=" text-nowrap" />
                <Column field="email" header="Email" sortable className=" text-nowrap" />
                <Column body={passwordTemplate} header="Password" className="text-nowrap" />
                <Column field="phone" header="Phone" sortable className=" text-nowrap" />
                <Column body={actionTemplate} header="Action" />
            </DataTable>
        </div>
    );
};

export default UsersTable;

const users = [
    { id: 1, name: 'Alice Morgan', email: 'alice.morgan@example.com', phone: '03001112233', department: 'Chemistry' },
    { id: 2, name: 'Bob Carter', email: 'bob.carter@example.com', phone: '03002223344', department: 'Physics' },
    { id: 3, name: 'Carla Diaz', email: 'carla.diaz@example.com', phone: '03003334455', department: 'Biology' },
    { id: 4, name: 'David Smith', email: 'david.smith@example.com', phone: '03004445566', department: 'Mathematics' },
    { id: 5, name: 'Ella Johnson', email: 'ella.johnson@example.com', phone: '03005556677', department: 'Computer Science' },
    { id: 6, name: 'Frank Brown', email: 'frank.brown@example.com', phone: '03006667788', department: 'Engineering' },
    { id: 7, name: 'Grace Lee', email: 'grace.lee@example.com', phone: '03007778899', department: 'History' },
    { id: 8, name: 'Henry Green', email: 'henry.green@example.com', phone: '03008889900', department: 'Philosophy' },
    { id: 9, name: 'Isabel Adams', email: 'isabel.adams@example.com', phone: '03009990011', department: 'English' },
    { id: 10, name: 'Jack Turner', email: 'jack.turner@example.com', phone: '03000011122', department: 'Geography' },
    { id: 11, name: 'Kara Walker', email: 'kara.walker@example.com', phone: '03001112334', department: 'Psychology' },
    { id: 12, name: 'Leo Clark', email: 'leo.clark@example.com', phone: '03002223445', department: 'Sociology' },
    { id: 13, name: 'Mia Hall', email: 'mia.hall@example.com', phone: '03003334556', department: 'Art' },
    { id: 14, name: 'Noah Allen', email: 'noah.allen@example.com', phone: '03004445667', department: 'Theatre' },
    { id: 15, name: 'Olivia Wright', email: 'olivia.wright@example.com', phone: '03005556778', department: 'Economics' },
    { id: 16, name: 'Paul King', email: 'paul.king@example.com', phone: '03006667889', department: 'Political Science' },
    { id: 17, name: 'Quinn Harris', email: 'quinn.harris@example.com', phone: '03007778990', department: 'Anthropology' },
    { id: 18, name: 'Rose Scott', email: 'rose.scott@example.com', phone: '03008889001', department: 'Music' },
    { id: 19, name: 'Steve Martin', email: 'steve.martin@example.com', phone: '03009990112', department: 'Finance' },
    { id: 20, name: 'Tina Brooks', email: 'tina.brooks@example.com', phone: '03001001223', department: 'Marketing' }
];


