import { Injectable } from '@nestjs/common';
import { DtoFind, DtoPagin, DtoValid } from './dto/create.dto';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async save(dto: DtoValid) {
    return this.databaseService.user.create({
      data: dto
    })
  }
  async delete(dto: DtoFind) {
    return this.databaseService.user.delete({
      where: {
        id: Number(dto.id)
      }
    })
  }
  async update(dto: DtoValid) {
    return this.databaseService.user.update({
      where: {
        id: Number(dto.id)
      },
      data: {
        name: dto.name,
        lastName: dto.lastName,
        age: dto.age,
        sex: dto.sex,
        place: dto.place,
        height: dto.height,
        weight: dto.weight
      }
    })
  }
  async load() {
    return this.databaseService.user.findMany()
  }

  async select(dto: DtoFind) {
    return this.databaseService.user.findUnique({
      where: {
        id: Number(dto.id)
      }
    })
  }
  
  async paginLoad(dto: DtoPagin) {
    return this.databaseService.user.findMany({
      skip: (dto.currentPage) * dto.elementsOnPage,
      take: dto.elementsOnPage,
    })
  }
}
