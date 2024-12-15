import AuthForm from "@/components/AuthForm";
import React from "react";

export default function SignUp() {
  return (
    <section className="bg-white rounded-xl w-full max-w-[630px] py-[90px] px-[57px]">
      <AuthForm type="sign-up" />
    </section>
  );
}
