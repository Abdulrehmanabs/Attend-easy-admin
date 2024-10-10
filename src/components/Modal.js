const Modal = ({ isModalOpen, closeModal, children }) => {
  
    if (!isModalOpen) return null; // If the modal is not open, return null
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="absolute inset-0 bg-black/50 opacity-50"
          onClick={() => closeModal()} // Close the modal when clicking on the overlay
        />
        <div className="bg-white m-4 relative p-6 rounded-lg shadow-lg z-10 max-h-screen overflow-y-auto">
          <button onClick={() => closeModal()} className="absolute top-2 right-4 text-gray-400 text-2xl hover:text-gray-700"> &times;</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;


// use like this 
// const [isModalOpen, setIsModalOpen] = useState(true);

// <Modal  isModalOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
//   {"children here"}
// </Modal>