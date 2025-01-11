import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from '../auth.service'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../../user/user.service'
import { ConfigService } from '@nestjs/config'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('mocked-token'),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mocked-token'),
          },
        },
        {
          provide: UserService,
          useValue: {
            getByID: jest.fn(),
            getByEmail: jest.fn(),
            createUser: jest.fn(),
          },
        },
      ],
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
