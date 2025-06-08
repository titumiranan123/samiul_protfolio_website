"use client";
import { Apiurl } from "@/utils/Apiurl";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
type LoginFormInputs = {
  email: string;
  password: string;
};
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    console.log("Form Data:", data);

    try {
      const res = await Apiurl.post("/api/login", {
        email: data.email,
        password: data.password,
      });

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          timer: 1500,
          showConfirmButton: false,
        });
        router.push("/glassh-protected-admin/dashboard");
      }
    } catch (error: any) {
      console.error("Login failed:", error);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error?.response?.data?.message ||
          "Invalid credentials. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm bg-gray-900 text-white p-8 rounded-xl shadow-md border "
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email?.message &&
            typeof errors.email.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password?.message &&
            typeof errors.password.message === "string" && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
