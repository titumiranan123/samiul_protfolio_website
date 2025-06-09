"use client";
import { Apiurl } from "@/utils/Apiurl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authStatus, setAuthStatus] = useState<
    "checking" | "authenticated" | "unauthenticated"
  >("checking");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await Apiurl.get("/api/me");

        if (res.status === 200) {
          setAuthStatus("authenticated");
        } else {
          setAuthStatus("unauthenticated");
          router.push("/glassh-protected-admin/auth/sign-in");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setAuthStatus("unauthenticated");
        router.push("/glassh-protected-admin/auth/sign-in");
      }
    };

    checkAuth();
  }, [router]);

  if (authStatus === "checking") {
    return (
      <div className="w-full h-screen flex items-center justify-center text-gray-500">
        Checking authentication...
      </div>
    );
  }

  return <>{children}</>;
};


