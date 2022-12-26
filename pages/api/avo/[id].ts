import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const db = new DB();

  const entry = await db.getById(id as string);

  res.status(200).json(entry);
};

export default allAvos;
