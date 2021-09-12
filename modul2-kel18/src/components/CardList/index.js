import React from "react";
export default function CardList(props) {
  const { contacts, quotes, isNameBold } = props;
  return (
    <div className="bg-white shadow">
      <div className="max-w-2x1 mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900">
          Daftar Praktikan RPLBK 2021
        </h2>
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <div className="mt-6 grid">
              <div className="group relative shadow">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={contact.avatar}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="px-6 pb-6 pt-3 mt-4 flex justify-between">
                  <div>
                    <h3
                      className={`${
                        isNameBold ? "font-bold " : ""
                      } text-sm text-gray-700`}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {contact.first_name} {contact.last_name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {contact.email}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Kelompok : {contact.id}
                  </p>
                </div>
                <p className="px-6 pb-2 text-sm font-medium text-gray-900">
                  # {quotes[index].quote} #
                </p>
                <p className="px-6 pb-6 text-sm font-medium text-gray-900">
                  - {quotes[index].author} -
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
