import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();



async function insertUser(username:string,password:string,firstName: string, lastName: string) {

    const user = await prisma.user.create({
        data:{
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(user);
}


// insertUser('ritik','123456', 'Pepi', 'Toni')
// .then(()=>{
//     console.log( "User createed successfully")
// })


async function getUser(username: string) {
    const user = await prisma.user.findFirst({
      where: {
          username: username
      }
    })
    console.log(user);
  }

//   getUser('pepito');




interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

// updateUser("pepito", {
//     firstName: "new name",
//     lastName: "singh"
// })








async function deleteUser(username: string) {
    const user = await prisma.user.delete({
      where: {
          username: username
      }
    })
    console.log(user);
  }
deleteUser('ritik').then(()=>{
    console.log("user deleted ")
})