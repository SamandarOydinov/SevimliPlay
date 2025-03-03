-- CreateTable
CREATE TABLE "payment_method" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "payment_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "billing_history" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "subscriptionId" INTEGER NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "billing_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devices" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "device_type" TEXT NOT NULL,
    "device_name" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "last_active" BOOLEAN NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "id" SERIAL NOT NULL,
    "porfilId" INTEGER NOT NULL,
    "planId" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "auto_renew" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "last_amount_paid" DECIMAL(65,30) NOT NULL,
    "subscription_source" TEXT NOT NULL,
    "subscriptionPlansId" INTEGER,
    "profileId" INTEGER,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_plans" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "monthly_price" DECIMAL(65,30) NOT NULL,
    "max_profile" INTEGER NOT NULL,
    "max_screens" INTEGER NOT NULL,
    "download_enabled" BOOLEAN NOT NULL,
    "ads_enabled" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "subscription_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genresImages" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "genreId" INTEGER NOT NULL,
    "is_main" BOOLEAN NOT NULL,
    "genresId" INTEGER,

    CONSTRAINT "genresImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contentGenres" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,
    "genresId" INTEGER NOT NULL,

    CONSTRAINT "contentGenres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "parentCategoryId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoryContent" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "categoryContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "language" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "parentCategoryId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "userId" INTEGER,
    "languageId" INTEGER,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "searchHistory" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "search_query" TEXT NOT NULL,

    CONSTRAINT "searchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watchHistory" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "watched_seconds" INTEGER NOT NULL,
    "last_watched" INTEGER NOT NULL,
    "is_completed" BOOLEAN NOT NULL,
    "content_type" TEXT NOT NULL,

    CONSTRAINT "watchHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "release_year" TIMESTAMP(3) NOT NULL,
    "Duration" TIMESTAMP(3) NOT NULL,
    "trailer_url" TEXT NOT NULL,
    "average_rating" DOUBLE PRECISION NOT NULL,
    "is_availabel" BOOLEAN NOT NULL,
    "audioId" INTEGER NOT NULL,
    "country_of_origin" INTEGER NOT NULL,
    "content_type" TEXT NOT NULL,

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episode" (
    "id" SERIAL NOT NULL,
    "duration" INTEGER NOT NULL,
    "episode_number" INTEGER NOT NULL,
    "seasonId" INTEGER NOT NULL,

    CONSTRAINT "episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "contentId" INTEGER,
    "rating_value" DECIMAL(65,30) NOT NULL,
    "rated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audioTrack" (
    "id" SERIAL NOT NULL,
    "file_size" BIGINT NOT NULL,
    "duration" BIGINT NOT NULL,
    "langId" INTEGER NOT NULL,
    "audioId" INTEGER NOT NULL,
    "languageId" INTEGER,
    "contentAudioId" INTEGER,

    CONSTRAINT "audioTrack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contentAudio" (
    "id" SERIAL NOT NULL,
    "audioTrackId" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,
    "is_main" BOOLEAN NOT NULL,

    CONSTRAINT "contentAudio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "series" (
    "id" SERIAL NOT NULL,
    "contentId" INTEGER,
    "total_seasons" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "season" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "seriesId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "season_number" INTEGER NOT NULL,
    "total_episodes" INTEGER NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "trailer_url" TEXT NOT NULL,

    CONSTRAINT "season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episodeAudio" (
    "id" SERIAL NOT NULL,
    "episodeId" INTEGER NOT NULL,
    "audioTrackId" INTEGER NOT NULL,
    "is_main" BOOLEAN NOT NULL,

    CONSTRAINT "episodeAudio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "payment_method"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billing_history" ADD CONSTRAINT "billing_history_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_subscriptionPlansId_fkey" FOREIGN KEY ("subscriptionPlansId") REFERENCES "subscription_plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "genresImages" ADD CONSTRAINT "genresImages_genresId_fkey" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contentGenres" ADD CONSTRAINT "contentGenres_genresId_fkey" FOREIGN KEY ("genresId") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contentGenres" ADD CONSTRAINT "contentGenres_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoryContent" ADD CONSTRAINT "categoryContent_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoryContent" ADD CONSTRAINT "categoryContent_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "searchHistory" ADD CONSTRAINT "searchHistory_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchHistory" ADD CONSTRAINT "watchHistory_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchHistory" ADD CONSTRAINT "watchHistory_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchHistory" ADD CONSTRAINT "watchHistory_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episode" ADD CONSTRAINT "episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audioTrack" ADD CONSTRAINT "audioTrack_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "language"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "audioTrack" ADD CONSTRAINT "audioTrack_contentAudioId_fkey" FOREIGN KEY ("contentAudioId") REFERENCES "contentAudio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contentAudio" ADD CONSTRAINT "contentAudio_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "series" ADD CONSTRAINT "series_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "content"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "season" ADD CONSTRAINT "season_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episodeAudio" ADD CONSTRAINT "episodeAudio_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "episode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "episodeAudio" ADD CONSTRAINT "episodeAudio_audioTrackId_fkey" FOREIGN KEY ("audioTrackId") REFERENCES "audioTrack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
