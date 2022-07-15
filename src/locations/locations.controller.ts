// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Post,
//   Response,
//   UploadedFile,
//   UseGuards,
//   UseInterceptors,
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
// import { FilesService } from './locations.service';
// import { FileTypeDto } from './dto/file-type.dto';

// @ApiTags('Files')
// @Controller({
//   path: 'files',
//   version: '1',
// })
export class LocationsController {
  // constructor(private readonly filesService: FilesService) {}

  // @ApiBearerAuth()
  // @UseGuards(AuthGuard('jwt'))
  // @Post('upload')
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       file: {
  //         type: 'string',
  //         format: 'binary',
  //       },
  //     },
  //   },
  // })
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(@UploadedFile() file, @Body() type: FileTypeDto) {
  //   return this.filesService.uploadFile(file, type);
  // }

  // @Get(':path')
  // download(@Param('path') path, @Response() response) {
  //   return response.sendFile(path, { root: './files' });
  // }
}
