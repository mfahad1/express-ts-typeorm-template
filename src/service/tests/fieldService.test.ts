// import { FieldRepo } from '../../respositories/Repo';
// import * as chai from 'chai';
// import * as chaiAsPromised from 'chai-as-promised';
// import * as sinon from 'sinon';
// import * as faker from 'faker';

// import { FieldService } from '../serivce';
// import { CropEnum } from '../../entity/Field';
// import { RepositoryMock } from '../../helpers/mocks/repositories.mock';
 
// chai.use(chaiAsPromised);
// const expect = chai.expect;


// describe('The FieldService', () => {
//   describe('create', () => {
//     const stubValue = {
//       "name": faker.name.findName(),
//       "area": faker.random.number(),
//       "cropType": CropEnum[0],
//       "id": faker.random.uuid()
//     };
//     const fieldRepo = new RepositoryMock();
//     const stub = sinon.stub(fieldRepo, "create").returns(stubValue);
//     const fieldService = new FieldService(fieldRepo as any);
//     it("creating object", async () => {
//       const fieldObj = await fieldService.addField({
//         name: stubValue.name,
//         cropType: stubValue.cropType,
//         area: stubValue.area
//       });
//       expect(stub.calledOnce).to.be.true;
//       expect(fieldObj.id).to.equal(stubValue.id);
//       expect(fieldObj.name).to.equal(stubValue.name);
//       expect(fieldObj.area).to.equal(stubValue.area);
//       expect(fieldObj.cropType).to.equal(stubValue.cropType);
//     })

//     it('should catch an error on area missing', async () => {
//       return expect(
//         fieldService.addField({
//           name: stubValue.name,
//           cropType: stubValue.cropType
//         })
//       ).to.be.rejected
//     })

//     it('should catch an error on cropType missing', async () => {
//       return expect(
//         fieldService.addField({
//           name: stubValue.name,
//           area: stubValue.area
//         })
//       ).to.be.rejected
//     })

//     it('should catch an error on name missing', async () => {
//       return expect(
//         fieldService.addField({
//           cropType: stubValue.cropType,
//           area: stubValue.area
//         })
//       ).to.be.rejected
//     })
//   });
// });;