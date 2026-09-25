import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Plus,
  Mail,
  Star,
  Send,
  FileText,
  TriangleAlert,
  CircleAlert,
  Trash2,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";

/* =========================================================
   DEFAULT EMAIL DATA
========================================================= */

const defaultEmails = [
  {
    id: 1,
    name: "Jullu Jalal",
    subject:
      "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    label: "Primary",
    labelColor: "bg-emerald-100 text-emerald-500",
    starred: false,
  },
  {
    id: 2,
    name: "Minerva Barnett",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    label: "Work",
    labelColor: "bg-orange-100 text-orange-400",
    starred: true,
  },
  {
    id: 3,
    name: "Peter Lewis",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    label: "Friends",
    labelColor: "bg-purple-100 text-purple-500",
    starred: true,
  },
  {
    id: 4,
    name: "Anthony Briggs",
    subject:
      "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    label: null,
    labelColor: "",
    starred: true,
  },
  {
    id: 5,
    name: "Clifford Morgan",
    subject:
      "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    label: "Social",
    labelColor: "bg-blue-100 text-blue-500",
    starred: true,
  },
  {
    id: 6,
    name: "Cecilia Webster",
    subject: "Always Look On The Bright Side Of Life",
    time: "3:52 PM",
    label: "Friends",
    labelColor: "bg-purple-100 text-purple-500",
    starred: true,
  },
  {
    id: 7,
    name: "Harvey Manning",
    subject:
      "Curling Irons Are As Individual As The Women Who Use Them",
    time: "2:30 PM",
    label: null,
    labelColor: "",
    starred: true,
  },
  {
    id: 8,
    name: "Willie Blake",
    subject:
      "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    label: "Primary",
    labelColor: "bg-emerald-100 text-emerald-500",
    starred: true,
  },
  {
    id: 9,
    name: "Minerva Barnett",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    label: "Work",
    labelColor: "bg-orange-100 text-orange-400",
    starred: true,
  },
  {
    id: 10,
    name: "Fanny Weaver",
    subject:
      "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    label: null,
    labelColor: "",
    starred: true,
  },
  {
    id: 11,
    name: "Olga Hogan",
    subject:
      "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    label: "Social",
    labelColor: "bg-blue-100 text-blue-500",
    starred: true,
  },
  {
    id: 12,
    name: "Lora Houston",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    label: "Friends",
    labelColor: "bg-purple-100 text-purple-500",
    starred: true,
  },
];

/* =========================================================
   LOCAL STORAGE KEY
========================================================= */

const STORAGE_KEY = "dashstack_emails";

/* =========================================================
   INBOX COMPONENT
========================================================= */

