const ProfileCard = () => {
  return (
    <div className="rounded-2xl w-full border border-[#76757B] p-5 flex gap-4 items-center justify-center backdrop-blur-[30px]">
      <div className="flex flex-col gap-6 ">
        <div className=" hidden md:block">
          <div className="flex gap-4 items-center">
            <div className="">
              <img
                src="public/images/Group 1410089072.png"
                alt="Profile"
              />
            </div>
            <h2 className="text-white font-semibold text-lg">John Doe</h2>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-200 w-full">
          {/* Name row */}
          <div className="flex flex-row gap-2 sm:gap-8 block md:hidden items-start">
            <span className="text-white min-w-[130px] md:min-w-[0px]">
              Name:
            </span>
            <span className="font-semibold text-white">John Doe</span>
          </div>

          {/* Date of Birth row */}
          <div className="flex flex-row gap-2 sm:gap-8 items-center">
            <div className="flex items-center gap-2 min-w-[130px] md:min-w-[0px]">
              <div className="p-[13px] rounded-xl hidden md:block bg-[#FB68001C] flex items-center justify-center">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2432 0.166016C12.5744 0.16615 12.8428 0.434337 12.8428 0.765625V1.73145C16.6891 2.26556 18.0104 3.99628 18.2988 8.41699C18.3329 8.93911 18.3526 9.49904 18.3604 10.0986L18.3643 10.7119C18.3643 18.0371 16.8435 19.7874 9.87402 19.8896L9.18262 19.8945C1.62109 19.8945 0 18.2734 0 10.7119L0.00390625 10.0986C0.0116107 9.49904 0.0313713 8.93911 0.0654297 8.41699C0.353893 3.99627 1.67512 2.26456 5.52148 1.73047V0.765625C5.52148 0.434375 5.78989 0.166212 6.12109 0.166016C6.45246 0.166016 6.7207 0.434254 6.7207 0.765625V1.6084C7.28901 1.56731 7.90276 1.54274 8.56543 1.53418L9.18262 1.53027C10.0851 1.53028 10.903 1.55389 11.6436 1.60742V0.765625C11.6436 0.434254 11.9118 0.166016 12.2432 0.166016ZM1.23438 9.0166C1.21099 9.53872 1.2002 10.1028 1.2002 10.7119C1.2002 12.5747 1.30161 13.991 1.54297 15.0771C1.78132 16.1494 2.14041 16.8259 2.60449 17.29C3.06864 17.7542 3.74506 18.1132 4.81738 18.3516C5.90362 18.593 7.31962 18.6943 9.18262 18.6943C11.0454 18.6943 12.4607 18.593 13.5469 18.3516C14.6193 18.1132 15.2966 17.7542 15.7607 17.29C16.2246 16.8259 16.583 16.149 16.8213 15.0771C17.0626 13.991 17.1641 12.5747 17.1641 10.7119C17.1641 10.1028 17.1533 9.53872 17.1299 9.0166H1.23438ZM9.18262 2.73047C8.24735 2.73047 7.43243 2.75812 6.7207 2.8125V3.82617C6.72053 4.15739 6.45236 4.42676 6.12109 4.42676C5.79 4.42656 5.52166 4.15727 5.52148 3.82617V2.94434C4.33699 3.12322 3.52473 3.41727 2.94824 3.83984C2.08979 4.46924 1.54345 5.55856 1.31934 7.81641H17.0449C16.8208 5.5585 16.2745 4.46923 15.416 3.83984C14.8395 3.41723 14.0273 3.12321 12.8428 2.94434V3.82617C12.8426 4.15731 12.5743 4.42662 12.2432 4.42676C11.9119 4.42676 11.6437 4.15739 11.6436 3.82617V2.8125C10.9321 2.75815 10.1175 2.73048 9.18262 2.73047Z" fill="#FB6800" />
                  <path d="M6.88721 14.7036C7.21818 14.704 7.48669 14.9722 7.48682 15.3032C7.48682 15.6344 7.21826 15.9025 6.88721 15.9028H4.59131C4.25994 15.9028 3.9917 15.6346 3.9917 15.3032C3.99183 14.972 4.26002 14.7036 4.59131 14.7036H6.88721ZM13.7739 14.7036C14.1049 14.704 14.3734 14.9722 14.3735 15.3032C14.3735 15.6343 14.1049 15.9024 13.7739 15.9028H11.478C11.1467 15.9028 10.8784 15.6346 10.8784 15.3032C10.8785 14.972 11.1467 14.7036 11.478 14.7036H13.7739ZM6.88721 11.6431C7.21824 11.6434 7.48679 11.9116 7.48682 12.2427C7.48682 12.5738 7.21826 12.8419 6.88721 12.8423H4.59131C4.25994 12.8423 3.9917 12.574 3.9917 12.2427C3.99173 11.9113 4.25996 11.6431 4.59131 11.6431H6.88721ZM13.7739 11.6431C14.1049 11.6435 14.3735 11.9116 14.3735 12.2427C14.3735 12.5738 14.1049 12.8419 13.7739 12.8423H11.478C11.1467 12.8423 10.8784 12.574 10.8784 12.2427C10.8784 11.9113 11.1467 11.6431 11.478 11.6431H13.7739Z" fill="#FB6800" />
                </svg>
              </div>
              <span className="text-white block md:hidden">Date of Birth (DOB):</span>
            </div>
            <span className="font-semibold text-white">01/01/1990</span>
          </div>

          {/* Nationality row */}
          <div className="flex flex-row gap-2 sm:gap-8 items-center">
            <div className="flex items-center gap-2 min-w-[130px] md:min-w-[0px]">
              <div className=" rounded-xl px-[14.5px] hidden md:block py-[10px]  bg-[#8726B745] flex items-center justify-center ">
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.999837 22.0991H5.6665" stroke="#8726B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33301 22.0995V1" stroke="#8726B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.33301 2.17188L13.833 6.86066L3.33301 11.5494" stroke="#8726B7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <span className="text-white block md:hidden">Nationality:</span>
            </div>
            <span className="font-semibold text-white">United States</span>
          </div>

          {/* Phone number row */}
          <div className="flex flex-row gap-2 sm:gap-8 items-center">
            <div className="flex items-center gap-2 min-w-[130px] md:min-w-[0px]">
              <div className=" rounded-xl p-3 bg-[#FF00311C] hidden md:block flex items-center justify-center ">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3923 12.3349C10.98 12.7488 11.596 13.0969 12.2311 13.3603C12.6254 13.5033 13.2441 13.0984 13.699 12.8006L13.6991 12.8006C13.8128 12.7262 13.9163 12.6585 14.0034 12.6077L14.0321 12.5916C14.4606 12.351 14.9364 12.0837 15.5483 12.2126C16.0981 12.3255 17.9842 13.8118 18.5055 14.3387C18.8467 14.6773 19.0362 15.0348 19.0646 15.4017C19.1215 16.7658 17.2923 18.2992 16.8563 18.5626C15.9275 19.24 14.6858 19.2306 13.1883 18.5532C11.5866 17.9041 9.67203 16.54 7.82383 14.8843C7.16224 14.2916 5.89172 13.0437 5.53015 12.6269C3.663 10.6043 2.08967 8.4312 1.35039 6.672C0.999705 5.92881 0.829102 5.24207 0.829102 4.63058C0.829102 4.0285 0.999705 3.49228 1.33143 3.03131C1.53047 2.68323 3.13224 0.782922 4.54445 0.82996C4.89513 0.867589 5.25529 1.04633 5.60598 1.385C6.13674 1.90241 7.66268 3.7745 7.77642 4.32954C7.90618 4.92754 7.63712 5.39958 7.39471 5.82485L7.37835 5.85356C7.32371 5.94795 7.24964 6.05993 7.16866 6.18234C6.87034 6.63332 6.47828 7.22599 6.61917 7.60335C6.9708 8.46883 7.47313 9.31551 8.07877 10.0963C8.75091 10.9 9.80472 11.9209 10.3923 12.3349Z" stroke="#FF0031" stroke-width="1.5" />
                </svg>
              </div>
              <span className="text-white block md:hidden">Phone No:</span>
            </div>
            <span className="font-semibold text-white">+1 (555) 23456</span>
          </div>

          {/* Address row */}
          <div className="flex flex-row gap-2 sm:gap-8 items-center">
            <div className="flex items-center gap-2 min-w-[130px] md:min-w-[0px]">
              <div className=" rounded-xl p-3 bg-[#F3BA2F1C] hidden md:block flex items-center justify-center ">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.94728 11.7461C8.18163 11.7461 6.73926 10.3121 6.73926 8.53812C6.73926 6.76417 8.18163 5.33838 9.94728 5.33838C11.7129 5.33838 13.1553 6.77246 13.1553 8.54641C13.1553 10.3204 11.7129 11.7461 9.94728 11.7461ZM9.94728 6.5818C8.86965 6.5818 7.98268 7.46048 7.98268 8.54641C7.98268 9.63233 8.86136 10.511 9.94728 10.511C11.0332 10.511 11.9119 9.63233 11.9119 8.54641C11.9119 7.46048 11.0249 6.5818 9.94728 6.5818Z" fill="#F3BA2F" />
                  <path d="M9.94755 18.8668C8.7207 18.8668 7.48557 18.4026 6.52399 17.4824C4.0786 15.1282 1.37623 11.3731 2.39584 6.90508C3.31597 2.85153 6.85557 1.03613 9.94755 1.03613C9.94755 1.03613 9.94755 1.03613 9.95584 1.03613C13.0478 1.03613 16.5874 2.85153 17.5075 6.91337C18.5189 11.3814 15.8165 15.1282 13.3711 17.4824C12.4095 18.4026 11.1744 18.8668 9.94755 18.8668ZM9.94755 2.27955C7.53531 2.27955 4.43505 3.56442 3.61439 7.17863C2.71913 11.083 5.17281 14.4485 7.39439 16.5789C8.82847 17.9632 11.0749 17.9632 12.509 16.5789C14.7223 14.4485 17.176 11.083 16.2973 7.17863C15.4683 3.56442 12.3598 2.27955 9.94755 2.27955Z" fill="#F3BA2F" />
                </svg>
              </div>
              <span className="text-white block md:hidden">Address:</span>
            </div>
            <span className="font-semibold text-white">
              742 Evergreen Terrace, Springfield, USA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;


