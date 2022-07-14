import { Controller, Get, HttpCode, HttpStatus, UseGuards, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@ApiTags('Auth')
@Controller({
  path: '/auth',
  version: '1',
})
export class AuthController {
  constructor() {}

  @Get()
  authTest(@Request() req) {
    console.log(req.user);
    return `Hello! ${req.user.id}`;
  }
}
