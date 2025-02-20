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