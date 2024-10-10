import { useState } from 'react';
import toast from 'react-hot-toast';

const LeaveModal = ({closeModal, selected, editView}) => {
  const [category, setCategory] = useState(selected?.category || 'Paid Leave');
  const [status, setStatus] = useState(selected?.status || 'Approve');

  const handleSubmit = () => {
    if (editView) {
        console.log('Form submitted:', { category, status });
        toast.success('Leave Updated Successfully!');
        closeModal();
    } else {
        closeModal();
    }
  }

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-xl mb-4 font-semibold text-gray-900">
        {editView && "Edit "}
        Requested Leave
      </h2>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-6'> 
        <div className="w-full space-y-4">
            <div className='py-2 px-3 bg-gray-100 rounded-md flex gap-4 justify-between'>
            <span>Emp Name</span>
            <span>{selected.name}</span>
            </div>

            <div className='py-2 px-3 bg-gray-100 rounded-md flex gap-4 justify-between'>
            <span>Department</span>
            <span>{selected.department}</span>
            </div>

            <div className='py-2 px-3 bg-gray-100 rounded-md flex gap-4 justify-between'>
            <span>Start Date</span>
            <span>{selected.startDate}</span>
            </div>

            <div className='py-2 px-3 bg-gray-100 rounded-md flex gap-4 justify-between'>
            <span>End Date</span>
            <span>{selected.endDate}</span>
            </div>

            <div className='py-2 px-3 bg-gray-100 rounded-md flex gap-4 justify-between'>
            <span>Leave Type</span>
            <span>{selected.leaveType}</span>
            </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md h-full">
            <label className="block font-semibold">Leave Title:</label>
            <div className="mt-1 mb-6">{selected.category} Request</div>
            <label className="block font-semibold">Description:</label>
            <div className="mt-1">
                I am writing to inform you that I am currently unwell and unable to attend work. I kindly request leave to recover. I will keep you updated on my condition and return to work as soon as possible.
            </div>
        </div>
      </div>

        {editView && (
        <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
            <label className="block text-gray-700">Category</label>
            <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Paid Leave">Paid Leave</option>
                <option value="Unpaid Leave">Unpaid Leave</option>
                <option value="Sick Leave">Sick Leave</option>
            </select>
            </div>

            <div>
            <label className="block text-gray-700">Status</label>
            <select
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="approved">Approve</option>
                <option value="rejected">Reject</option>
            </select>
            </div>
        </div>
        )}


        <button onClick={handleSubmit} className="bg-blue-600 text-white py-2 px-4 rounded-md w-full">
            {editView ? "Update Changes" : "Go Back"}
        </button>
    </div>
  )
};

export default LeaveModal;
