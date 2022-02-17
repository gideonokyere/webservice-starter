import Express,{Request,Response} from 'express';
const app = Express();

const PORT = process.env.PORT || 8080;

app.get('/',(req:Request,res:Response)=>{
    res.status(200).send('Hello World');
});

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));