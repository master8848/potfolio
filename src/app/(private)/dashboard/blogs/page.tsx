"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MinimalTiptapEditor } from "@/components/ui/minimal-tiptap";
import { Textarea } from "@/components/ui/textarea";
import { insertBlogSchema } from "@/lib/db/schema/blogs";
import { useDebounce } from "@/lib/hooks/useDebounce";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { title } from "process";
import { createBlog } from "@/lib/api/blogs/mutations";

// const validationSchemaType = z.infer<typeof insertBlogSchema>
// infer insertBlogSchema
const page = () => {
  const form = useForm({
    resolver: zodResolver(insertBlogSchema),

    defaultValues: {
      title: "",
      slug: "",
      blog: "",
    },
  });
  const onSubmit = async (values) => {
    console.log(values, "sks");
    const blog = await createBlog(values);
    console.log(blog, "sks");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field, fieldState, formState }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field, fieldState, formState }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="blog"
          render={({
            field: { onChange, name, onBlur, ref, value, disabled },
          }) => {
            return (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <MinimalTiptapEditor
                    onValueChange={(value) => onChange({ target: { value } })}
                    onBlur={onBlur}
                    ref={ref}
                    value={value}
                    disabled={disabled}
                    speech
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button type="submit"> Submit</Button>
      </form>
    </Form>
  );
};

export default page;
