import express from "express";
import path from "path";
import axios from "axios";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Ilm Saroyi API is running" });
  });

  app.post("/api/contact", async (req, res) => {
    const { name, phone, message } = req.body;
    // Using the credentials provided by the user
    const botToken = "8744604008:AAEISpe_GqWqLiPkNcYGABsWYCxZaCAEBj4";
    const chatId = "7228595517";

    const text = `
🚀 *Yangi xabar!*

👤 *Ism:* ${name}
📞 *Telefon:* ${phone}
✉️ *Xabar:* ${message}
    `;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      });
      res.json({ status: "success" });
    } catch (error) {
      console.error("Telegram API Error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  app.get("/api/courses", (req, res) => {
    res.json([
      { id: 1, title: "IT kurslari", price: "500,000 so'm" },
      { id: 2, title: "Ingliz tili", price: "400,000 so'm" },
      { id: 3, title: "Koreys tili", price: "450,000 so'm" },
      { id: 4, title: "Matematika", price: "350,000 so'm" },
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
