// Use a fixed key from an environment variable or a hardcoded fallback (not recommended for production).
const secretKey = process.env.JWT_SECRET || "secret123";

module.exports = {
    secretKey: secretKey,
};
