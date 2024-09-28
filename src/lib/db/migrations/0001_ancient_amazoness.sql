CREATE TABLE IF NOT EXISTS "blogs" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"title" varchar(70) NOT NULL,
	"blog" text NOT NULL,
	"slug" varchar(100) NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogs" ADD CONSTRAINT "blogs_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
