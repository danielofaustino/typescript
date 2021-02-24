import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//string, number, boolean, object, Array
//interfaces

export function helloWord(req: Request, res: Response) {

  const user = createUser({
    name: 'Daniel',
    email: 'danieloliveirafaustino@gmail.com',
    password: '123456',
    techs:['Node.js','React.js','React Native',{title : 'Javascript', experience: 100}]
  });

  return res.json({ message: `Olá ${user.name}. ` });
}


