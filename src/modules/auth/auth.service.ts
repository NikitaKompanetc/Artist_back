import { Injectable } from '@nestjs/common' 
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from '../users/user.entity';
import { TokensService } from '../users/tokens.service';
import { Token } from '../users/token.entity';

const cookieOptions = {
  maxAge: 9999999999,
  httpOnly: true,
  signed: true
};
const getBrowserId = req => {
  const browserId = req.signedCookies?.browserId;
  if (browserId) { 
    return { 
      browserId, 
      haveId: true 
    }
  } else {
    return { 
      browserId: String(Date.now()),
      haveId: false 
    };
  }
};
const createTokens = (userId, role) => {
  return {
    accessToken: jwt.sign(
      {
        userId, role
      },
      'process.env.JWT_ACCESS_SECRET',
      {
        expiresIn: '30s'//process.env.JWT_ACCESS_TIME
      }
    ),
    refreshToken: jwt.sign(
      {
        userId, role
      },
      'process.env.JWT_REFRESH_SECRET',
      {
        expiresIn: '600s'/*process.env.JWT_REFRESH_TIME*/,
        jwtid: String(Date.now())
      }
    )
  }
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tokensService: TokensService
  ) { }

  async register(req, res) {
    try {
      const dbUser = await this.usersService.findOne({ email: req.body.email });
      if (dbUser) {
        return res.status(409).json({ message: 'This email is already in use' });
      }

      const user = await this.usersService.create({
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        role: 'user',
      } as User)

      const newTokens = createTokens(user.id, user.role);
      const { browserId, haveId } = getBrowserId(req);

      await this.tokensService.create({
        browserId,
        refreshTokenId: jwt.decode(newTokens.refreshToken).jti,
        user
      } as Token)

      res.status(201)
        .cookie('accessToken', newTokens.accessToken, cookieOptions)
        .cookie('refreshToken', newTokens.refreshToken, cookieOptions);
      if (!haveId) res.cookie('browserId', browserId, cookieOptions);
      res.end();
    } catch (e) {
      res.sendStatus(400);
    }
  }

  async login(req, res) {
    const a = await this.tokensService.findAll()
    console.log(a)
    try {
      const user = await this.usersService.findOne({ email: req.body.email });
      if (!user) throw new Error;
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) throw new Error;

      const newTokens = createTokens(user.id, user.role);
      const { browserId, haveId } = getBrowserId(req);
      await this.tokensService.delete({
        browserId
      })
      await this.tokensService.create({
        refreshTokenId: jwt.decode(newTokens.refreshToken).jti,
        user,
        browserId
      } as Token)

      res.status(200)
        .cookie('accessToken', newTokens.accessToken, cookieOptions)
        .cookie('refreshToken', newTokens.refreshToken, cookieOptions)
      if (!haveId) res.cookie('browserId', browserId, cookieOptions);
      res.end();
    } catch (e) {
      res.status(400).json({ message: 'Bad input' });
    }
  }

  async logout(req, res) {
    const a = await this.tokensService.findAll()
    console.log(a)
    try {
      const token = req.signedCookies.refreshToken;
      const { browserId, haveId } = getBrowserId(req);

      if (!haveId || !token) throw new Error;

      await this.tokensService.delete({
        browserId
      })

      res.status(200)
        .clearCookie('accessToken')
        .clearCookie('refreshToken')
        .end();
    } catch (e) {
      res.status(401)
        .clearCookie('accessToken')
        .clearCookie('refreshToken')
        .json({ message: 'Logout failed' });
    }
  }

  async refreshTokens(req, res) {
    const a = await this.tokensService.findAll()
    console.log(a)
    const token = req.signedCookies.refreshToken;
    const { browserId, haveId } = getBrowserId(req);
    try {
      if (!haveId || !token) throw new Error;
      const decoded = await jwt.verify(token, 'process.env.JWT_REFRESH_SECRET');
      const user = await this.usersService.findOne({ id: decoded.userId });
      const { refreshTokenId } = await this.tokensService.findOne({
        browserId
      })
      if (refreshTokenId !== decoded.jti) throw new Error;

      const newTokens = createTokens(user.id, user.role);

      await this.tokensService.delete({
        browserId
      })
      await this.tokensService.create({
        refreshTokenId: jwt.decode(newTokens.refreshToken).jti,
        user,
        browserId
      } as Token)

      res.status(200)
        .cookie('accessToken', newTokens.accessToken, cookieOptions)
        .cookie('refreshToken', newTokens.refreshToken, cookieOptions)
        .end();
    } catch (e) {
      res.status(401).json({ message: 'Please relogin' });
    }
  }
}