import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, Query, DefaultValuePipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { CreateRoadCatPostDto } from './dto/create-roadcat-post.dto';
import { UpdateRoadCatPostDto } from './dto/update-roadcat-post.dto';
import { RoadCatPostsService } from './road-cat-posts.service';

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('RoadCats')
@Controller({
  path: 'posts/road-cat',
  version: '1',
})
export class RoadCatPostsController {
  constructor(private readonly roadCatPostsService: RoadCatPostsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProfileDto: CreateRoadCatPostDto) {
    return this.roadCatPostsService.create(createProfileDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    if (limit > 50) {
      limit = 50;
    }

    return infinityPagination(
      await this.roadCatPostsService.findManyWithPagination({
        page,
        limit,
      }),
      { page, limit },
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.roadCatPostsService.findOne({ id: +id });
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() updateProfileDto: UpdateRoadCatPostDto) {
    return this.roadCatPostsService.update(id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.roadCatPostsService.softDelete(id);
  }
}
