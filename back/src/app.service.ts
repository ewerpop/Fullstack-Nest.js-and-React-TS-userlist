import { Injectable } from '@nestjs/common';
import { DtoCreate, DtoFind, DtoPagin, DtoValid } from './dto/create.dto';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async save(dto: DtoValid) {
    if (dto.sex) {
      return this.databaseService.user.create({
      data: {...dto, age: Number(dto.age), height: Number(dto.height), weight: Number(dto.weight), sex: true}
    })
    } else {
      return this.databaseService.user.create({
        data: {...dto, age: Number(dto.age), height: Number(dto.height), weight: Number(dto.weight), sex: false}
      })
    }
    
  }
  async delete(dto: DtoFind) {
    return this.databaseService.user.delete({
      where: {
        id: Number(dto.id)
      }
    })
  }
  async update(dto: DtoCreate) {
    return this.databaseService.user.update({
      where: {
        id: Number(dto.id)
      },
      data: {
        name: dto.name,
        lastName: dto.lastName,
        age: Number(dto.age),
        sex: dto.sex,
        place: dto.place,
        height: Number(dto.height),
        weight: Number(dto.weight)
      }
    })
  }
  async load() {
    return this.databaseService.user.findMany()
  }

  async select(dto: DtoFind) {
    let res = this.databaseService.user.findUnique({
      where: {
        id: Number(dto.id)
      }
    })
    if (res) {
      return res
    } else {
      return undefined
    }
  }
  
  async paginLoad(dto: DtoPagin) {
    return this.databaseService.user.findMany({
      skip: (dto.currentPage) * dto.elementsOnPage,
      take: dto.elementsOnPage,
    })
  }
}
