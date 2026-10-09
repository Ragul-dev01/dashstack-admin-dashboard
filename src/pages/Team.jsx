import { useState } from "react";
import { Camera, ChevronDown, ArrowLeft } from "lucide-react";

import jasonPrice from "../assets/jason-price.png";
import jukkoeSisao from "../assets/jukkoe-sisao.png";
import harrietKing from "../assets/harriet-king.png";
import lenoraBenson from "../assets/lenora-benson.png";
import oliviaReese from "../assets/olivia-reese.png";
import berthaValdez from "../assets/bertha-valdez.png";
import harrietPayne from "../assets/harriet-payne.png";
import georgeBryant from "../assets/george-bryant.png";
import lilyFrench from "../assets/lily-french.png";
import howardAdkins from "../assets/howard-adkins.png";
import earlBowman from "../assets/earl-bowman.png";
import patrickPadilla from "../assets/patrick-padilla.png";

const teamMembers = [
  {
    name: "Jason Price",
    role: "Admin",
    email: "janick_parisian@yahoo.com",
    image: jasonPrice,
  },
  {
    name: "Jukkoe Sisao",
    role: "CEO",
    email: "sibyl_kozey@gmail.com",
    image: jukkoeSisao,
  },
  {
    name: "Harriet King",
    role: "CTO",
    email: "nadia.block@hotmail.com",
    image: harrietKing,
  },
  {
    name: "Lenora Benson",
    role: "Lead",
    email: "feil.wallace@kunde.us",
    image: lenoraBenson,
  },
  {
    name: "Olivia Reese",
    role: "Strategist",
    email: "kemmer.hattie@cremin.us",
    image: oliviaReese,
  },
  {
    name: "Bertha Valdez",
    role: "CEO",
    email: "loraine.koelpin@tromp.io",
    image: berthaValdez,
  },
  {
    name: "Harriett Payne",
    role: "Digital Marketer",
    email: "nannie_west@estrella.tv",
    image: harrietPayne,
  },
  {
    name: "George Bryant",
    role: "Social Media",
    email: "delmer.kling@gmail.com",
    image: georgeBryant,
  },
  {
    name: "Lily French",
    role: "Strategist",
    email: "lucienne.herman@hotmail.com",
    image: lilyFrench,
  },
  {
    name: "Howard Adkins",
    role: "CEO",
    email: "wiegand.leonor@herman.us",
    image: howardAdkins,
  },
  {
    name: "Earl Bowman",
    role: "Digital Marketer",
    email: "waino_altenwerth@nicolette.tv",
    image: earlBowman,
  },
  {
    name: "Patrick Padilla",
    role: "Social Media",
    email: "octavia.nienow@gleichner.net",
    image: patrickPadilla,
  },
];

