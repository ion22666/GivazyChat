import type { NextApiHandler } from "next";
import bcrypt from 'bcrypt';
import {User} from '../../models/user';


//Login Authentification



const handler: NextApiHandler = async (req, res) => {
    
     
    if (req.method === 'POST') {
          const email = req.body.email;
          const password = req.body.password;
          if (email === 'emailcorect@example.com' && password === 'correctpassword') {
            res.status(200).json({ message: 'Autentificare reușită' });
          } else {
            res.status(401).json({ message: 'Incorect Email or Password.' });
          }

        } else {
          res.status(405).json({ message: 'Method HTTP is not allowed' });
        }

        

  const { email, password } = req.body;

  const user = await User.findOne({ $or: [{ username: email }, { email }] });
  if (!user.password) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }


  if (!user === password) {
    return res.status(401).json({ message: "User password is missing" });
  }

  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  return res.status(200).json({ message: "Authenticated" });



      

}



export default handler;
