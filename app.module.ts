import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservationController } from './reservation/reservation.controller';
import { ReservationService } from './reservation/reservation.service';
import { ReservationModule } from './reservation/reservation.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [ReservationModule],
  controllers: [AppController, ReservationController],
  providers: [AppService, ReservationService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('reservation');
  }
}
