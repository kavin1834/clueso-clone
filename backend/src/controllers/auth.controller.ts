import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users, User } from "../models/user.model";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

/* REGISTER */
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword
  };

  users.push(newUser);

  res.status(201).json({ message: "User registered successfully" });
};

/* LOGIN */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
};
