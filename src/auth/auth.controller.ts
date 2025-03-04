import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateUserDto } from '../users/dto';
import { SignInDto } from './dto/signIn-dto';
import { CookieGetter } from '../decorators/cookie-getter.decorator';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { RefreshTokenGuard } from '../common/guards';
import { GetCurrentUser, GetCurrentUserId } from '../common/decorator';
import { JwtPayloadWithRefreshToken, ResponseFields } from '../common/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateUserDto) {
    return this.authService.create(createAuthDto);
  }

  // user sign

  @Post('user-sign-up')
  user_sign_up(@Body() createAuthDto: CreateUserDto) {
    return this.authService.userSignUp(createAuthDto);
  }

  @Post('user-sign-in')
  user_sign_in(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.userSignIn(signInDto, res);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  async userRefresh(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUser() user: JwtPayloadWithRefreshToken,
    // @Param("id") id: number,
    // @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<ResponseFields> {
    return this.authService.userRefreshToken(userId, refreshToken, res);
  }

  @UseGuards(RefreshTokenGuard)
  @HttpCode(200)
  @Post('user-sign-out')
  user_sign_out(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.userSignOut(refreshToken, res);
  }

  // admin sign

  @Post('admin-sign-up')
  admin_sign_up(@Body() createAuthDto: CreateUserDto) {
    return this.authService.adminSignUp(createAuthDto);
  }

  @Post('admin-sign-in')
  admin_sign_in(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.adminSignIn(signInDto, res);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('admin-refresh')
  async adminRefresh(
    @GetCurrentUserId() id: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUser() user: JwtPayloadWithRefreshToken,
    // @Param("id") id: number,
    // @CookieGetter("refresh_token") refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<ResponseFields> {
    return this.authService.adminRefreshToken(id, refreshToken, res);
  }

  @Post('admin-sign-out')
  admin_sign_out(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.adminSignOut(refreshToken, res);
  }

  // finish

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
