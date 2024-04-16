import { Request, Response } from "express";
import sql from "mssql";

export const getClans = async (req: Request, res: Response) => {
  try {
    const result = await sql.query(`SELECT * FROM Clans`);
    if (!result) {
      return res.status(400).json({ message: "Unable to fetch clans" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching clan:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addClan = async (req: Request, res: Response) => {
  try {
    const { clanName, capitalWorld, ruler } = req.body;
    if (!clanName || !capitalWorld || !ruler) {
      return res
        .status(400)
        .json({ message: "Must include Clan Name, Capital World, and Ruler" });
    }
    const addedClan = await sql.query(
      `INSERT INTO Clans 
      (ClanName, CapitalWorld, Ruler) 
      VALUES
      ('${clanName}', '${capitalWorld}', '${ruler}')`
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
