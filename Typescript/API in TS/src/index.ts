interface User{
    id: number;
    name :string;
    age:number;
    email: string;
    password: string;
}

/*************
 * 
 * Pick : it allws you to create  a new type by picking the properties of an existing type 
 * for use in a specific  context.
 * 
 * 
 * 
 * example : u have a User with some properties 
 * you have to impliment update user api and allow only update the name age and password
 * in this case u can use PICK for  creating a new type that has only these three propertie
 * 
 * we can use this new type as our  request body when calling the updateUser API
 * 
 * ******************/




        type updateProps = Pick< User , 'name' | 'age'| 'password'>

        function update (body : updateProps) {

        }




/******
 * 
 * 
 * Partial:  It is used when are the properties in type or interface it not neccessory  to provide them .
 * 
 * example : it is not important user want to update all the things maybe he want to update name only
 * not age and password. in this case we can make that pick type as partial or make a new  one from it
 * 
 * *****/


            type updateProp = Partial<  Pick< User , 'name' | 'age'| 'password'>  >


            // or 


            type newUpdateProps = Partial<  updateProps  >





/*****
 * 
 * 
 * ReadOnly:
 * 
 * When you have a configuration object that should not be altered after initialization,
 *  making it Readonly ensures its properties cannot be changed.
 * 
 * 
 * 
 * ******/


        interface Config {
            readonly endpoint: string;
            readonly apiKey: string;
        }
        
        const config: Readonly<Config> = {
            endpoint: 'https://api.example.com',
            apiKey: 'abcdef123456',
        };
        
        // config.apiKey = 'newkey';

        // Error: Cannot assign to 'apiKey' because it is a read-only property.







/*****
 * 
 * 
 * Record : easy and clean way to write objects
 * 
 * 
 * 
 * 
 * *****/




        // ugly and hard way :


        // interface User {
        //     id: string;
        //     name: string;
        //   }
        
        //   type Users = { [key: string]: User };
        
        //   const users: Users = {
        //     'abc123': { id: 'abc123', name: 'John Doe' },
        //     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
        //   };



        // using record 


        interface User {
            id: string;
            name: string;
        }
        
        type Users = Record<string, User>;
        
        const users: Users = {
            'abc123': { id: 'abc123', name: 'John Doe' },
            'xyz789': { id: 'xyz789', name: 'Jane Doe' },
        };
        
        console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }









/*****
 * 
 * 
 * Map : maps gives you an even fancier way to deal with objects. Very similar to Maps in C++
 * 
 * 
 * 
 * 
 * *****/



interface User {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }









/***
 * 
 * 
 * 
 * 
 * Type inference in zod  ( make compile time type from runtime zod schema )
 * 
 * 
 * 
 * 
 * ***/







import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);




  // we can create type of body t but it make duplicasy in the code we already write almost same code in zod schema

  const updateBody : {
    name : string;
    email: string;
    age?   : number;
  } = req.body;      

// we will use zod library  to get types from schema and then assign them to our object

    /* 
    const A = z.string();
    type A = z.infer<typeof A>; 
    */
   type  UserInfo = z.TypeOf<typeof userProfileSchema> ;

   const updateBodyProps : UserInfo = req.body;

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);