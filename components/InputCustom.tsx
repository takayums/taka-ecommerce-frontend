import React from "react";
import {
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-in");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  type: string;
  placeholder: string;
}

export default function InputCustom({
  control,
  name,
  type,
  label,
  placeholder,
}: CustomInput) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-[15px]">
          <FormLabel className="text-lg text-gray-700 font-medium">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              className="placeholder:text-lg placeholder:text-[#A6A6A6] md:text-lg border border-gray-300 focus-visible:ring-blue-500 text-gray-600 font-semibold"
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
