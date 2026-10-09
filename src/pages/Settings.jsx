import { useState } from "react";
import { Camera, CheckCircle } from "lucide-react";

function Settings() {
  const [logo, setLogo] = useState(null);
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    siteName: "Bright Web",
    copyright: "All rights Reserved@brightweb",
    seoTitle: "Bright web is a hybrid dashboard",
    seoDescription: "Bright web is a hybrid dashboard",
    seoKeywords: "CEO",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setLogo(reader.result);
        setSaved(false);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = (event) => {
    event.preventDefault();

    try {
      localStorage.setItem(
        "dashstack-general-settings",
        JSON.stringify({ ...formData, logo })
      );
      setSaved(true);
    } catch {
      setSaved(false);
      window.alert("Unable to save settings. Please try a smaller logo image.");
    }
  };

  const inputClass =
    "mt-2 h-[42px] w-full rounded-[4px] border border-[#e5e7eb] bg-[#f5f6fa] px-3 text-[12px] text-[#333741] outline-none transition focus:border-[#5b8def]";

  const labelClass = "block text-[12px] font-medium text-[#444950]";

  return (
    <div className="min-h-full bg-[#f5f6fa]">
      <h1 className="mb-6 text-[24px] font-semibold leading-[30px] text-[#20242b]">
        General Settings
      </h1>

      <form
        onSubmit={handleSave}
        className="rounded-[10px] border border-[#e7e9ed] bg-white px-5 py-8 sm:px-10 lg:px-16"
      >
        {/* Logo Upload */}
        <div className="mb-7 flex flex-col items-center">
          <label
            htmlFor="settings-logo"
            className="flex h-[48px] w-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#f0f0f2] transition hover:bg-[#e5e7eb]"
          >
            {logo ? (
              <img
                src={logo}
                alt="Uploaded site logo"
                className="h-full w-full object-contain"
              />
            ) : (
              <Camera size={20} className="text-[#444950]" />
            )}
          </label>

          <input
            id="settings-logo"
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />

          <label
            htmlFor="settings-logo"
            className="mt-2 cursor-pointer text-[11px] font-medium text-[#5b8def] hover:underline"
          >
            Upload Logo
          </label>
        </div>

        {/* Settings Fields */}
        <div className="mx-auto grid w-full max-w-[720px] grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
          <div>
            <label htmlFor="siteName" className={labelClass}>
              Site Name
            </label>
            <input
              id="siteName"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="copyright" className={labelClass}>
              Copy Right
            </label>
            <input
              id="copyright"
              name="copyright"
              value={formData.copyright}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="seoTitle" className={labelClass}>
              SEO Title
            </label>
            <input
              id="seoTitle"
              name="seoTitle"
              value={formData.seoTitle}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="md:row-span-2">
            <label htmlFor="seoDescription" className={labelClass}>
              SEO Description
            </label>
            <textarea
              id="seoDescription"
              name="seoDescription"
              value={formData.seoDescription}
              onChange={handleChange}
              className="mt-2 min-h-[112px] w-full resize-y rounded-[4px] border border-[#e5e7eb] bg-[#f5f6fa] px-3 py-3 text-[12px] text-[#333741] outline-none focus:border-[#5b8def]"
            />
          </div>

          <div>
            <label htmlFor="seoKeywords" className={labelClass}>
              SEO Keywords
            </label>
            <input
              id="seoKeywords"
              name="seoKeywords"
              value={formData.seoKeywords}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex flex-col items-center">
          <button
            type="submit"
            className="flex h-[42px] w-full max-w-[160px] items-center justify-center gap-2 rounded-[5px] bg-[#5b8def] text-[12px] font-medium text-white transition hover:bg-[#477ce5]"
          >
            Save
          </button>

          {saved && (
            <p className="mt-3 flex items-center gap-1.5 text-[12px] text-[#19a887]">
              <CheckCircle size={15} />
              Settings saved successfully!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Settings;