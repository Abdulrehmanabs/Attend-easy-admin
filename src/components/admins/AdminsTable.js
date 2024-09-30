import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import Modal from '../Modal';

const AdminsTable = () => {
    const [globalFilter, setGlobalFilter] = useState(null);
    const [data, setData] = useState(admins);
    const [delAdmin, setDelAdmin] = useState(false);
    const [selected, setSelected] = useState(null);

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
    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-2 justify-center">
                <Button icon="pi pi-pencil" className="border py-1 text-blue-700" />
                <Button 
                    onClick={() => {
                        setDelAdmin(true)
                        setSelected(rowData)
                    }} 
                    icon="pi pi-trash" className="border py-1 text-red-400" 
                />
            </div>
        );
    };

    return (
        <div className="bg-white mx-auto p-4">
            {/* del Admin  */}
            <Modal isModalOpen={delAdmin} closeModal={() => setDelAdmin(false)}>
                <div className="p-2">
                    <h2 className="text-4xl mb-4 font-semibold text-center text-gray-900">
                        Delete Admin
                    </h2>
                    <p className="text-center text-gray-600">
                        Are you sure you want to delete Admin?
                    </p>
                    <button
                        onClick={() => {
                            setData(data.filter(item => item.id !== selected?.id))
                            setDelAdmin(false)
                        }} 
                        className="w-full mt-4 mb-2 text-nowrap px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Delete, Anyway 
                    </button>
                    <button
                        onClick={() => setDelAdmin(false)}
                        className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50"
                    >
                        Cancel
                    </button>
                </div>
            </Modal>

            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Admins</h2>
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
                value={data} 
                // paginator 
                // rows={10} 
                globalFilter={globalFilter} 
                className="w-full"
            >
                <Column field="id" header="Sr#" sortable className=" text-nowrap" />
                <Column field="name" header="Full Name" sortable className=" text-nowrap" />
                <Column field="email" header="Email" sortable className=" text-nowrap" />
                <Column body={passwordTemplate} header="Password" className="text-nowrap" />
                <Column field="phone" header="Phone" sortable className=" text-nowrap" />
                <Column body={actionTemplate} header="Action" />
            </DataTable>
        </div>
    );
};

export default AdminsTable;

const admins = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '03001234567' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '03002345678' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', phone: '03003456789' },
    { id: 4, name: 'Emily Johnson', email: 'emily.johnson@example.com', phone: '03004567890' },
    { id: 5, name: 'Daniel Williams', email: 'daniel.williams@example.com', phone: '03005678901' },
    { id: 6, name: 'Sophia Garcia', email: 'sophia.garcia@example.com', phone: '03006789012' },
    { id: 7, name: 'David Martinez', email: 'david.martinez@example.com', phone: '03007890123' },
    { id: 8, name: 'Olivia Davis', email: 'olivia.davis@example.com', phone: '03008901234' },
    { id: 9, name: 'James Wilson', email: 'james.wilson@example.com', phone: '03009012345' },
    { id: 10, name: 'Ava Clark', email: 'ava.clark@example.com', phone: '03001239876' },
    { id: 11, name: 'Ethan Lewis', email: 'ethan.lewis@example.com', phone: '03001230987' },
    { id: 12, name: 'Isabella Lee', email: 'isabella.lee@example.com', phone: '03001232098' },
    { id: 13, name: 'Alexander Walker', email: 'alexander.walker@example.com', phone: '03001233109' },
    { id: 14, name: 'Mia Young', email: 'mia.young@example.com', phone: '03001234210' },
    { id: 15, name: 'Henry Harris', email: 'henry.harris@example.com', phone: '03001235321' },
    { id: 16, name: 'Amelia Adams', email: 'amelia.adams@example.com', phone: '03001236432' },
    { id: 17, name: 'Lucas Baker', email: 'lucas.baker@example.com', phone: '03001237543' },
    { id: 18, name: 'Charlotte Gonzalez', email: 'charlotte.gonzalez@example.com', phone: '03001238654' },
    { id: 19, name: 'Benjamin Nelson', email: 'benjamin.nelson@example.com', phone: '03001239765' },
    { id: 20, name: 'Emma Scott', email: 'emma.scott@example.com', phone: '03001230876' }
];

