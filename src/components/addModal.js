import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddModal = ({ closeModal, editData, isAdmin, updateData }) => {
    const fixData = {
        name: editData?.name ? editData?.name : "",
        email: editData?.email ? editData?.email : "",
        password: editData?.password ? editData?.password : "",
        phoneNumber: editData?.phoneNumber ? editData?.phoneNumber : "",
    };
    const data = isAdmin ? fixData : {
        ...fixData,
        department: editData?.department ? editData?.department : "",
    };

  const [formData, setFormData] = useState(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(formData)
    toast.success(!editData ? "Admin added successfully!" : "Admin updated successfully!");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 min-w-[400px]">
      <h2 className="text-xl font-semibold">
        {editData ? "Edit " : "Add "}
        {isAdmin ? " Admin" : " User"}
      </h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      {!isAdmin && (
        <div>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
      )}

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-lg w-full !mt-8"
      >
        {!editData ? "Add" : "Update Changes"}
      </button>
    </form>
  );
};

export default AddModal;