function Inbox() {
  const navigate = useNavigate();

  /* =======================================================
     EMAIL STATE
  ======================================================= */

  const [emails, setEmails] = useState(() => {
    try {
      const savedEmails = localStorage.getItem(STORAGE_KEY);

      if (savedEmails) {
        return JSON.parse(savedEmails);
      }
    } catch (error) {
      console.error("Failed to load emails:", error);
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultEmails)
    );

    return defaultEmails;
  });

  /* =======================================================
     SELECTED EMAILS
  ======================================================= */

  const [selectedEmails, setSelectedEmails] = useState([]);

  /* =======================================================
     SEARCH
  ======================================================= */

  const [searchTerm, setSearchTerm] = useState("");

  /* =======================================================
     SAVE EMAILS
  ======================================================= */

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(emails)
    );
  }, [emails]);

  /* =======================================================
     FILTER EMAILS
  ======================================================= */

  const filteredEmails = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      return emails;
    }

    return emails.filter((email) => {
      return (
        email.name.toLowerCase().includes(search) ||
        email.subject.toLowerCase().includes(search) ||
        (email.label &&
          email.label.toLowerCase().includes(search))
      );
    });
  }, [emails, searchTerm]);

  /* =======================================================
     OPEN EMAIL
  ======================================================= */

  const openEmail = (email) => {
    navigate(`/inbox/${email.id}`, {
      state: {
        email,
      },
    });
  };

  /* =======================================================
     TOGGLE STAR
  ======================================================= */

  const toggleStar = (id) => {
    setEmails((currentEmails) =>
      currentEmails.map((email) =>
        email.id === id
          ? {
              ...email,
              starred: !email.starred,
            }
          : email
      )
    );
  };

  /* =======================================================
     TOGGLE CHECKBOX
  ======================================================= */

  const toggleSelectEmail = (id) => {
    setSelectedEmails((currentSelected) => {
      if (currentSelected.includes(id)) {
        return currentSelected.filter(
          (selectedId) => selectedId !== id
        );
      }

      return [...currentSelected, id];
    });
  };

  /* =======================================================
     SELECT / DESELECT ALL
  ======================================================= */

  const toggleSelectAll = () => {
    if (filteredEmails.length === 0) return;

    const filteredIds = filteredEmails.map(
      (email) => email.id
    );

    const allFilteredSelected = filteredIds.every((id) =>
      selectedEmails.includes(id)
    );

    if (allFilteredSelected) {
      setSelectedEmails((currentSelected) =>
        currentSelected.filter(
          (id) => !filteredIds.includes(id)
        )
      );
    } else {
      setSelectedEmails((currentSelected) => [
        ...new Set([
          ...currentSelected,
          ...filteredIds,
        ]),
      ]);
    }
  };

  /* =======================================================
     DELETE SELECTED EMAILS
  ======================================================= */

  const deleteSelectedEmails = () => {
    if (selectedEmails.length === 0) return;

    setEmails((currentEmails) =>
      currentEmails.filter(
        (email) => !selectedEmails.includes(email.id)
      )
    );

    setSelectedEmails([]);
  };

  /* =======================================================
     STARRED COUNT
  ======================================================= */

  const starredCount = emails.filter(
    (email) => email.starred
  ).length;

  /* =======================================================
     SELECT ALL STATUS
  ======================================================= */

  const allSelected =
    filteredEmails.length > 0 &&
    filteredEmails.every((email) =>
      selectedEmails.includes(email.id)
    );

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className="min-h-[calc(100vh-150px)]">

      {/* ===================================================
          PAGE TITLE
      =================================================== */}

      <h1 className="mb-5 text-2xl font-semibold text-gray-900">
        Inbox
      </h1>

      {/* ===================================================
          MAIN INBOX LAYOUT
      =================================================== */}

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[175px_minmax(0,1fr)]">

        {/* =================================================
            LEFT EMAIL MENU
        ================================================= */}

        <div className="rounded-xl border border-gray-200 bg-white p-4">

          {/* COMPOSE */}

          <button
            type="button"
            className="mb-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-500 px-3 py-2.5 text-xs font-medium text-white transition hover:bg-blue-600"
          >
            <Plus size={14} />
            Compose
          </button>

          {/* MY EMAIL */}

          <p className="mb-2 text-xs font-semibold text-gray-800">
            My Email
          </p>

          <div className="space-y-1">

            {/* INBOX */}

            <button
              type="button"
              onClick={() => navigate("/inbox")}
              className="flex w-full items-center justify-between rounded-md bg-blue-50 px-3 py-2 text-xs font-medium text-blue-500"
            >
              <span className="flex items-center gap-2">
                <Mail size={14} />
                Inbox
              </span>

              <span>{emails.length}</span>
            </button>

            {/* STARRED */}

            <button
              type="button"
              onClick={() => navigate("/starred")}
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600 transition hover:bg-blue-50 hover:text-blue-500"
            >
              <span className="flex items-center gap-2">
                <Star size={14} />
                Starred
              </span>

              <span>{starredCount}</span>
            </button>

            {/* SENT */}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <Send size={14} />
                Sent
              </span>

              <span>24,532</span>
            </button>

            {/* DRAFT */}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <FileText size={14} />
                Draft
              </span>

              <span>09</span>
            </button>

            {/* SPAM */}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <TriangleAlert size={14} />
                Spam
              </span>

              <span>14</span>
            </button>

            {/* IMPORTANT */}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <CircleAlert size={14} />
                Important
              </span>

              <span>18</span>
            </button>

            {/* BIN */}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs text-gray-600 transition hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <Trash2 size={14} />
                Bin
              </span>

              <span>9</span>
            </button>

          </div>

          {/* =================================================
              LABELS
          ================================================= */}

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
                className="mt-2 text-xs text-gray-400 transition hover:text-blue-500"
              >
                + Create New Label
              </button>

            </div>
          </div>
        </div>

        {/* =================================================
            EMAIL LIST
        ================================================= */}

        <div className="min-w-0 rounded-xl border border-gray-200 bg-white">

          {/* =================================================
              TOOLBAR
          ================================================= */}

          <div className="flex flex-col gap-3 border-b border-gray-100 p-3 sm:flex-row sm:items-center sm:justify-between">

            {/* LEFT TOOLBAR */}

            <div className="flex min-w-0 items-center gap-3">

              {/* SELECT ALL */}

              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleSelectAll}
                disabled={filteredEmails.length === 0}
                aria-label="Select all emails"
                className="h-3.5 w-3.5 shrink-0 cursor-pointer accent-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
              />

              {/* SEARCH */}

              <div className="relative w-full sm:max-w-xs">

                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search mail"
                  className="h-9 w-full rounded-full border border-gray-200 bg-gray-50 pl-9 pr-4 text-xs outline-none transition focus:border-blue-400"
                />

              </div>
            </div>

            {/* SELECTED COUNT */}

            {selectedEmails.length > 0 && (
              <div className="text-xs font-medium text-blue-500">
                {selectedEmails.length} selected
              </div>
            )}

            {/* ACTIONS */}

            <div className="flex items-center gap-1">

              <button
                type="button"
                className="rounded-md border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-50"
                title="Mark as read"
              >
                <Mail size={14} />
              </button>

              <button
                type="button"
                className="rounded-md border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-50"
                title="Mark as important"
              >
                <CircleAlert size={14} />
              </button>

              <button
                type="button"
                onClick={deleteSelectedEmails}
                disabled={selectedEmails.length === 0}
                className={`rounded-md border border-gray-200 p-2 transition ${
                  selectedEmails.length > 0
                    ? "text-red-500 hover:bg-red-50"
                    : "cursor-not-allowed text-gray-300"
                }`}
                title="Delete selected"
              >
                <Trash2 size={14} />
              </button>

              <button
                type="button"
                className="rounded-md border border-gray-200 p-2 text-gray-600 transition hover:bg-gray-50"
                title="More options"
              >
                <MoreHorizontal size={14} />
              </button>

            </div>
          </div>

          {/* =================================================
              EMAIL ROWS
          ================================================= */}

          <div>

            {filteredEmails.length > 0 ? (
              filteredEmails.map((email) => {

                const isSelected =
                  selectedEmails.includes(email.id);

                return (
                  <div
                    key={email.id}
                    className={`group flex min-h-[48px] items-center gap-2 border-b border-gray-100 px-3 py-2 transition ${
                      isSelected
                        ? "bg-blue-50"
                        : "hover:bg-gray-50"
                    }`}
                  >

                    {/* CHECKBOX */}

                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() =>
                        toggleSelectEmail(email.id)
                      }
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      aria-label={`Select ${email.name}`}
                      className="h-3.5 w-3.5 shrink-0 cursor-pointer accent-blue-500"
                    />

                    {/* STAR */}

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleStar(email.id);
                      }}
                      aria-label={
                        email.starred
                          ? "Remove from starred"
                          : "Add to starred"
                      }
                      className="shrink-0 rounded-full p-0.5 transition hover:bg-gray-100"
                    >
                      <Star
                        size={15}
                        className={
                          email.starred
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300 transition hover:text-amber-400"
                        }
                      />
                    </button>

                    {/* =================================================
                        SENDER - CLICK TO OPEN EMAIL
                    ================================================= */}

                    <button
                      type="button"
                      onClick={() => openEmail(email)}
                      className="w-[115px] shrink-0 truncate text-left text-[11px] font-medium text-gray-700 transition hover:text-blue-600 sm:w-[135px]"
                    >
                      {email.name}
                    </button>

                    {/* LABEL */}

                    <div className="w-[60px] shrink-0">

                      {email.label && (
                        <span
                          className={`inline-block rounded px-2 py-0.5 text-[9px] font-medium ${email.labelColor}`}
                        >
                          {email.label}
                        </span>
                      )}

                    </div>

                    {/* =================================================
                        SUBJECT - CLICK TO OPEN EMAIL
                    ================================================= */}

                    <button
                      type="button"
                      onClick={() => openEmail(email)}
                      className="min-w-0 flex-1 truncate text-left text-[11px] text-gray-600 transition hover:text-blue-600"
                    >
                      {email.subject}
                    </button>

                    {/* TIME */}

                    <div className="hidden w-[55px] shrink-0 text-right text-[10px] text-gray-500 sm:block">
                      {email.time}
                    </div>

                  </div>
                );
              })
            ) : (
              <div className="flex min-h-[250px] items-center justify-center text-sm text-gray-400">
                No emails found.
              </div>
            )}

          </div>

          {/* =================================================
              PAGINATION
          ================================================= */}

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

        </div>
      </div>
    </div>
  );
}

export default Inbox;