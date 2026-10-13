import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  // Step 1: Declare useForm hook
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendFormDataToBackend = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, [4000]);
    });
  };

  // Step 2: Create an onSubmit function
  const onSubmit = async (data) => {
    const response = await fetch("http://localhost:3000/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const backendData = await response.json();
    console.log(backendData);

    console.log(data);
  };

  const nameValidations = {
    required: {
      value: true,
      message: "This field is required",
    },
    minLength: {
      value: 5,
      message: "Minimum of 5 characters are required",
    },
    maxLength: {
      value: 10,
      message: "Maximum of 10 characters are required",
    },
  };

  const phoneValidations = {
    required: {
      value: true,
      message: "This field is required",
    },
    minLength: {
      value: 10,
      message: "Invalid Phone number",
    },
    maxLength: {
      value: 10,
      message: "Invalid Phone number",
    },
  };

  const confirmPasswordValidations = {
    required: "Please confirm your password",
    validate: (value) =>
      value === watch("password") || "Passwords do not match",
  };

  const emailValidations = {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email",
    },
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input
          {...register("firstName", nameValidations)}
          className="p-2 border rounded-[4px]"
          type="text"
          placeholder="First Name"
        />
        {errors.firstName && (
          <div className="text-red-500 text-[12px]">
            {errors.firstName.message}
          </div>
        )}
        {/* <input
          {...register("lastName", nameValidations)}
          className="p-2 border rounded-[4px]"
          type="text"
          placeholder="Last name"
        />
        {errors.lastName && (
          <div className="text-red-500 text-[12px]">
            {errors.lastName.message}
          </div>
        )} */}
        {/* <input
          {...register("number", phoneValidations)}
          className="p-2 border rounded-[4px]"
          type="number"
          placeholder="Phone"
        />
        {errors.number && (
          <div className="text-red-500 text-[12px]">
            {errors.number.message}
          </div>
        )} */}
        {/* <input
          {...register("email", emailValidations)}
          className="p-2 border rounded-[4px]"
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-500 text-[12px]">{errors.email.message}</div>
        )} */}
        <input
          {...register("password")}
          className="p-2 border rounded-[4px]"
          type="password"
          placeholder="Password"
        />
        {/* <input
          {...register("confirmedPassword", confirmPasswordValidations)}
          className="p-2 border rounded-[4px]"
          type="password"
          placeholder="Confirm Password"
        />
        {errors.confirmedPassword && (
          <div className="text-red-500 text-[12px]">
            {errors.confirmedPassword.message}
          </div>
        )} */}
        <input
          disabled={isSubmitting}
          className={`p-2 bg-purple-700 text-white ${isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"} rounded-[4px]`}
          type="submit"
        />
      </form>
    </div>
  );
};

export default App;
