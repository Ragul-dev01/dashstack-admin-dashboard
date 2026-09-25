import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const STORAGE_KEY = "dashstack_emails";

function Starred() {
  const navigate = useNavigate();

  const [emails, setEmails] = useState([]);

  /* Load emails from localStorage */
  useEffect(() => {
    const savedEmails = localStorage.getItem(STORAGE_KEY);

    if (savedEmails) {
      setEmails(JSON.parse(savedEmails));
    }
  }, []);

  /* Only starred emails */
  const starredEmails = emails.filter(
    (email) => email.starred
  );

  /* Remove from starred */
  const removeFromStarred = (id) => {
    const updatedEmails = emails.map((email) =>
      email.id === id
        ? {
            ...email,
            starred: false,
          }
        : email
    );

    setEmails(updatedEmails);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedEmails)
    );
  };

  return (
    <div className="min-h-[calc(100vh-150px)]">

      {/* Page Title */}
      <h1 className="mb-5 text-2xl font-semibold text-gray-900">
        Starred
      </h1>

      {/* Main Content */}
      <div className="rounded-xl border border-gray-200 bg-white">

        {/* Email List */}
        <div>
          {starredEmails.length > 0 ? (
            starredEmails.map((email) => (
              <div
                key={email.id}
                className="group flex min-h-[55px] items-center gap-3 border-b border-gray-100 px-4 py-3 transition hover:bg-gray-50"
              >

                {/* Checkbox */}
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 shrink-0 cursor-pointer accent-blue-500"
                />

                {/* Star */}
                <button
                  type="button"
                  onClick={() =>
                    removeFromStarred(email.id)
                  }
                  title="Remove from starred"
                  className="shrink-0 rounded-full p-1 transition hover:bg-gray-100"
                >
                  <Star
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                </button>

                {/* Sender */}
                <div className="w-[120px] shrink-0 truncate text-[11px] font-medium text-gray-700 sm:w-[150px]">
                  {email.name}
                </div>

                {/* Label */}
                <div className="w-[65px] shrink-0">
                  {email.label && (
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-[9px] font-medium ${email.labelColor}`}
                    >
                      {email.label}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="min-w-0 flex-1 truncate text-[11px] text-gray-600">
                  {email.subject}
                </div>

                {/* Time */}
                <div className="hidden w-[60px] shrink-0 text-right text-[10px] text-gray-500 sm:block">
                  {email.time}
                </div>

              </div>
            ))
          ) : (
            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center px-5 text-center">

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-50">
                <Star
                  size={25}
                  className="text-gray-300"
                />
              </div>

              <h2 className="text-sm font-semibold text-gray-700">
                No starred emails
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Star an email to see it here.
              </p>

              <button
                type="button"
                onClick={() => navigate("/inbox")}
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-600"
              >
                Go to Inbox
              </button>

            </div>
          )}
        </div>

        {/* Pagination */}
        {starredEmails.length > 0 && (
          <div className="flex items-center justify-end gap-1 p-3">

            <button
              type="button"
              className="rounded-md border border-gray-200 p-1.5 text-gray-500 transition hover:bg-gray-50"
            >
              <ChevronLeft size={14} />
            </button>

            <button
              type="button"
              className="rounded-md border border-gray-200 p-1.5 text-gray-500 transition hover:bg-gray-50"
            >
              <ChevronRight size={14} />
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Starred;