import { useState } from 'react';

const documents = [
  {
    type: 'Passport',
    name: 'John Doe',
    address: '742 Evergreen Terrace,\nSpringfield, USA',
    number: '123456789',
    issueDate: '01/01/2020',
    expiryDate: '01/01/2030',
    image: 'public/images/passport.png',
    imageAlt: 'Passport document',
  },
  {
    type: 'National ID (NIC)',
    name: 'John Doe',
    address: '742 Evergreen Terrace,\nSpringfield, USA',
    number: 'NIC-99887766',
    issueDate: '06/15/2018',
    expiryDate: '06/15/2028',
    image: 'public/images/passport.png',
    imageAlt: 'National ID document',
  },
];

const DocumentCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + documents.length) % documents.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % documents.length);
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="relative overflow-hidden rounded-2xl sm:flex-row flex flex-col-reverse pb-[72px] border border-[#76757B] backdrop-blur-[30px]">
        {/* Mobile header (below md): title at top-left to match compact design */}
        <div className="absolute top-4 left-6 md:hidden flex items-center gap-3">
          <h2 className="text-white font-semibold text-lg">
            {documents[activeIndex].type}
          </h2>
        </div>

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {documents.map((doc, index) => (
            <div
              key={doc.type}
              className="min-w-full p-6 flex flex-col-reverse  gap-6 md:flex-row md:items-start md:gap-2"
            >
              <div className="flex-1 text-sm flex flex-col items-center justify-center md:items-start text-white">
                {/* Desktop & tablet header: keep inside text block, hide on mobile */}
                <div className="hidden md:flex items-center gap-3 mb-4">
                  <h2 className="text-white font-semibold text-lg">
                    {doc.type}
                  </h2>
                </div>

                <div className="space-y-3 w-full">
                  {[
                    { label: 'Name on Document:', value: doc.name },
                    { label: 'Address on Document:', value: doc.address },
                    { label: 'Document Number:', value: doc.number },
                    { label: 'Expiry Date:', value: doc.expiryDate },
                    { label: 'Issue Date:', value: doc.issueDate },
                  ].map((field) => (
                    <div
                      key={field.label}
                      className="flex flex-row gap-2 sm:gap-8 items-start"
                    >
                      {/* Fixed-width label column so all values line up */}
                      <span className="text-white min-w-[140px] sm:min-w-[170px]">
                        {field.label}
                      </span>
                      <span className="font-semibold text-white whitespace-pre-line">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap flex-col pt-8 md:pt-0 items-center md:items-end gap-4">
                <div className="w-auto md:h-28 lg:h-36 h-36  rounded-lg overflow-hidden border border-[#76757B]">
                  <img
                    src={doc.image}
                    alt={doc.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-xs text-white">
                  {index + 1} / {documents.length}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute right-6 flex gap-3 top-4 md:top-auto md:bottom-4">
          <button
            onClick={goPrev}
            aria-label="Show previous document"
            className="h-9 w-9 rounded-full bg-[#7B7B7B80] text-white flex items-center justify-center text-lg transition"
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.21554 13.8224C8.30119 13.9098 8.36914 14.0135 8.4155 14.1276C8.46185 14.2418 8.48571 14.3641 8.48571 14.4877C8.48571 14.6113 8.46185 14.7336 8.4155 14.8478C8.36914 14.9619 8.30119 15.0656 8.21554 15.153C8.12988 15.2404 8.02819 15.3097 7.91627 15.357C7.80435 15.4042 7.6844 15.4286 7.56326 15.4286C7.44213 15.4286 7.32218 15.4042 7.21026 15.357C7.09834 15.3097 6.99665 15.2404 6.91099 15.153L0.27023 8.37959C0.184558 8.29223 0.116597 8.18851 0.0702309 8.07435C0.0238643 7.9602 0 7.83785 0 7.71429C0 7.59072 0.0238643 7.46837 0.0702309 7.35422C0.116597 7.24007 0.184558 7.13635 0.27023 7.04899L6.91099 0.275576C7.08399 0.0991279 7.31862 0 7.56326 0C7.80791 0 8.04254 0.0991279 8.21554 0.275576C8.38853 0.452025 8.48571 0.69134 8.48571 0.940876C8.48571 1.19041 8.38853 1.42973 8.21554 1.60618L2.22667 7.71429L8.21554 13.8224Z" fill="white" />
            </svg>

          </button>
          <button
            onClick={goNext}
            aria-label="Show next document"
            className="h-9 w-9 rounded-full bg-[#7B7B7B80] text-white flex items-center justify-center text-lg transition"
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.269815 13.8224C0.184158 13.9098 0.116211 14.0135 0.0698538 14.1276C0.0234966 14.2418 -0.000362396 14.3641 -0.000362396 14.4877C-0.000362396 14.6113 0.0234966 14.7336 0.0698538 14.8478C0.116211 14.9619 0.184158 15.0656 0.269815 15.153C0.355474 15.2404 0.457165 15.3097 0.569081 15.357C0.680998 15.4042 0.800949 15.4286 0.922087 15.4286C1.04322 15.4286 1.16318 15.4042 1.27509 15.357C1.38701 15.3097 1.4887 15.2404 1.57436 15.153L8.21512 8.37959C8.30079 8.29223 8.36875 8.18851 8.41512 8.07435C8.46149 7.9602 8.48535 7.83785 8.48535 7.71429C8.48535 7.59072 8.46149 7.46837 8.41512 7.35422C8.36875 7.24007 8.30079 7.13635 8.21512 7.04899L1.57436 0.275576C1.40137 0.0991279 1.16674 0 0.922087 0C0.677438 0 0.442809 0.0991279 0.269815 0.275576C0.0968227 0.452025 -0.000362396 0.69134 -0.000362396 0.940876C-0.000362396 1.19041 0.0968227 1.42973 0.269815 1.60618L6.25868 7.71429L0.269815 13.8224Z" fill="white" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;


