"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import InputCustom from "./InputCustom";

export default function AuthForm({ type }: { type: string }) {
  const formSchema = authFormSchema(type);

  // Define form

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  // Handle Sumbit

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-3.5">
        {type === "sign-in" ? "Login to Account" : "Create an Account"}
      </h1>
      <p className="font-semibold text-lg text-center tracking-tighter mb-[37px]">
        {type === "sign-in"
          ? "Please enter your email and password to continue"
          : "Create a account to continue"}
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <InputCustom
            control={form.control}
            name="email"
            placeholder="jhondoe@gmail.com"
            label="Email"
            type="email"
          />
          {type == "sign-up" && (
            <InputCustom
              control={form.control}
              name="username"
              placeholder="jhondoe"
              label="Username"
              type="text"
            />
          )}{" "}
          <InputCustom
            control={form.control}
            name="password"
            placeholder="********"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="max-w-[418px] w-full mx-auto block bg-[#4880FF] text-lg font-semibold shadow-lg hover:bg-[#568AFF]"
          >
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
