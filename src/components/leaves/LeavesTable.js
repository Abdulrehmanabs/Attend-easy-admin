"use client";
import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
        

const RequestedLeaves = () => {
  const [globalFilter, setGlobalFilter] = useState(null);

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">Requested Leaves</h2>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText 
              className="ps-10 p-2 border min-w-[300px]"
              type="search"
              placeholder="Search here..."
              onInput={(e) => setGlobalFilter(e.target.value)}
            />
        </IconField>
      </div>

      <DataTable
        value={leaveData}
        // paginator
        // rows={10}
        globalFilter={globalFilter}
        className="w-full"
      >
        <Column field="sr" header="Sr#" className="!text-nowrap" sortable></Column>
        <Column field="name" header="Emp Name" className="!text-nowrap" sortable></Column>
        <Column field="department" header="Department" className="!text-nowrap" sortable></Column>
        <Column field="startDate" header="Start Date" className="!text-nowrap" sortable></Column>
        <Column field="endDate" header="End Date" className="!text-nowrap" sortable></Column>
        <Column field="leaveType" header="Leave Type" className="!text-nowrap" sortable></Column>
        <Column
          header="Action"
          body={(rowData) => (
            <Button 
              label="View" 
              severity="info"  
              className="bg-[#0171EA] text-white px-4 py-2 rounded-md "
              onClick={() => console.log(rowData)}
            />
          )}
        />
      </DataTable>
    </div>
  );
};

export default RequestedLeaves;


const leaveData = [
    { sr: 1, name: 'Mehmood', department: 'Chemistry', startDate: '30-09-2024', endDate: '01-10-2024', leaveType: 'Full leave' },
    { sr: 2, name: 'Ahmed', department: 'Physics', startDate: '02-10-2024', endDate: '02-10-2024', leaveType: 'Half leave' },
    { sr: 3, name: 'Sara', department: 'Mathematics', startDate: '03-10-2024', endDate: '03-10-2024', leaveType: 'Full leave' },
    { sr: 4, name: 'Fatima', department: 'Biology', startDate: '04-10-2024', endDate: '04-10-2024', leaveType: 'Full leave' },
    { sr: 5, name: 'Ali', department: 'Chemistry', startDate: '05-10-2024', endDate: '05-10-2024', leaveType: 'Half leave' },
    { sr: 6, name: 'Usman', department: 'Physics', startDate: '06-10-2024', endDate: '07-10-2024', leaveType: 'Full leave' },
    { sr: 7, name: 'Mehmood', department: 'Mathematics', startDate: '08-10-2024', endDate: '09-10-2024', leaveType: 'Full leave' },
    { sr: 8, name: 'Ayesha', department: 'Biology', startDate: '10-10-2024', endDate: '10-10-2024', leaveType: 'Half leave' },
    { sr: 9, name: 'Zara', department: 'Chemistry', startDate: '11-10-2024', endDate: '11-10-2024', leaveType: 'Full leave' },
    { sr: 10, name: 'Hassan', department: 'Physics', startDate: '12-10-2024', endDate: '12-10-2024', leaveType: 'Half leave' },
    { sr: 11, name: 'Mehmood', department: 'Chemistry', startDate: '13-10-2024', endDate: '13-10-2024', leaveType: 'Full leave' },
    { sr: 12, name: 'Ahmed', department: 'Physics', startDate: '14-10-2024', endDate: '14-10-2024', leaveType: 'Full leave' },
    { sr: 13, name: 'Sara', department: 'Mathematics', startDate: '15-10-2024', endDate: '15-10-2024', leaveType: 'Half leave' },
    { sr: 14, name: 'Fatima', department: 'Biology', startDate: '16-10-2024', endDate: '16-10-2024', leaveType: 'Full leave' },
    { sr: 15, name: 'Ali', department: 'Chemistry', startDate: '17-10-2024', endDate: '18-10-2024', leaveType: 'Full leave' },
    { sr: 16, name: 'Usman', department: 'Physics', startDate: '19-10-2024', endDate: '19-10-2024', leaveType: 'Half leave' },
    { sr: 17, name: 'Mehmood', department: 'Mathematics', startDate: '20-10-2024', endDate: '20-10-2024', leaveType: 'Full leave' },
    { sr: 18, name: 'Ayesha', department: 'Biology', startDate: '21-10-2024', endDate: '22-10-2024', leaveType: 'Full leave' },
    { sr: 19, name: 'Zara', department: 'Chemistry', startDate: '23-10-2024', endDate: '23-10-2024', leaveType: 'Half leave' },
    { sr: 20, name: 'Hassan', department: 'Physics', startDate: '24-10-2024', endDate: '25-10-2024', leaveType: 'Full leave' }
];
