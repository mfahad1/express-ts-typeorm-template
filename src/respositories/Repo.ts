// import { EntityRepository, getManager, AbstractRepository } from 'typeorm';

// import { Field, FieldDto } from '../entity/Field';
// import { Service } from 'typedi';
// import { generalError } from '../helpers/errors/errors';

// @Service()
// @EntityRepository(Field)
// export class FieldRepo extends AbstractRepository<Field>  {

// 	// static manager = getManager();

// 	create(field: FieldDto) {
// 		const instance = new Field();
// 		Object.assign(instance, field)
// 		return getManager().save(instance);
// 	}

// 	getAll() {
// 		return getManager().find("Field");
// 	}

// 	async getOne(id: number): Promise<Field> {
// 		try {
//       return await getManager().findOneOrFail("Field", { id: id }) as Field;
//     } catch (e) {
//       generalError('Field Not found');
//     }

// 	}

// }
