import { Controller, Get, Post, Body, Patch, Request, Param, Delete, HttpStatus, HttpCode, Query, DefaultValuePipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { infinityPagination } from 'src/utils/infinity-pagination';
import { CreateLostCatPostDto } from './dto/create-lostcat-post.dto';
import { UpdateLostCatPostDto } from './dto/update-lostcat-post.dto';
import { LostCatPostsService } from './lost-cat-posts.service';

@ApiTags('LostCats')
@Controller({
  path: 'posts/lost-cat',
  version: '1',
})
export class LostCatPostsController {
  constructor(private readonly lostCatPostsService: LostCatPostsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProfileDto: CreateLostCatPostDto, @Request() req: any) {
    return this.lostCatPostsService.create(createProfileDto, req.user);
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
      await this.lostCatPostsService.findManyWithPagination({
        page,
        limit,
      }),
      { page, limit },
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.lostCatPostsService.findOne({ id: +id });
  }

  @Get('random')
  @HttpCode(HttpStatus.OK)
  async findByRandom() {
    return await this.lostCatPostsService.findByRandom();
  }

  @Patch('')
  @HttpCode(HttpStatus.OK)
  update(@Query() query: any, @Body() updateProfileDto: UpdateLostCatPostDto) {
    // return this.lostCatPostsService.update(query.id, query.connect);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.lostCatPostsService.softDelete(id);
  }
}
