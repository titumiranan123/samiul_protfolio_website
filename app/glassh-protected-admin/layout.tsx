import ProtectedLayout from "@/component/adminComponent/ProtectedLayout";
import React from "react";

export default function adminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-white">
      <ProtectedLayout>{children}</ProtectedLayout>
    </main>
  );
}
