import {
  Body,
  Controller,
  Get,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserDTO } from './dto/user.dto'
import { UserService } from './user.service'

@ApiTags('Users')
@Controller('profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({
    status: 200,
    description: 'User fetched successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Get()
  @Auth()
  async profile(@CurrentUser('id') id: string): Promise<User> {
    return this.userService.getByID(id)
  }

  @ApiResponse({
    status: 201,
    description: 'User updated successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @UsePipes(new ValidationPipe())
  @Put()
  @Auth()
  async updateProfile(
    @CurrentUser('id') id: string,
    @Body() dto: UserDTO,
  ): Promise<UserDTO> {
    return this.userService.updateUser(id, dto)
  }
}
