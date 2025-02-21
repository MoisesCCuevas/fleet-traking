
/**
 * @swagger
 * /api/getLogin:
 *   post:
 *     summary: Authenticate user and create a session
 *     description: Validates user credentials and returns a session ID if successful.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: password123
 *     responses:
 *       200:
 *         description: Successful authentication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: The session ID.
 *                   example: 123e4567-e89b-12d3-a456-426614174000
 *       400:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *                   example: Invalid credentials
 */
import { createHash, randomUUID } from "crypto";
import mockUsers from "./mockUsers.json";

function validateUser(email, password) {
  const users = mockUsers.users;
  return users.find(user => user.username === email && user.password === password);
}

export async function POST(request) {
  const { email, password } = await request.json();
  const hash = createHash("sha256");
  const hashedPassword = hash.update(password).digest("hex");
  console.log(validateUser(email, hashedPassword));
  if (!validateUser(email, hashedPassword)) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 400 });
  }
  const sessionId = randomUUID();
  console.log(sessionId);
  return Response.json({ data: sessionId });
}