"use server";
import { db } from "@/lib/db/index";
import { and, eq } from "drizzle-orm";
import {
  BlogId,
  NewBlogParams,
  UpdateBlogParams,
  updateBlogSchema,
  insertBlogSchema,
  blogs,
  blogIdSchema,
} from "@/lib/db/schema/blogs";
import { getUserAuth } from "@/lib/auth/utils";

export const createBlog = async (blog) => {
  const { session } = await getUserAuth();
  console.log(session);
  const newBlog = insertBlogSchema.parse(blog) as any;
  newBlog.userId = session?.user.id;
  try {
    const [b] = await db.insert(blogs).values(newBlog).returning();
    return { blog: b };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateBlog = async (id: BlogId, blog: UpdateBlogParams) => {
  const { session } = await getUserAuth();

  const newBlog = updateBlogSchema.parse(blog);
  newBlog.userId = session?.user.id!;
  try {
    const [b] = await db
      .update(blogs)
      .set({ ...newBlog, updatedAt: new Date() })
      .where(and(eq(blogs.id, id!), eq(blogs.userId, session?.user.id!)))
      .returning();
    return { blog: b };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteBlog = async (id: BlogId) => {
  const { session } = await getUserAuth();
  const { id: blogId } = blogIdSchema.parse({ id });
  try {
    const [b] = await db
      .delete(blogs)
      .where(and(eq(blogs.id, blogId!), eq(blogs.userId, session?.user.id!)))
      .returning();
    return { blog: b };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};
