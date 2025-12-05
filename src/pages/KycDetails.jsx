import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import DocumentCard from '../components/DocumentCard';
import WalletInfoCard from '../components/WalletInfoCard';
import ComplianceCard from '../components/ComplianceCard';

const getUserFullName = (user) => {
  const parts = [user?.firstName, user?.lastName].filter(Boolean);
  return parts.length ? parts.join(' ') : 'Not provided';
};

const KycDetails = () => {
  const [searchParams] = useSearchParams();
  const shareToken = searchParams.get('share_token');

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSharedData = async () => {
      if (!shareToken) {
        setError('Missing share token in URL.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://api.kyc.app.astraprotocol.com/api/v2/dashboard/share/${shareToken}`);

        if (!response.ok) {
          throw new Error('Failed to fetch shared data.');
        }

        const json = await response.json();
        if (json?.status !== 'success' || !json?.data) {
          throw new Error(json?.message || 'Unexpected response format.');
        }

        setData(json.data);
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchSharedData();
  }, [shareToken]);

  const userDetails = data?.shared_data?.user_details ?? {};
  const complianceData = data?.shared_data?.compliance_data ?? {};
  const issuerSignature = data?.shared_data?.issuer_signature ?? '';
  const sharedAt = data?.shared_at;
  const expiresAt = data?.expires_at;
  const wallets = data?.shared_data?.wallets ?? [];
  const walletAddress = wallets.length > 0 ? wallets[0]?.address : userDetails?.walletAddress;
  const documents = useMemo(() => {
    const rawDocs = data?.shared_data?.identity_documents;
    if (!rawDocs) return [];
    return Array.isArray(rawDocs) ? rawDocs : [rawDocs];
  }, [data]);

  const displayName = getUserFullName(userDetails);

  return (
    <div className="h-full bg-cover flex justify-center bg-no-repeat bg-bottom bg-[url('public/images/BgMobile.jpg')] md:bg-[url('public/images/background.jpg')]">
      <div className="px-2 max-w-[1200px] sm:px-4 pt-12 py-6 flex flex-col gap-6 w-full">
        <h1 className="text-white sm:text-start text-center text-2xl flex font-semibold">
          KYC Verification
        </h1>

        <div className="md:hidden block">
          <div className="flex gap-4 items-center flex-col">
            <div className="w-[60px] h-[60px] flex-shrink-0">
              {userDetails?.profile_pic ? (
                <img
                  src={userDetails.profile_pic}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#315BF0] to-[#8726B7] flex items-center justify-center text-white font-semibold text-xl">
                  {(() => {
                    const first = userDetails?.firstName?.charAt(0)?.toUpperCase() || '';
                    const last = userDetails?.lastName?.charAt(0)?.toUpperCase() || '';
                    if (first && last) return `${first}${last}`;
                    if (first) return first;
                    return '?';
                  })()}
                </div>
              )}
            </div>
            <h2 className="text-white font-semibold text-lg mb-4">{displayName}</h2>
          </div>
        </div>

        {loading ? (
          <div className="text-white text-center py-10">Loading shared data...</div>
        ) : error ? (
          <div className="text-red-400 text-center py-10">{error}</div>
        ) : (
          <div className="grid-cols-1 gap-6 grid md:grid-cols-3">
            <div className="md:col-span-1 gap-6 flex flex-col">
              <div className="">
                <ProfileCard user={userDetails} />
              </div>
              <div className="">
                <WalletInfoCard walletAddress={walletAddress} wallets={wallets} />
              </div>
            </div>
            <div className="w-full md:col-span-2 gap-6 flex flex-col">
              <div className="">
                <DocumentCard
                  documents={documents}
                  fallbackName={displayName}
                  countryName={userDetails?.countryName}
                  address={userDetails?.address}
                />
              </div>
              <div className='pb-20'>
                <ComplianceCard
                  compliance={complianceData}
                  issuerSignature={issuerSignature}
                  sharedAt={sharedAt}
                  expiresAt={expiresAt}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KycDetails;
