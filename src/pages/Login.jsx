import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("esteban_schiller@gmail.com");
  const [password, setPassword] = useState("123456");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      window.alert("Please enter your email and password.");
      return;
    }

    navigate("/");
  };

  return (
    <main className="flex min-h-screen items-center justify-center overflow-auto bg-[#5283f8] px-4 py-8">
      <div className="relative flex min-h-[650px] w-full max-w-[1440px] items-center justify-center overflow-hidden bg-[#5283f8]">
        {/* Background Shapes */}
        <div className="pointer-events-none absolute -left-20 top-[30%] h-[220px] w-[430px] -rotate-[25deg] rounded-[100px] bg-[#4779f4] opacity-80" />
        <div className="pointer-events-none absolute -right-24 top-[10%] h-[250px] w-[500px] rotate-[25deg] rounded-[100px] bg-[#4779f4] opacity-70" />
        <div className="pointer-events-none absolute -bottom-32 left-[25%] h-[380px] w-[260px] rotate-[15deg] rounded-[100px] bg-[#4779f4] opacity-80" />
        <div className="pointer-events-none absolute bottom-10 right-[10%] h-[260px] w-[420px] -rotate-[20deg] rounded-[100px] bg-[#4779f4] opacity-70" />

        {/* Login Card */}
        <section className="relative z-10 w-full max-w-[366px] rounded-[13px] bg-white px-8 py-12 shadow-sm sm:px-[33px]">
          <h1 className="text-center text-[19px] font-semibold text-[#252525]">
            Login to Account
          </h1>

          <p className="mt-2 text-center text-[11px] text-[#666666]">
            Please enter your email and password to continue
          </p>

          <form onSubmit={handleSubmit} className="mt-7">
            <div>
              <label
                htmlFor="login-email"
                className="block text-[11px] font-medium text-[#444444]"
              >
                Email address:
              </label>

              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="mt-2 h-[33px] w-full rounded-[5px] border border-[#e0e3e8] bg-[#f2f4f8] px-3 text-[11px] text-[#555555] outline-none focus:border-[#5283f8]"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="login-password"
                  className="text-[11px] font-medium text-[#444444]"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() =>
                    window.alert("Please contact the administrator to reset your password.")
                  }
                  className="text-[10px] text-[#777777] hover:text-[#5283f8]"
                >
                  Forget Password?
                </button>
              </div>

              <input
                id="login-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="mt-2 h-[33px] w-full rounded-[5px] border border-[#e0e3e8] bg-[#f2f4f8] px-3 text-[11px] text-[#555555] outline-none focus:border-[#5283f8]"
              />
            </div>

            <label className="mt-3 flex w-fit cursor-pointer items-center gap-2 text-[10px] text-[#777777]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="h-[14px] w-[14px] accent-[#5283f8]"
              />
              Remember Password
            </label>

            <button
              type="submit"
              className="mt-8 h-[33px] w-full rounded-[5px] bg-[#5b8def] text-[11px] font-medium text-white transition hover:bg-[#477ce5]"
            >
              Sign In
            </button>
          </form>

          <p className="mt-3 text-center text-[10px] text-[#777777]">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="font-medium text-[#5283f8] underline underline-offset-2"
            >
              Create Account
            </button>
          </p>
        </section>
      </div>
    </main>
  );
}

export default Login;