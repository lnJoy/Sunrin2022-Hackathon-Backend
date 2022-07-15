import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoadCatPostsModule } from 'src/road-cat-posts/road-cat-posts.module';
import { LostCatPostEntity } from './entities/lostcat-post.entity';
import { LostCatPostsController } from './lost-cat-posts.controller';
import { LostCatPostsService } from './lost-cat-posts.service';

@Module({
  imports: [
    // RoadCatPostsModule,
    TypeOrmModule.forFeature([LostCatPostEntity])
  ],
  controllers: [LostCatPostsController],
  providers: [LostCatPostsService],
  exports: [LostCatPostsService],
})
export class LostCatPostsModule {}
