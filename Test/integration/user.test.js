const database = require('../../src/database')
const serviceUser = require('../../src/services/user')

describe("Testes de usuário", () =>{
    beforeAll(async()=>{
        this.transaction = await database.db.transaction()
    })
    afterAll(() =>{
        this.transaction.rollback()
    })
    it("should create an user", async () =>{
        const user ={
            email: "testmail@teste.com",
            password: "12345678"
        }
       const addUser = await serviceUser.Create(user.email, user.password, this.transaction)
       this.id = addUser.id
       
       expect(addUser.email).toBe(user.email)
       expect(addUser.password).toBe(user.password)
    }) 

    it("should update an user", async () => {
      const user = {
        id: this.id,
        email: "testupdatemail@teste.com",
        password: "12345678",
      };
      const updatedUser = await serviceUser.Update(
        user.id,
        user.email,
        user.password,
        this.transaction
      );
      
      expect(updatedUser.email).toBe(user.email);
      expect(updatedUser.password).toBe(user.password);
    }); 
     it("should delete an user", async () => {
       const user = {
         id: this.id,
         
       };
       const res = await serviceUser.Delete(
         user.id,
         this.transaction
       );
       
       expect(res).toBe(true);
     }); 
})  