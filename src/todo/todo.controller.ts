import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './create-task.dto';

@Controller('todo')
export class TodoController {
  constructor(private prisma: PrismaService) {}
  @Get('list')
  getList() {
    return [
      {
        title: '牛乳を買いに行く',
        due_on: '2022-12-24',
        done: false,
      },
    ];
  }

  @Post('')
  async add(@Body() task: CreateTaskDto) {
    const result = await this.prisma.task.create({
      data: task,
    });
    return {
      result,
      status: 'OK',
    };
  }
}
