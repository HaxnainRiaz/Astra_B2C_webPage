const ComplianceCard = () => {
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
            <p className="text-sm text-[#1BED76]">Verified</p>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-8 items-start">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            On-Chain Proof:
          </span>
          <span className="text-white">
            Blockchain-based verification record.
          </span>
        </div>

        <div className="flex gap-2 sm:gap-8 items-start">
          <span className="text-white min-w-[130px] sm:min-w-[160px]">
            Astra Reference:
          </span>
          <span className="text-white">
            Internal/external reference for validation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ComplianceCard;


