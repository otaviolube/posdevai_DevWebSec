import { PrismaClient } from "@prisma/client";
    import express, { Request, Response } from "express";
    import cors from "cors";
    import path from "path";
    import authRouter from "./routes/auth.route";
    import morgan from "morgan";

    export const prisma = new PrismaClient();
    const app = express();

    async function main() {
      // Middleware
      app.use(morgan("dev"));
      app.use(cors());
      app.use(express.json());
      app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public folder

      // Redirect to landing page
      app.get("/", (req: Request, res: Response) => {
        res.redirect("/landing");
      });

      app.get("/landing", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, 'public', 'landing.html')); // Serve the landing page
      });

      app.get("/login", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, 'public', 'login.html')); // Serve the login page
      });

      app.get("/register", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, 'public', 'register.html')); // Serve the register page
      });

      app.use("/api/auth", authRouter);

      app.all("*", (req: Request, res: Response) => {
        return res.status(404).json({
          status: "fail",
          message: `Route: ${req.originalUrl} not found`,
        });
      });

      const PORT = 8000;
      app.listen(PORT, () => {
        console.info(`Server started on port: ${PORT}`);
      });
    }

    main()
      .then(async () => {
        await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
