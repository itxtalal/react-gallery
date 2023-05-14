import { useContext, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import { ImagesContext } from '../context/ImagesCtx';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { selectedImages, deleteImages, setAddImageScreen } =
    useContext(ImagesContext);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const addImages = () => {
    setAddImageScreen(() => true);
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center text-2xl font-semibold">
          React Gallery
        </a>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isNavbarOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isNavbarOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="flex flex-col gap-4 items-center w-full md:flex-row md:space-x-6">
            {selectedImages.length > 0 ? (
              <button
                onClick={deleteImages}
                className="flex items-center gap-1 justify-evenly bg-red-300 hover:bg-red-400 cursor-pointer px-4 py-2 rounded-lg w-28 h-10"
              >
                <p>Delete</p>
                <MdDelete size={20} />
              </button>
            ) : null}
            <button
              onClick={addImages}
              className="flex items-center justify-evenly gap-1 bg-cyan-300 hover:bg-cyan-400 cursor-pointer px-6 py-2 rounded-lg w-28 h-10"
            >
              <p>Add</p>
              <GrAdd size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
