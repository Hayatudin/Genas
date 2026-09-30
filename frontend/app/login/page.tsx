"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { 
  IconSparkles, 
  IconLock, 
  IconMail, 
  IconEye, 
  IconEyeOff, 
  IconArrowRight, 
  IconBrandGoogleFilled 
} from "@tabler/icons-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { login, demoLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      await login(email, password);
    } catch {
      setError("Failed to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f9] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* Background organic light gradient blobs */}
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-300/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-indigo-300/25 blur-[140px] rounded-full pointer-events-none" />

      {/* Top Brand Logo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center z-10 mb-6">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
            <Image
              src="/images/genas-logo.png"
              alt="Genas Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Genas
          </span>
        </Link>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">
          Welcome back
        </h2>
        <p className="mt-1 text-sm text-slate-500 font-medium">
          Sign in to your account to continue writing & researching
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[460px] z-10 px-4 sm:px-0">
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-200/60 flex flex-col gap-6 backdrop-blur-xl">
          
          {/* Quick Demo Login Option */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/70 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-200 relative flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                  alt="Orhan Bey"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-900">Quick Demo Access</span>
                <span className="text-[11px] text-slate-500">Sign in instantly as <strong className="text-[#0b3bc9]">Orhan Bey</strong></span>
              </div>
            </div>
            <button
              type="button"
              onClick={demoLogin}
              className="bg-[#2458f5] hover:bg-[#1a4cd2] text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm active:scale-95 flex-shrink-0"
            >
              Sign In <IconArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-xs font-medium text-slate-400 uppercase tracking-wider absolute">
              or enter credentials
            </span>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-xl p-3 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">Email Address</label>
              <div className="relative flex items-center">
                <IconMail className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="orhan@genas.ai"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2458f5]/20 focus:border-[#2458f5] transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <Link href="#" className="text-xs font-semibold text-[#2458f5] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative flex items-center">
                <IconLock className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2458f5]/20 focus:border-[#2458f5] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <IconEyeOff className="w-5 h-5" /> : <IconEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-[#2458f5] border-slate-300 focus:ring-[#2458f5]"
                />
                <span className="text-xs font-medium text-slate-600">Remember me</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 text-sm disabled:opacity-70 active:scale-[0.99]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In</span>
                  <IconArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Social Sign In */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={demoLogin}
              className="w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2.5 text-xs shadow-sm"
            >
              <IconBrandGoogleFilled className="w-4 h-4 text-[#ea4335]" />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Link to Signup */}
          <div className="text-center pt-2">
            <p className="text-xs text-slate-500 font-medium">
              Don't have an account?{" "}
              <Link href="/signup" className="font-bold text-[#2458f5] hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
