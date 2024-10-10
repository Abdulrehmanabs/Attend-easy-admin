"use client";
import React, { Fragment, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import LeaveModal from "./LeaveModal";
import Modal from "../Modal";
        

const RequestedLeaves = () => {
  const [globalFilter, setGlobalFilter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [currentState, setCurrentState] = useState("pending");
  const [data, setData] = useState(leaveData);
  const [editView, setEditView] = useState(false);

  const actionTemplate = (rowData) => {
    if (currentState == "pending") {
      return (
        <Button 
          label="View" 
          severity="info"  
          className="bg-[#0171EA] text-white px-4 py-2 rounded-md "
          onClick={() => {
            setSelected(rowData);
            setIsModalOpen(true);
            setEditView(true);
          }}
        />
      )
    } else if (currentState != "pending") {
      return (
        <div className="flex gap-2">
          <Button 
            onClick={() => {
              setSelected(rowData);
              setIsModalOpen(true);
            }}
            icon="pi pi-eye" className="border py-1 text-blue-700" 
          />
          <Button 
            onClick={() => {
              setSelected(rowData);
              setIsModalOpen(true);
              setEditView(true);
            }} 
            icon="pi pi-pencil" className="border py-1 text-blue-700" 
          />
        </div>
      )
    }
  }

  useEffect(() => {
      setData(leaveData.filter(item => item.status == currentState));
  }, [currentState]);

  return (
    <div className="bg-white p-4">
      <Modal 
        isModalOpen={isModalOpen} closeModal={() => {
          setIsModalOpen(false)
          setEditView(false);
        }}>
        <LeaveModal 
          closeModal={() => {
            setIsModalOpen(false)
            setEditView(false);
          }} 
          selected={selected} editView={editView} 
        />
      </Modal>
      <div className="flex me-auto items-center mb-4">
        <h2 className="text-3xl font-bold">Requested Leaves</h2>
        <IconField iconPosition="left" className="ms-auto">
          <InputIcon className="pi pi-search"> </InputIcon>
          <InputText 
            className="ps-10 p-2 border min-w-[300px]"
            type="search"
            placeholder="Search here..."
            onInput={(e) => setGlobalFilter(e.target.value)}
          />
        </IconField>
        <Button
          onClick={() => setCurrentState("pending")}
          label="Requested" className={`border rounded-lg ms-2 p-2 px-4 ${currentState == "pending" ? " bg-blue-600 text-white":" "}`}
        />
        <Button
          onClick={() => setCurrentState("approved")}
          label="Approved" className={`border rounded-lg ms-2 p-2 px-4 ${currentState == "approved" ? " bg-blue-600 text-white":" "}`}
        />
        <Button
          onClick={() => setCurrentState("rejected")}
          label="Rejected" className={`border rounded-lg ms-2 p-2 px-4 ${currentState == "rejected" ? " bg-blue-600 text-white":" "}`}
        />
      </div>

      <DataTable
        value={data}
        // paginator
        // rows={10}
        globalFilter={globalFilter}
        className="w-full"
      >
        <Column field="sr" header="Sr#" className="!text-nowrap" sortable></Column>
        <Column field="name" header="Name" className="!text-nowrap" sortable></Column>
        <Column field="department" header="Department" className="!text-nowrap" sortable></Column>
        <Column field="startDate" header="Start Date" className="!text-nowrap" sortable></Column>
        <Column field="endDate" header="End Date" className="!text-nowrap" sortable></Column>
        <Column field="leaveType" header="Leave Type" className="!text-nowrap" sortable></Column>
        {currentState != "pending" && <Column field="status" header="Status" className="capitalize"></Column>}
        {currentState != "pending" && <Column field="category" header="Category" className="!text-nowrap" sortable></Column>}
        <Column
          header="Action"
          body={(rowData) => actionTemplate(rowData)}
        />
      </DataTable>
    </div>
  );
};

export default RequestedLeaves;


const leaveData = [
    { sr: 1, name: 'Mehmood', department: 'Chemistry', startDate: '30-09-2024', endDate: '01-10-2024', leaveType: 'Full leave', status: 'rejected', category: 'Paid Leave' },
    { sr: 2, name: 'Ahmed', department: 'Physics', startDate: '02-10-2024', endDate: '02-10-2024', leaveType: 'Half leave', status: 'pending', category: 'Unpaid Leave' },
    { sr: 3, name: 'Sara', department: 'Mathematics', startDate: '03-10-2024', endDate: '03-10-2024', leaveType: 'Full leave', status: 'pending', category: 'Sick Leave' },
    { sr: 4, name: 'Fatima', department: 'Biology', startDate: '04-10-2024', endDate: '04-10-2024', leaveType: 'Full leave', status: 'approved', category: 'Paid Leave' },
    { sr: 5, name: 'Ali', department: 'Chemistry', startDate: '05-10-2024', endDate: '05-10-2024', leaveType: 'Half leave', status: 'rejected', category: 'Unpaid Leave' },
    { sr: 6, name: 'Usman', department: 'Physics', startDate: '06-10-2024', endDate: '07-10-2024', leaveType: 'Full leave', status: 'approved', category: 'Sick Leave' },
    { sr: 7, name: 'Mehmood', department: 'Mathematics', startDate: '08-10-2024', endDate: '09-10-2024', leaveType: 'Full leave', status: 'pending', category: 'Paid Leave' },
    { sr: 8, name: 'Ayesha', department: 'Biology', startDate: '10-10-2024', endDate: '10-10-2024', leaveType: 'Half leave', status: 'rejected', category: 'Unpaid Leave' },
    { sr: 9, name: 'Zara', department: 'Chemistry', startDate: '11-10-2024', endDate: '11-10-2024', leaveType: 'Full leave', status: 'pending', category: 'Paid Leave' },
    { sr: 10, name: 'Hassan', department: 'Physics', startDate: '12-10-2024', endDate: '12-10-2024', leaveType: 'Half leave', status: 'approved', category: 'Sick Leave' },
    { sr: 11, name: 'Mehmood', department: 'Chemistry', startDate: '13-10-2024', endDate: '13-10-2024', leaveType: 'Full leave', status: 'approved', category: 'Paid Leave' },
    { sr: 12, name: 'Ahmed', department: 'Physics', startDate: '14-10-2024', endDate: '14-10-2024', leaveType: 'Full leave', status: 'approved', category: 'Unpaid Leave' },
    { sr: 13, name: 'Sara', department: 'Mathematics', startDate: '15-10-2024', endDate: '15-10-2024', leaveType: 'Half leave', status: 'rejected', category: 'Sick Leave' },
    { sr: 14, name: 'Fatima', department: 'Biology', startDate: '16-10-2024', endDate: '16-10-2024', leaveType: 'Full leave', status: 'pending', category: 'Paid Leave' },
    { sr: 15, name: 'Ali', department: 'Chemistry', startDate: '17-10-2024', endDate: '18-10-2024', leaveType: 'Full leave', status: 'pending', category: 'Unpaid Leave' },
    { sr: 16, name: 'Usman', department: 'Physics', startDate: '19-10-2024', endDate: '19-10-2024', leaveType: 'Half leave', status: 'rejected', category: 'Sick Leave' },
    { sr: 17, name: 'Mehmood', department: 'Mathematics', startDate: '20-10-2024', endDate: '20-10-2024', leaveType: 'Full leave', status: 'approved', category: 'Paid Leave' },
    { sr: 18, name: 'Ayesha', department: 'Biology', startDate: '21-10-2024', endDate: '22-10-2024', leaveType: 'Full leave', status: 'approved', category: 'Unpaid Leave' },
    { sr: 19, name: 'Zara', department: 'Chemistry', startDate: '23-10-2024', endDate: '23-10-2024', leaveType: 'Half leave', status: 'pending', category: 'Sick Leave' },
    { sr: 20, name: 'Hassan', department: 'Physics', startDate: '24-10-2024', endDate: '25-10-2024', leaveType: 'Full leave', status: 'pending', category: 'Paid Leave' },
  
    // New random values
    { sr: 21, name: 'Bilal', department: 'Engineering', startDate: '26-10-2024', endDate: '27-10-2024', leaveType: 'Full leave', status: 'pending', category: 'Sick Leave' },
    { sr: 22, name: 'Nimra', department: 'Medicine', startDate: '28-10-2024', endDate: '29-10-2024', leaveType: 'Full leave', status: 'approved', category: 'Paid Leave' },
    { sr: 23, name: 'Omar', department: 'Law', startDate: '30-10-2024', endDate: '31-10-2024', leaveType: 'Half leave', status: 'rejected', category: 'Unpaid Leave' },
    { sr: 24, name: 'Sana', department: 'Psychology', startDate: '01-11-2024', endDate: '02-11-2024', leaveType: 'Full leave', status: 'pending', category: 'Paid Leave' },
    { sr: 25, name: 'Ibrahim', department: 'Economics', startDate: '03-11-2024', endDate: '04-11-2024', leaveType: 'Full leave', status: 'approved', category: 'Sick Leave' },
    { sr: 26, name: 'Kiran', department: 'Computer Science', startDate: '05-11-2024', endDate: '05-11-2024', leaveType: 'Half leave', status: 'rejected', category: 'Paid Leave' },
    { sr: 27, name: 'Waqas', department: 'Art', startDate: '06-11-2024', endDate: '07-11-2024', leaveType: 'Full leave', status: 'pending', category: 'Sick Leave' },
    { sr: 28, name: 'Zainab', department: 'Physics', startDate: '08-11-2024', endDate: '09-11-2024', leaveType: 'Full leave', status: 'rejected', category: 'Unpaid Leave' },
    { sr: 29, name: 'Danish', department: 'Chemistry', startDate: '10-11-2024', endDate: '10-11-2024', leaveType: 'Half leave', status: 'rejected', category: 'Sick Leave' },
    { sr: 30, name: 'Hira', department: 'Architecture', startDate: '11-11-2024', endDate: '12-11-2024', leaveType: 'Full leave', status: 'rejected', category: 'Paid Leave' }
];  
