import ProfileCard from '../components/ProfileCard';
import DocumentCard from '../components/DocumentCard';
import WalletInfoCard from '../components/WalletInfoCard';
import ComplianceCard from '../components/ComplianceCard';

const KycDetails = () => {
    return (
        <>
            <div className="h-full bg-cover flex justify-center bg-no-repeat bg-bottom bg-[url('public/images/BgMobile.jpg')] md:bg-[url('public/images/background.jpg')]">
                <div className="px-2 max-w-[1200px] sm:px-4 pt-12 py-6 flex  flex-col gap-6">
                    <h1 className="text-white sm:text-start text-center text-2xl flex font-semibold">
                        KYC Verification
                    </h1>
                    <div className='md:hidden block'>
                    <div className="flex gap-4 items-center  flex-col">
                        <div className="">
                            <img
                                src="public/images/Group 1410089072.png"
                                alt="Profile"
                            />
                        </div>
                        <h2 className="text-white font-semibold text-lg mb-4">John Doe</h2>
                    </div>
                    </div>
                    <div className='grid-cols-1 gap-6 grid  md:grid-cols-3'>
                        <div className='md:col-span-1 gap-6 flex flex-col'>
                            <div className=''>
                                <ProfileCard />
                            </div>
                            <div className=''>
                                <WalletInfoCard />
                            </div>
                        </div>
                        <div className="w-full md:col-span-2 gap-6 flex flex-col">
                            <div className=''>
                                <DocumentCard />
                            </div>
                            <div>
                                <ComplianceCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default KycDetails;
