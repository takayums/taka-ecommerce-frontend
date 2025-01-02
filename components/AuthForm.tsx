"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import InputCustom from "./InputCustom";
import { SignIn, SignUp } from "@/lib/actions/user.actions";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthForm({
  type = "sign-in",
}: {
  type?: "sign-in" | "sign-up";
}) {
  const formSchema = authFormSchema(type);
  const router = useRouter();

  // Define form

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });

  // Handle Sumbit

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      // sign-up
      if (type === "sign-up") {
        const userData = {
          email: data.email,
          name: data.name,
          password: data.password,
        };
        const response = await SignUp(userData as SignUpPorps);
        if (!response.error) {
          toast.success("Success Register");
          console.log("sukses register");
          router.push("/sign-in");
        } else {
          toast.warn(`${response.message}`);
          console.log("gagal register");
        }
      }

      // sign-in
      if (type === "sign-in") {
        const response = await SignIn({
          email: data.email,
          password: data.password,
        });
        if (!response.error) {
          toast.success("success login");
          console.log("sukses login");
          router.push("/");
        } else {
          toast.warn(`${response.message}`);
          console.log("gagal login");
        }
      }
    } catch (error) {
      console.log("Erorr Pak", error);
    }
  }

  return (
    <div>
      <h1 className="font-bold text-[32px] text-center mb-[15px]">
        {type === "sign-in" ? "Login to Account" : "Create an Account"}
      </h1>
      <p className="font-semibold text-lg text-center tracking-tighter mb-[37px]">
        {type === "sign-in"
          ? "Please enter your email and password to continue"
          : "Create a account to continue"}
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <InputCustom
            control={form.control}
            name="email"
            placeholder="jhondoe@gmail.com"
            label="Email"
            type="email"
          />
          {type === "sign-up" && (
            <InputCustom
              control={form.control}
              name="name"
              placeholder="jhondoe"
              label="Username"
              type="text"
            />
          )}
          <InputCustom
            control={form.control}
            name="password"
            placeholder="********"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="max-w-[418px] w-full mx-auto block bg-[#4880FF] !mt-[55px] text-lg font-semibold shadow-lg hover:bg-[#568AFF]"
          >
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
      <p className="mt-4 text-center text-[#35383C] text-lg font-semibold">
        {type === "sign-in"
          ? "Don't have an account ?"
          : "Already have an account? "}{" "}
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="text-[#5A8CFF] hover:text-[#4880FF] hover:underline font-semibold"
        >
          {type === "sign-in" ? "Create Account" : "Login"}
        </Link>
      </p>
    </div>
  );
}
