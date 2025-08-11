import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/auth/register', (_req, res) => {
  res.status(501).json({ message: 'not implemented' });
});

app.post('/auth/login', (_req, res) => {
  res.status(501).json({ message: 'not implemented' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
