import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { FileService } from './services/file.service';
import { IPFSService } from './services/ipfs.service';
import { AppService } from './services/twitter.service';

@Module({
  controllers: [AppController],
  providers: [AppService, FileService, IPFSService],
  imports: [ConfigModule.forRoot(), AuthModule],
})
export class AppModule {}
