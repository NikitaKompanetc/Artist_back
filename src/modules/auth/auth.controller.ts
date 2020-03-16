import { Controller, Get, Post, Res, Req } from  '@nestjs/common' 
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

  @Post('login') 
  login(@Req() req, @Res() res) {
    this.authService.login(req, res)
  }

  @Post('logout') 
  logout(@Req() req, @Res() res) {
    this.authService.logout(req, res)
  }

  @Post('register') 
  register(@Req() req, @Res() res) {
    this.authService.register(req, res)
  }

  @Get('tokens') 
  refreshTokens(@Req() req, @Res() res) {
    this.authService.refreshTokens(req, res)
  }

  @Get('me') 
  getMyData(@Req() req, @Res() res) {
    this.authService.getMyData(req, res)
  }
}
