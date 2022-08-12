-- CreateTable
CREATE TABLE "comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL DEFAULT E'',
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
