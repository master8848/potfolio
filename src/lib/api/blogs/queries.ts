import { db } from "@/lib/db/index";
import { eq, and } from "drizzle-orm";
import { getUserAuth } from "@/lib/auth/utils";
import { type BlogId, blogIdSchema, blogs } from "@/lib/db/schema/blogs";

export const getBlogs = async () => {
  const { session } = await getUserAuth();
  const rows = await db
    .select()
    .from(blogs)
    .where(eq(blogs.userId, session?.user.id!));
  const b = rows;
  return { blogs: b };
};

export const getBlogById = async (id: BlogId) => {
  const { session } = await getUserAuth();
  const { id: blogId } = blogIdSchema.parse({ id });
  const [row] = await db
    .select()
    .from(blogs)
    .where(and(eq(blogs.id, blogId), eq(blogs.userId, session?.user.id!)));
  if (row === undefined) return {};
  const b = row;
  return { blog: b };
};
