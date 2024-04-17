import { Request, Response } from "express";
import sql from "mssql";

export const getPeople = async (req: Request, res: Response) => {
  try {
    const result = await sql.query(`SELECT * FROM People`);
    if (!result) {
      return res.status(400).json({ message: "Unable to fetch people" });
    }
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Unable to fetch people:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addPeople = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    if (!id || !name) {
      return res.status(400).json({ message: "Must include an ID and name" });
    }
    const addedPerson = await sql.query(
      `INSERT INTO People 
        (Name)
        VALUES 
        ('${name}')`
    );
    if (!addedPerson) {
      return res.status(400).json({ message: "Unable to add person" });
    }
    res.status(201).json({ message: `Added ${name} to People table` });
  } catch (error) {
    console.error("Unable to add person:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
