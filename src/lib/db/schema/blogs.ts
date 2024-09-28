import { sql } from "drizzle-orm";
import {
  text,
  date,
  varchar,
  timestamp,
  pgTable,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { users } from "@/lib/db/schema/auth";
import { type getBlogs } from "@/lib/api/blogs/queries";

import { nanoid, timestamps } from "@/lib/utils";

export const blogs = pgTable("blogs", {
  id: varchar("id", { length: 191 })
    .primaryKey()
    .$defaultFn(() => nanoid()),
  title: varchar("title", {
    length: 70,
  }).notNull(),
  blog: text("blog").notNull(),
  slug: varchar("slug", { length: 100 }).notNull(),
  userId: varchar("user_id", { length: 256 })
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),

  createdAt: timestamp("created_at")
    .notNull()
    .default(sql`now()`),
  updatedAt: timestamp("updated_at")
    .notNull()
    .default(sql`now()`),
});

// Schema for blogs - used to validate API requests
const baseSchema = createSelectSchema(blogs).omit(timestamps);

export const insertBlogSchema = createInsertSchema(blogs)
  .omit(timestamps)
  .omit({
    id: true,
    userId: true,
  });
export const insertBlogParams = baseSchema
  .extend({
    createdDate: z.coerce.string().min(1),
  })
  .omit({
    id: true,
    userId: true,
  });

export const updateBlogSchema = baseSchema;
export const updateBlogParams = baseSchema
  .extend({
    createdDate: z.coerce.string().min(1),
  })
  .omit({
    userId: true,
  });
export const blogIdSchema = baseSchema.pick({ id: true });

// Types for blogs - used to type API request params and within Components
export type Blog = typeof blogs.$inferSelect;
export type NewBlog = z.infer<typeof insertBlogSchema>;
export type NewBlogParams = z.infer<typeof insertBlogParams>;
export type UpdateBlogParams = z.infer<typeof updateBlogParams>;
export type BlogId = z.infer<typeof blogIdSchema>["id"];

// this type infers the return from getBlogs() - meaning it will include any joins
export type CompleteBlog = Awaited<
  ReturnType<typeof getBlogs>
>["blogs"][number];
