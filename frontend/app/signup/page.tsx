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
  IconUser, 
  IconEye, 
  IconEyeOff, 
  IconArrowRight, 
  IconBrandGoogleFilled 
} from "@tabler/icons-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { signup, demoLogin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
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
      await signup(name, email, password);
    } catch {
      setError("Failed to create account. Please try again.");
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
          Create your account
        </h2>
        <p className="mt-1 text-sm text-slate-500 font-medium">
          Start generating structured academic papers, essays & reports
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[460px] z-10 px-4 sm:px-0">
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-200/60 flex flex-col gap-6 backdrop-blur-xl">
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-xl p-3 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700">Full Name</label>
              <div className="relative flex items-center">
                <IconUser className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Orhan Bey"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2458f5]/20 focus:border-[#2458f5] transition-all"
                />
              </div>
            </div>

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
              <label className="text-xs font-bold text-slate-700">Password</label>
              <div className="relative flex items-center">
                <IconLock className="w-5 h-5 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-3 w-full bg-[#2458f5] hover:bg-[#1a4cd2] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 text-sm disabled:opacity-70 active:scale-[0.99]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Create Account</span>
                  <IconArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Social Sign Up / Demo */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={demoLogin}
              className="w-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2.5 text-xs shadow-sm"
            >
              <IconBrandGoogleFilled className="w-4 h-4 text-[#ea4335]" />
              <span>Sign up with Google</span>
            </button>
          </div>

          {/* Link to Sign in */}
          <div className="text-center pt-2">
            <p className="text-xs text-slate-500 font-medium">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[#2458f5] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
