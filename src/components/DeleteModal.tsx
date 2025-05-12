import React from "react";

interface DeleteModalProps {
  onClose: () => void;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  onClose,
  setDeleteModal,
}) => {
  return (
    <div className="fixed left-0 top-0 w-screen h-screen flex items-center justify-center z-50">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-zinc-500 opacity-50 pointer-events-none" />

      {/* Modal content */}
      <div className="relative bg-zinc-800 rounded-md p-6 flex flex-col z-10">
        <h1 className="text-lg font-semibold mb-2">Delete Section</h1>
        <p className="mb-4">Are you sure you want to delete this section?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Yes
          </button>
          <button
            onClick={() => setDeleteModal(false)}
            className="px-4 py-2 bg-zinc-600 text-white rounded hover:bg-zinc-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
