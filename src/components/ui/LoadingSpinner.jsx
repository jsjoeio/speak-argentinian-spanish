import { CgSpinner } from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <div className="min-h-[400px] grid justify-center items-start animate-pulse">
      <div className="flex items-center gap-1">
        <p className="font-sans">Loading…</p>
        <CgSpinner className="w-6 h-6 animate-spin text-arg-gold" />
      </div>
    </div>
  );
};
export default LoadingSpinner;
