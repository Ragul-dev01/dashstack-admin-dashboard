import { Mail, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import jasonPrice from "../assets/jason-prince.png";
import duaneDean from "../assets/duane-dean.png";
import jonathanBarker from "../assets/jonathan-barker.png";
import rosieGlover from "../assets/rosie-glover.png";
import patrickGreer from "../assets/patrick-greer.png";
import darrellOrtega from "../assets/darrell-ortega.png";

const contacts = [
  {
    name: "Jason Price",
    email: "kuhlman.jeremy@yahoo.com",
    image: jasonPrice,
  },
  {
    name: "Duane Dean",
    email: "rusty.botsford@wifri.io",
    image: duaneDean,
  },
  {
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image: jonathanBarker,
  },
  {
    name: "Rosie Glover",
    email: "lockman.marqus@hotmail.com",
    image: rosieGlover,
  },
  {
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image: patrickGreer,
  },
  {
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image: darrellOrtega,
  },
];

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-[#f5f6fa]">

      {/* ================= HEADER ================= */}

      <div className="mb-5 flex items-center justify-between">

        <h1 className="text-[24px] font-semibold leading-[30px] text-[#20242b]">
          Contact
        </h1>

        <button
          type="button"
          onClick={() => navigate("/contact/add")}
          className="
            flex
            h-[42px]
            items-center
            gap-2
            rounded-[4px]
            bg-[#5b8def]
            px-4
            text-[12px]
            font-medium
            text-white
            transition
            hover:bg-[#4f82e5]
          "
        >
          <Plus size={15} strokeWidth={2} />

          <span>Add New Contact</span>
        </button>

      </div>

      {/* ================= CONTACT GRID ================= */}

      <div
        className="
          grid
          grid-cols-1
          gap-x-[16px]
          gap-y-[16px]
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >

        {contacts.map((contact) => (
          <div
            key={contact.name}
            className="
              overflow-hidden
              rounded-[10px]
              border
              border-[#e3e7ec]
              bg-white
            "
          >

            {/* ================= IMAGE ================= */}

            <div
              className="
                aspect-[4/3]
                w-full
                overflow-hidden
                bg-[#f1f2f4]
              "
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* ================= DETAILS ================= */}

            <div
              className="
                flex
                flex-col
                items-center
                bg-white
                px-3
                pb-3
                pt-3
              "
            >

              <h2
                className="
                  text-[12px]
                  font-medium
                  leading-[16px]
                  text-[#20242b]
                "
              >
                {contact.name}
              </h2>

              <p
                className="
                  mt-[3px]
                  max-w-full
                  truncate
                  text-center
                  text-[9px]
                  leading-[14px]
                  text-[#9aa2ad]
                "
              >
                {contact.email}
              </p>

              {/* ================= MESSAGE ================= */}

              <button
                type="button"
                className="
                  mt-[10px]
                  flex
                  h-[27px]
                  items-center
                  gap-[6px]
                  rounded-[3px]
                  border
                  border-[#dfe3e8]
                  bg-white
                  px-[14px]
                  text-[9px]
                  font-medium
                  text-[#5d6570]
                  transition
                  hover:bg-[#f7f8fa]
                "
              >
                <Mail
                  size={11}
                  strokeWidth={1.7}
                />

                <span>Message</span>
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Contact;