import type { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
    res.status(200).json({ message: "This is the '/login' POST handler" });

    if (req.method === 'POST') {
          const email = req.body.email;
          const password = req.body.password;
          if (email === 'emailcorect@example.com' && password === 'parolacorecta') {
            res.status(200).json({ message: 'Autentificare reușită' });
          } else {
            res.status(401).json({ message: 'Email sau parolă incorecte' });
          }
        } else {
          res.status(405).json({ message: 'Metoda HTTP nu este permisă' });
        }
      }


export default handler;
