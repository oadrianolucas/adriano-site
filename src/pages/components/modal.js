import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pb-64 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
        shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900 font-extrabold">
                  Resumes
                </h3>
                <div className="">
                  <ul className="text-blue-500 font-bold">
                    <ol className="my-2">
                      <a
                        href="/files/Adriano_Lucas_Developer_Fullstack.pdf"
                        className="hover:text-blue-300 transition-all"
                      >
                        Resume in english
                      </a>
                    </ol>
                    <ol className="my-2">
                      <a
                        href="/files/Adriano_Lucas_Desenvolvedor_Fullstack.pdf"
                        className="hover:text-blue-300 transition-all"
                      >
                        Currículo em português
                      </a>
                    </ol>
                    <ol className="my-2">
                      <a
                        href="/files/Adriano_Lucas_Desarrollador_Fullstack.pdf"
                        className="hover:text-blue-300 transition-all"
                      >
                        Curriculum em espanhol
                      </a>
                    </ol>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="transition-transform transform hover:scale-105 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
