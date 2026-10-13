import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("esteban_schiller@gmail.com");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("123456");
  const [acceptTerms, setAcceptTerms] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !username.trim() || !password.trim()) {
      window.alert("Please fill in all required fields.");
      return;
    }

    if (!acceptTerms) {
      window.alert("Please accept the terms and conditions.");
      return;
    }

    // Navigate to Login page after Sign Up
    navigate("/login");
  };

  return (
    <main className="flex min-h-screen items-center justify-center overflow-auto bg-[#5283f8] px-4 py-8">
      <div className="relative flex min-h-[650px] w-full max-w-[1440px] items-center justify-center overflow-hidden bg-[#5283f8]">
        {/* Background Shapes */}
        <div className="pointer-events-none absolute -left-20 top-[30%] h-[220px] w-[430px] -rotate-[25deg] rounded-[100px] bg-[#4779f4] opacity-80" />

        <div className="pointer-events-none absolute -right-24 top-[10%] h-[250px] w-[500px] rotate-[25deg] rounded-[100px] bg-[#4779f4] opacity-70" />

        <div className="pointer-events-none absolute -bottom-32 left-[25%] h-[380px] w-[260px] rotate-[15deg] rounded-[100px] bg-[#4779f4] opacity-80" />

        <div className="pointer-events-none absolute bottom-10 right-[10%] h-[260px] w-[420px] -rotate-[20deg] rounded-[100px] bg-[#4779f4] opacity-70" />

        {/* Register Card */}
        <section className="relative z-10 w-full max-w-[366px] rounded-[13px] bg-white px-8 py-10 shadow-sm sm:px-[33px]">
          <h1 className="text-center text-[19px] font-semibold text-[#252525]">
            Create an Account
          </h1>

          <p className="mt-2 text-center text-[11px] text-[#666666]">
            Create a account to continue
          </p>

          <form onSubmit={handleSubmit} className="mt-7">
            {/* Email */}
            <div>
              <label
                htmlFor="register-email"
                className="block text-[11px] font-medium text-[#444444]"
              >
                Email address:
              </label>

              <input
                id="register-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="mt-2 h-[33px] w-full rounded-[5px] border border-[#e0e3e8] bg-[#f2f4f8] px-3 text-[11px] text-[#555555] outline-none focus:border-[#5283f8]"
              />
            </div>

            {/* Username */}
            <div className="mt-6">
              <label
                htmlFor="register-username"
                className="block text-[11px] font-medium text-[#444444]"
              >
                Username
              </label>

              <input
                id="register-username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
                autoComplete="username"
                required
                className="mt-2 h-[33px] w-full rounded-[5px] border border-[#e0e3e8] bg-[#f2f4f8] px-3 text-[11px] text-[#555555] outline-none focus:border-[#5283f8]"
              />
            </div>

            {/* Password */}
            <div className="mt-6">
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="register-password"
                  className="text-[11px] font-medium text-[#444444]"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    window.alert(
                      "Please contact the administrator to reset your password."
                    )
                  }
                  className="text-[10px] text-[#777777] hover:text-[#5283f8]"
                >
                  Forget Password?
                </button>
              </div>

              <input
                id="register-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="new-password"
                required
                className="mt-2 h-[33px] w-full rounded-[5px] border border-[#e0e3e8] bg-[#f2f4f8] px-3 text-[11px] text-[#555555] outline-none focus:border-[#5283f8]"
              />
            </div>

            {/* Accept Terms */}
            <label className="mt-3 flex cursor-pointer items-center gap-2 text-[10px] text-[#444444]">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(event) =>
                  setAcceptTerms(event.target.checked)
                }
                className="h-[14px] w-[14px] accent-[#5283f8]"
              />

              I accept terms and conditions
            </label>

            {/* Sign Up */}
            <button
              type="submit"
              className="mt-8 h-[33px] w-full rounded-[5px] bg-[#5b8def] text-[11px] font-medium text-white transition hover:bg-[#477ce5]"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-3 text-center text-[10px] text-[#777777]">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="font-medium text-[#5283f8] underline underline-offset-2"
            >
              Login
            </button>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Register;