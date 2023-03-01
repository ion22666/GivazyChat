import type { NextApiHandler } from 'next';
import {User} from '../../models/user';
import bcrypt from 'bcrypt';

const handlerRegister : NextApiHandler = async (req, res) => {
    
//Register Authentification.

        
        const {username,password,email} = req.body;
        const existingUsers = await User.findOne({$or:[{username},{email}]})
        if(existingUsers) {
          return res.status(409).json({message:"Username or Email already exist."})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User ({username,email,password:hashedPassword})
        await newUser.save()

        return res.status(401).json({message:"User was created."})

    

}

export default handlerRegister;
