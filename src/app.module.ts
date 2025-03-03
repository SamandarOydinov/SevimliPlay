import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { BillingHistoryModule } from './billing_history/billing_history.module';
import { DeviceModule } from './device/device.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionPlansModule } from './subscription_plans/subscription_plans.module';
import { GenresModule } from './genres/genres.module';
import { GenresImagesModule } from './genres-images/genres-images.module';
import { ContentGenresModule } from './content-genres/content-genres.module';
import { CategoryModule } from './category/category.module';
import { CategoryContentModule } from './category-content/category-content.module';
import { LanguageModule } from './language/language.module';
import { ProfileModule } from './profile/profile.module';
import { SearchHistoryModule } from './search-history/search-history.module';
import { WatchHistoryModule } from './watch-history/watch-history.module';
import { ContentModule } from './content/content.module';
import { EpisodeModule } from './episode/episode.module';
import { RatingsModule } from './ratings/ratings.module';
import { AudioTrackModule } from './audio-track/audio-track.module';
import { ContentAudioModule } from './content-audio/content-audio.module';
import { SeriesModule } from './series/series.module';
import { SeasonModule } from './season/season.module';
import { EpisodeAudioModule } from './episode-audio/episode-audio.module';

@Module({
  imports: [PrismaModule, UsersModule, AdminModule, AuthModule, PaymentMethodModule, BillingHistoryModule, DeviceModule, SubscriptionModule, SubscriptionPlansModule, GenresModule, GenresImagesModule, ContentGenresModule, CategoryModule, CategoryContentModule, LanguageModule, ProfileModule, SearchHistoryModule, WatchHistoryModule, ContentModule, EpisodeModule, RatingsModule, AudioTrackModule, ContentAudioModule, SeriesModule, SeasonModule, EpisodeAudioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
