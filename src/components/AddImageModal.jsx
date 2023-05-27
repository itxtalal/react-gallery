import { useContext, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { ImagesContext } from '../context/ImagesCtx';
import PropTypes from 'prop-types';

const AddImageModal = () => {
  const { setAddImageScreen, addImage, setNewImage } =
    useContext(ImagesContext);

  return (
    <div className="min-h-screen w-screen fixed top-0 bg-slate-800 bg-opacity-70 z-50">
      <div
        onClick={() => setAddImageScreen(() => false)}
        className="absolute top-6 right-12 p-1"
      >
        <GrClose className="text-white text-2xl cursor-pointer" />
      </div>

      <div className="max-w-2xl h-auto rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <FileDropzone addImage={addImage} setNewImage={setNewImage} />
      </div>
    </div>
  );
};

const PreviewImage = ({ uploadedFile }) => {
  if (!uploadedFile) return null;
  return (
    <img
      src={URL.createObjectURL(uploadedFile)}
      alt="Uploaded File"
      className="max-h-80 max-w-full my-4 mx-auto rounded-lg"
    />
  );
};

const FileUpload = ({ setUploadedFile, setNewImage }) => {
  const handleFileUpload = (event) => {
    // Handle file upload logic here
    const file = event.target.files[0];
    console.log('file', file);
    if (!file) return;
    setUploadedFile(file);
    setNewImage(() => ({
      id: Date.now(),
      image: URL.createObjectURL(file),
    }));
    // Process the uploaded file
  };

  return (
    <div className="flex h-auto items-center justify-center w-full">
      <label className="flex flex-col w-full h-auto border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
        <div className="flex flex-col items-center justify-center pt-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
            Attach a file
          </p>
        </div>
        <input type="file" className="opacity-0" onChange={handleFileUpload} />
      </label>
    </div>
  );
};

const FileDropzone = ({ addImage, setNewImage }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <div className="flex justify-center">
      <div className="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div className="m-4">
          <label className="inline-block mb-2 text-lg font-semibold text-gray-500">
            File Upload
          </label>
          {uploadedFile ? <PreviewImage uploadedFile={uploadedFile} /> : null}
          <FileUpload
            setUploadedFile={setUploadedFile}
            setNewImage={setNewImage}
          />
        </div>

        <div className="flex justify-center p-2">
          <button
            onClick={addImage}
            className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddImageModal;

PreviewImage.propTypes = {
  uploadedFile: PropTypes.object.isRequired,
};

FileUpload.propTypes = {
  setUploadedFile: PropTypes.func.isRequired,
  setNewImage: PropTypes.func.isRequired,
};

FileDropzone.propTypes = {
  addImage: PropTypes.func.isRequired,
  setNewImage: PropTypes.func.isRequired,
};
