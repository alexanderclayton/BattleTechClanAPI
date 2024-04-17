import { Request, Response } from "express";
import sql from "mssql";

export const getClans = async (req: Request, res: Response) => {
  try {
    const result = await sql.query(
      `SELECT c.clanName, c.capitalWorld, p.name AS ruler
      FROM Clans c
      JOIN People p ON c.ruler = p.id`
    );
    if (!result) {
      return res.status(400).json({ message: "Unable to fetch clans" });
    }
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching clan:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addClan = async (req: Request, res: Response) => {
  try {
    const { id, clanName, capitalWorld, ruler } = req.body;
    if (!id || !clanName || !capitalWorld || !ruler) {
      return res.status(400).json({
        message: "Must include an ID, Clan Name, Capital World, and Ruler",
      });
    }
    const addedClan = await sql.query(
      `INSERT INTO Clans 
      (id, clanName, capitalWorld, ruler) 
      VALUES
      ('${id}', '${clanName}', '${capitalWorld}', '${ruler}')`
    );
    if (!addedClan) {
      return res.status(400).json({ message: "Unable to add clan" });
    }
    res.status(201).json({ message: `Added ${clanName} to Clan table` });
  } catch (error) {
    console.error("Error adding clan:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateClan = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "hello" });
  } catch (error) {
    console.error("Error updating clan:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
