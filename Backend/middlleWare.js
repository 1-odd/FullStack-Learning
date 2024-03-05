const express = require("express");
const app = express();
const zod = require('zod'); // use for validation check
const port = 3000;

// settting up the zod and validation check
const schema = zod.string();


// global middleware
app.use(express.json());

//middlewares


// input validation check middleware
function validation(req,res,next){
  const username = req.body.username;
  const password = req.body.password;
  const userRes = schema.safeParse(username);
  const passRes = schema.safeParse(password);
  if(passRes.success && userRes.success){
    next();
  }else{
    res.status(400).json({
      userRes,
      passRes
    })
  }
}

// middleware check for check the user is authenticated

function authMiddleware (req,res,next){
  const username = req.body.username;
  const password = req.body.password;

  if(username != "admin" && password != "admin"){
    res.status(401).json({message:"Unauthorized"})
  }else{
    next();
  }
}

// routes

app.get("/health-check",validation,authMiddleware, (req, res) => {


 
// your logic


  res.status(200).json({
   msg:"Login Done"
  })

});

// global catch or error handler ( global  middleware always put after the all routes )

app.use((err,req,res,next)=>{
  res.status(500).json({
    message:"Internal Server Error"
  })
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
