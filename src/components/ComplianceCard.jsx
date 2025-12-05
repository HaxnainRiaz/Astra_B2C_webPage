const formatDateTime = (value) => {
  if (!value) return 'Not provided';
  try {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString();
  } catch {
    return value;
  }
};

const truncateSignature = (sig) => {
  if (!sig) return 'Not provided';
  if (sig.length <= 16) return sig;
  return `${sig.slice(0, 10)}...${sig.slice(-8)}`;
};

const ComplianceCard = ({ compliance = {}, issuerSignature, sharedAt, expiresAt }) => {
  const status = compliance.status || 'Not provided';
  const risk = compliance.riskScore || 'Not provided';
  const score = compliance.score !== undefined ? compliance.score : 'Not provided';
  const shared = formatDateTime(sharedAt);
  const expires = formatDateTime(expiresAt);

  return (
    <div className="w-full rounded-2xl border border-[#76757B] p-6 text-sm backdrop-blur-[30px]">
      <p className="text-white font-semibold text-lg mb-4">
        Compliance &amp; Verification
      </p>

      <div className="space-y-3 text-sm">
        {/* Each row: label on the left, value on the right, aligned for all screen sizes */}
        <div className="flex gap-2 sm:gap-8 items-center sm:items-center">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            Verification Status:
          </span>
          <div className="px-4 py-1 rounded-full bg-[#0EAA041A] text-xs">
            <p className="text-sm text-[#1BED76] capitalize">{status}</p>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-8 items-start">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            Risk Score:
          </span>
          <span className="text-white capitalize">
            {risk}
          </span>
        </div>

        <div className="flex gap-2 sm:gap-8 items-start">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            Compliance Score:
          </span>
          <span className="text-white">
            {score}
          </span>
        </div>

        <div className="flex gap-2 sm:gap-8 items-start">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            Issuer Signature:
          </span>
          <span className="text-white break-all">
            {truncateSignature(issuerSignature)}
          </span>
        </div>

        <div className="flex gap-2 sm:gap-8 items-start">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            Shared At:
          </span>
          <span className="text-white">
            {shared}
          </span>
        </div>

        <div className="flex gap-2 sm:gap-8 items-start">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            Expires At:
          </span>
          <span className="text-white">
            {expires}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComplianceCard;


