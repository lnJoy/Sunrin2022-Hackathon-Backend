import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoadCatPostEntity } from './entities/roadcat-post.entity';
import { RoadCatPostsController } from './road-cat-posts.controller';
import { RoadCatPostsService } from './road-cat-posts.service';


@Module({
  imports: [TypeOrmModule.forFeature([RoadCatPostEntity])],
  controllers: [RoadCatPostsController],
  providers: [RoadCatPostsService],
  exports: [RoadCatPostsService],
})
export class PostsModule {}
