
export default function LogoutConfirmation({ closeModal }) {
  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl mb-4 font-semibold text-center text-gray-900">
        Logout
      </h2>
      <p className="text-center text-gray-600">
        Are you sure you want to logout?
      </p>
      <button
        onClick={() => {
          closeModal();
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
        className="w-full mt-4 mb-2 text-nowrap px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Yes, Logout
      </button>
      <button
        onClick={() => closeModal()}
        className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50"
      >
        Cancel
      </button>
    </div>
  );
}
