import { useNavigate } from "react-router-dom";
import notFoundImage from "../assets/not-found-404.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#5283f8] px-4">
      <div className="flex w-full max-w-[360px] flex-col items-center rounded-xl bg-white px-8 py-10 text-center shadow-sm sm:px-12">
        <img
          src={notFoundImage}
          alt="404 Page Not Found"
          className="mb-8 h-auto w-[230px] object-contain"
        />

        <h1 className="mb-5 text-lg font-semibold text-[#252525]">
          Looks like you’ve got lost....
        </h1>

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="w-full rounded-md bg-[#5b8def] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#4f82e5]"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default NotFound;