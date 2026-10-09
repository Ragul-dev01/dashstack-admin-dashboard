import { useState } from "react";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AddNewContact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "Male",
  });

  const [photo, setPhoto] = useState(null);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE PHOTO =================

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // ================= ADD CONTACT =================

  const handleAddContact = () => {
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim()
    ) {
      alert("Please enter First Name, Last Name and Email.");
      return;
    }

    const newContact = {
      id: Date.now(),
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      image: photo,
    };

    // Get existing contacts
    const existingContacts =
      JSON.parse(localStorage.getItem("contacts")) || [];

    // Add new contact
    const updatedContacts = [
      ...existingContacts,
      newContact,
    ];

    // Save contacts
    localStorage.setItem(
      "contacts",
      JSON.stringify(updatedContacts)
    );

    // Go back to Contact page
    navigate("/contact");
  };

  return (
    <div className="min-h-full bg-[#f5f6fa]">

      {/* ================= PAGE HEADER ================= */}

      <div className="mb-6">
        <h1 className="text-[24px] font-semibold text-[#20242b]">
          Add New Contact
        </h1>
      </div>

      {/* ================= FORM CARD ================= */}

      <div className="rounded-[10px] border border-[#e3e7ec] bg-white p-8">

        {/* ================= UPLOAD PHOTO ================= */}

        <div className="flex flex-col items-center">

          <label
            htmlFor="contact-photo"
            className="
              flex
              h-[48px]
              w-[48px]
              cursor-pointer
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-[#f1f3f6]
            "
          >
            {photo ? (
              <img
                src={photo}
                alt="Contact preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <Camera
                size={20}
                strokeWidth={2}
                className="text-[#4d535c]"
              />
            )}
          </label>

          <input
            id="contact-photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />

          <label
            htmlFor="contact-photo"
            className="
              mt-2
              cursor-pointer
              text-[10px]
              font-medium
              text-[#4f86f7]
            "
          >
            {photo ? "Edit Photo" : "Upload Photo"}
          </label>

        </div>

        {/* ================= FORM ================= */}

        <div className="mx-auto mt-8 max-w-[620px]">

          {/* ================= FIRST ROW ================= */}

          <div className="grid grid-cols-2 gap-8">

            {/* First Name */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  text-[#4d535c]
                "
              >
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="
                  h-[34px]
                  w-full
                  rounded-[3px]
                  border
                  border-[#e1e5ea]
                  bg-[#f7f8fa]
                  px-3
                  text-[10px]
                  outline-none
                  placeholder:text-[#aeb5bf]
                  focus:border-[#5b8def]
                "
              />
            </div>

            {/* Last Name */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  text-[#4d535c]
                "
              >
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="
                  h-[34px]
                  w-full
                  rounded-[3px]
                  border
                  border-[#e1e5ea]
                  bg-[#f7f8fa]
                  px-3
                  text-[10px]
                  outline-none
                  placeholder:text-[#aeb5bf]
                  focus:border-[#5b8def]
                "
              />
            </div>

          </div>

          {/* ================= SECOND ROW ================= */}

          <div className="mt-7 grid grid-cols-2 gap-8">

            {/* Email */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  text-[#4d535c]
                "
              >
                Your email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="
                  h-[34px]
                  w-full
                  rounded-[3px]
                  border
                  border-[#e1e5ea]
                  bg-[#f7f8fa]
                  px-3
                  text-[10px]
                  outline-none
                  placeholder:text-[#aeb5bf]
                  focus:border-[#5b8def]
                "
              />
            </div>

            {/* Phone */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  text-[#4d535c]
                "
              >
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="
                  h-[34px]
                  w-full
                  rounded-[3px]
                  border
                  border-[#e1e5ea]
                  bg-[#f7f8fa]
                  px-3
                  text-[10px]
                  outline-none
                  placeholder:text-[#aeb5bf]
                  focus:border-[#5b8def]
                "
              />
            </div>

          </div>

          {/* ================= THIRD ROW ================= */}

          <div className="mt-7 grid grid-cols-2 gap-8">

            {/* Date of Birth */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  text-[#4d535c]
                "
              >
                Date of Birth
              </label>

              <input
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                placeholder="Enter your birthdate"
                className="
                  h-[34px]
                  w-full
                  rounded-[3px]
                  border
                  border-[#e1e5ea]
                  bg-[#f7f8fa]
                  px-3
                  text-[10px]
                  outline-none
                  placeholder:text-[#aeb5bf]
                  focus:border-[#5b8def]
                "
              />
            </div>

            {/* Gender */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-[10px]
                  font-medium
                  text-[#4d535c]
                "
              >
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="
                  h-[34px]
                  w-full
                  rounded-[3px]
                  border
                  border-[#e1e5ea]
                  bg-[#f7f8fa]
                  px-3
                  text-[10px]
                  text-[#9da5af]
                  outline-none
                  focus:border-[#5b8def]
                "
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

          </div>

          {/* ================= ADD BUTTON ================= */}

          <div className="mt-8 flex justify-center">

            <button
              type="button"
              onClick={handleAddContact}
              className="
                h-[34px]
                w-[140px]
                rounded-[5px]
                bg-[#5b8def]
                text-[10px]
                font-medium
                text-white
                transition
                hover:bg-[#4f82e5]
              "
            >
              Add Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AddNewContact;