function Team() {
  const [showAddMember, setShowAddMember] = useState(false);
  const [photo, setPhoto] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "CEO",
    gender: "Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleAddMember = (e) => {
    e.preventDefault();

    console.log("New team member:", {
      ...formData,
      photo,
    });

    setShowAddMember(false);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "CEO",
      gender: "Male",
    });

    setPhoto(null);
  };

  if (showAddMember) {
    return (
      <div className="min-h-full bg-[#f5f6fa]">
        {/* Header */}
        <div className="mb-5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowAddMember(false)}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[4px] border border-[#e1e5ea] bg-white text-[#555b63] transition hover:bg-[#f1f3f5]"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
          </button>

          <h1 className="text-[24px] font-semibold leading-[30px] text-[#20242b]">
            Add Team Member
          </h1>
        </div>

        {/* Form Card */}
        <div className="rounded-[10px] border border-[#e2e5e9] bg-white px-6 py-8 sm:px-10 lg:px-16">
          <form onSubmit={handleAddMember}>
            {/* Upload Photo */}
            <div className="mb-7 flex flex-col items-center">
              <label
                htmlFor="team-photo"
                className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#f0f1f3]"
              >
                {photo ? (
                  <img
                    src={photo}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Camera size={19} color="#5f6368" strokeWidth={1.8} />
                )}
              </label>

              <input
                id="team-photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />

              <label
                htmlFor="team-photo"
                className="mt-2 cursor-pointer text-[9px] font-medium text-[#5b8def]"
              >
                Upload Photo
              </label>
            </div>

            {/* Form Fields */}
            <div className="mx-auto grid max-w-[850px] grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label className="mb-2 block text-[9px] font-medium text-[#4d535a]">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="h-[40px] w-full rounded-[4px] border border-[#e1e5ea] bg-[#f8f9fb] px-3 text-[10px] text-[#333] outline-none placeholder:text-[#b5bac1] focus:border-[#5b8def]"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="mb-2 block text-[9px] font-medium text-[#4d535a]">
                  Last Name
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="h-[40px] w-full rounded-[4px] border border-[#e1e5ea] bg-[#f8f9fb] px-3 text-[10px] text-[#333] outline-none placeholder:text-[#b5bac1] focus:border-[#5b8def]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-[9px] font-medium text-[#4d535a]">
                  Your email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="h-[40px] w-full rounded-[4px] border border-[#e1e5ea] bg-[#f8f9fb] px-3 text-[10px] text-[#333] outline-none placeholder:text-[#b5bac1] focus:border-[#5b8def]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="mb-2 block text-[9px] font-medium text-[#4d535a]">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="h-[40px] w-full rounded-[4px] border border-[#e1e5ea] bg-[#f8f9fb] px-3 text-[10px] text-[#333] outline-none placeholder:text-[#b5bac1] focus:border-[#5b8def]"
                />
              </div>

              {/* Position */}
              <div>
                <label className="mb-2 block text-[9px] font-medium text-[#4d535a]">
                  Position
                </label>

                <div className="relative">
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="h-[40px] w-full appearance-none rounded-[4px] border border-[#e1e5ea] bg-[#f8f9fb] px-3 text-[10px] text-[#777] outline-none focus:border-[#5b8def]"
                  >
                    <option value="CEO">CEO</option>
                    <option value="CTO">CTO</option>
                    <option value="Admin">Admin</option>
                    <option value="Lead">Lead</option>
                    <option value="Strategist">Strategist</option>
                    <option value="Digital Marketer">
                      Digital Marketer
                    </option>
                    <option value="Social Media">Social Media</option>
                  </select>

                  <ChevronDown
                    size={13}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8c9299]"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-[9px] font-medium text-[#4d535a]">
                  Gender
                </label>

                <div className="relative">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="h-[40px] w-full appearance-none rounded-[4px] border border-[#e1e5ea] bg-[#f8f9fb] px-3 text-[10px] text-[#777] outline-none focus:border-[#5b8def]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  <ChevronDown
                    size={13}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8c9299]"
                  />
                </div>
              </div>
            </div>

            {/* Add Now */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="h-[42px] w-[150px] rounded-[5px] bg-[#5b8def] text-[11px] font-medium text-white transition hover:bg-[#4f82e5]"
              >
                Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-[#f5f6fa]">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[24px] font-semibold leading-[30px] text-[#20242b]">
          Team
        </h1>

        <button
          type="button"
          onClick={() => setShowAddMember(true)}
          className="h-[42px] rounded-[4px] bg-[#5b8def] px-4 text-[12px] font-medium text-white transition hover:bg-[#4f82e5]"
        >
          Add New Member
        </button>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex min-h-[184px] flex-col items-center justify-center rounded-[10px] border border-[#eef0f3] bg-white px-4 py-5"
          >
            <div className="mb-[14px] h-[72px] w-[72px] overflow-hidden rounded-full">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="text-[12px] font-semibold leading-[16px] text-[#20242b]">
              {member.name}
            </h2>

            <p className="mt-[3px] text-[10px] leading-[15px] text-[#8d9299]">
              {member.role}
            </p>

            <p className="mt-[6px] max-w-full truncate text-center text-[9px] leading-[14px] text-[#6f747b]">
              {member.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;