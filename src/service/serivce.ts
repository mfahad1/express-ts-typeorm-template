// import { FieldDto } from './../entity/Field';
// import { FieldRepo } from '../respositories/Repo';
// import { Container, Inject, Service } from "typedi";
// import { InjectRepository, OrmRepository } from "typeorm-typedi-extensions";
// import { fieldValidator } from '../validators/field.validators';
// import { getConnection } from 'typeorm';

// @Service()
// export class FieldService {

//   constructor(
//     @InjectRepository()
//     @OrmRepository() private readonly repo: FieldRepo = new FieldRepo,
//   ) {
//   }


//   async addField(payload) {
//     let { name, cropType, area } = payload;
//     const error = fieldValidator({ name, cropType, area });
//     if (error) {
//       throw error;
//     }
//     return await this.repo.create({ name, cropType, area });
//   }

//   async getAll() {
//     return await this.repo.getAll();
//   }

//   async getOne(id: number) {
//     const response = await this.repo.getOne(id);
//     return response;
//   }
// }
