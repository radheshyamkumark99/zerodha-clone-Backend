app.get("/me", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ loggedIn: false });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ loggedIn: true, user: decoded });
  } catch (err) {
    res.status(401).json({ loggedIn: false });
  }
});
