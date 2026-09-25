import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Printer,
  Star,
  Trash2,
  Paperclip,
  FileText,
  Send,
  MoreVertical,
} from "lucide-react";

const STORAGE_KEY = "dashstack_emails";

function EmailDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [email, setEmail] = useState(null);

  /* =========================================================
     LOAD EMAIL
  ========================================================= */

  useEffect(() => {
    const savedEmails = localStorage.getItem(STORAGE_KEY);

    if (!savedEmails) {
      return;
    }

    const emails = JSON.parse(savedEmails);

    const foundEmail = emails.find(
      (item) => String(item.id) === String(id)
    );

    setEmail(foundEmail || null);
  }, [id]);

  /* =========================================================
     TOGGLE STAR
  ========================================================= */

  const toggleStar = () => {
    if (!email) return;

    const savedEmails = localStorage.getItem(STORAGE_KEY);

    if (!savedEmails) return;

    const emails = JSON.parse(savedEmails);

    const updatedEmails = emails.map((item) =>
      item.id === email.id
        ? {
            ...item,
            starred: !item.starred,
          }
        : item
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedEmails)
    );

    setEmail((currentEmail) => ({
      ...currentEmail,
      starred: !currentEmail.starred,
    }));
  };

  /* =========================================================
     DELETE EMAIL
  ========================================================= */

  const deleteEmail = () => {
    if (!email) return;

    const savedEmails = localStorage.getItem(STORAGE_KEY);

    if (!savedEmails) return;

    const emails = JSON.parse(savedEmails);

    const updatedEmails = emails.filter(
      (item) => item.id !== email.id
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedEmails)
    );

    navigate("/inbox");
  };

  /* =========================================================
     EMAIL NOT FOUND
  ========================================================= */

  if (!email) {
    return (
      <div className="min-h-[calc(100vh-150px)]">
        <h1 className="mb-5 text-2xl font-semibold text-gray-900">
          Inbox
        </h1>

        <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-gray-200 bg-white">
          <div className="text-center">
            <h2 className="text-sm font-semibold text-gray-700">
              Email not found
            </h2>

            <button
              type="button"
              onClick={() => navigate("/inbox")}
              className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-xs font-medium text-white hover:bg-blue-600"
            >
              Back to Inbox
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-150px)]">

      {/* =====================================================
          PAGE TITLE
      ===================================================== */}

      <h1 className="mb-5 text-2xl font-semibold text-gray-900">
        Inbox
      </h1>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[175px_minmax(0,1fr)]">

        {/* ===================================================
            LEFT EMAIL MENU
        =================================================== */}

        <div className="rounded-xl border border-gray-200 bg-white p-4">

          <button
            type="button"
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-3 py-2.5 text-xs font-medium text-white transition hover:bg-blue-600"
          >
            <span className="text-sm">+</span>
            Compose
          </button>

          <p className="mb-2 text-xs font-semibold text-gray-800">
            My Email
          </p>

          <div className="space-y-1">

            <button
              type="button"
              onClick={() => navigate("/inbox")}
              className="flex w-full items-center justify-between rounded-md bg-blue-50 px-3 py-2 text-xs font-medium text-blue-500"
            >
              <span className="flex items-center gap-2">
                <span>✉</span>
                Inbox
              </span>

              <span>1253</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/starred")}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600 transition hover:bg-blue-50 hover:text-blue-500"
            >
              <span className="flex items-center gap-2">
                <Star size={14} />
                Starred
              </span>

              <span>245</span>
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600"
            >
              <span className="flex items-center gap-2">
                <Send size={14} />
                Sent
              </span>

              <span>24,532</span>
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600"
            >
              <span className="flex items-center gap-2">
                <FileText size={14} />
                Draft
              </span>

              <span>09</span>
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600"
            >
              <span>⚠</span>

              <span className="flex-1 text-left ml-2">
                Spam
              </span>

              <span>14</span>
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600"
            >
              <span>ⓘ</span>

              <span className="flex-1 text-left ml-2">
                Important
              </span>

              <span>18</span>
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600"
            >
              <span>🗑</span>

              <span className="flex-1 text-left ml-2">
                Bin
              </span>

              <span>9</span>
            </button>

          </div>

          {/* Labels */}

          <div className="mt-6">

            <p className="mb-3 text-xs font-semibold text-gray-800">
              Label
            </p>

            <div className="space-y-3">

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="h-3 w-3 rounded-sm border-2 border-emerald-400" />
                Primary
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="h-3 w-3 rounded-sm border-2 border-blue-400" />
                Social
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="h-3 w-3 rounded-sm border-2 border-orange-400" />
                Work
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="h-3 w-3 rounded-sm border-2 border-purple-400" />
                Friends
              </div>

              <button
                type="button"
                className="mt-2 text-xs text-gray-400 hover:text-blue-500"
              >
                + Create New Label
              </button>

            </div>
          </div>

        </div>

        {/* ===================================================
            EMAIL CONTENT
        =================================================== */}

        <div className="min-w-0 rounded-xl border border-gray-200 bg-white">

          {/* =================================================
              EMAIL HEADER
          ================================================= */}

          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">

            <div className="flex min-w-0 items-center gap-3">

              <button
                type="button"
                onClick={() => navigate("/inbox")}
                className="rounded-md p-1.5 text-gray-500 transition hover:bg-gray-100"
                title="Back to Inbox"
              >
                <ArrowLeft size={16} />
              </button>

              <div className="min-w-0">

                <div className="flex items-center gap-2">

                  <h2 className="truncate text-sm font-semibold text-gray-800">
                    {email.name}
                  </h2>

                  {email.label && (
                    <span
                      className={`rounded px-2 py-0.5 text-[9px] font-medium ${email.labelColor}`}
                    >
                      {email.label}
                    </span>
                  )}

                </div>

              </div>

            </div>

            {/* Actions */}

            <div className="flex shrink-0 items-center gap-1">

              <button
                type="button"
                className="rounded-md border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-50"
                title="Print"
              >
                <Printer size={14} />
              </button>

              <button
                type="button"
                onClick={toggleStar}
                className="rounded-md border border-gray-200 p-2 transition hover:bg-gray-50"
                title="Star"
              >
                <Star
                  size={14}
                  className={
                    email.starred
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-500"
                  }
                />
              </button>

              <button
                type="button"
                onClick={deleteEmail}
                className="rounded-md border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-50"
                title="Delete"
              >
                <Trash2 size={14} />
              </button>

            </div>
          </div>

          {/* =================================================
              MESSAGE AREA
          ================================================= */}

          <div className="min-h-[520px] p-5 sm:p-8">

            {/* Incoming Message */}

            <div className="flex gap-3">

              <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gray-200" />

              <div className="max-w-[600px] rounded-lg bg-gray-100 px-4 py-4">

                <p className="text-[11px] leading-5 text-gray-600">
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum
                  is that it has a more-or-less normal distribution of
                  letters.
                </p>

                <div className="mt-3 flex items-center justify-end gap-2 text-[9px] text-gray-400">
                  {email.time}
                  <MoreVertical size={12} />
                </div>

              </div>

            </div>

            {/* Reply Message */}

            <div className="mt-6 flex justify-end">

              <div className="max-w-[600px] rounded-lg bg-blue-500 px-4 py-4 text-white">

                <p className="text-[11px] leading-5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                  in some form, by injected humour.
                </p>

                <div className="mt-3 flex items-center justify-end gap-2 text-[9px] text-blue-100">
                  6:34 pm
                  <MoreVertical size={12} />
                </div>

              </div>

            </div>

            {/* Second Message */}

            <div className="mt-6 flex gap-3">

              <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gray-200" />

              <div className="max-w-[600px] rounded-lg bg-gray-100 px-4 py-4">

                <p className="text-[11px] leading-5 text-gray-600">
                  The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as
                  opposed to using Content here, content here, making
                  it look readable English.
                </p>

                <div className="mt-3 flex items-center justify-end gap-2 text-[9px] text-gray-400">
                  6:38 pm
                  <MoreVertical size={12} />
                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              MESSAGE INPUT
          ================================================= */}

          <div className="border-t border-gray-100 p-3">

            <div className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2">

              <input
                type="text"
                placeholder="Write message"
                className="min-w-0 flex-1 bg-transparent text-xs text-gray-700 outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
              >
                <Paperclip size={15} />
              </button>

              <button
                type="button"
                className="rounded-md bg-blue-500 px-3 py-1.5 text-[10px] font-medium text-white transition hover:bg-blue-600"
              >
                Send
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default EmailDetails;