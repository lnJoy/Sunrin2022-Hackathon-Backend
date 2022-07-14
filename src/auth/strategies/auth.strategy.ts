import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../../users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

type JwtPayload = { sub: string; aud: string; iat: number; exp: number };

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('auth.secret'),
    });
  }

  public async validate(payload: JwtPayload) {
    if (payload.aud !== this.configService.get('auth.aud')) {
      throw new UnauthorizedException();
    } 

    const uid = payload.sub;
    let user: User = await this.usersService.findOne({ 
      uid,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
