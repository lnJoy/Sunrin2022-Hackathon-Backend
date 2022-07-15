import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LostCatPostsModule } from 'src/lost-cat-posts/lost-cat-posts.module';
import { RoadCatPostEntity } from './entities/roadcat-post.entity';
import { RoadCatPostsController } from './road-cat-posts.controller';
import { RoadCatPostsService } from './road-cat-posts.service';


@Module({
  imports: [
    LostCatPostsModule,
    TypeOrmModule.forFeature([RoadCatPostEntity])],
  controllers: [RoadCatPostsController],
  providers: [RoadCatPostsService],
  exports: [RoadCatPostsService],
})
export class RoadCatPostsModule {}
