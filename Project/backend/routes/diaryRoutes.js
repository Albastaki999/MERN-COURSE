import express from "express";
import { Diary } from "../models/diary.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.userId;
    if (!title || !description) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const diary = new Diary({
      title,
      description,
      user: userId,
    });

    await diary.save();

    return res
      .status(201)
      .json({ message: "Diary Created Successfully", diary });
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/fetchAll", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const diaries = await Diary.find({ user: userId });

    return res.status(200).json({ message: "Diaries fetched", diaries });
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.get("/:diaryId", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const { diaryId } = req.params;

    const diary = await Diary.findOne({ _id: diaryId, user: userId });

    if (!diary) {
      return res.status(404).json({ error: "Diary not found" });
    }

    return res.status(200).json({ message: "Diary found", diary });
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/update", authMiddleware, async (req, res) => {
  try {
    const { title, description, diaryId } = req.body;
    const userId = req.userId;

    const diary = await Diary.findOne({ _id: diaryId, user: userId });

    if (!diary) {
      return res.status(404).json({ error: "Diary not found" });
    }

    if (!title || !description) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    diary.title = title;
    diary.description = description;

    await diary.save();

    return res
      .status(200)
      .json({ message: "Diary Updated Successfully", diary });
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/delete/:diaryId", authMiddleware, async (req, res) => {
  try {
    const { diaryId } = req.params;
    const userId = req.userId;

    const diary = await Diary.findOneAndDelete({ _id: diaryId, user: userId });

    if (!diary) {
      return res.status(404).json({ error: "Diary not found" });
    }


    return res
      .status(200)
      .json({ message: "Diary Deleted Successfully" });
  } catch (e) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
