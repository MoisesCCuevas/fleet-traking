
/**
 * @swagger
 * /api/getReport/{idReport}/route:
 *   get:
 *     summary: Retrieve report data based on the report ID
 *     parameters:
 *       - in: path
 *         name: idReport
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the report to retrieve
 *     responses:
 *       200:
 *         description: A JSON object containing the report data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     oneOf:
 *                       - type: object
 *                         properties:
 *                           title:
 *                             type: string
 *                             example: "Last mount"
 *                           total:
 *                             type: string
 *                             example: "$30,000"
 *                           percentage:
 *                             type: string
 *                             example: "+34.5%"
 *                       - type: object
 *                         properties:
 *                           kms15:
 *                             type: integer
 *                             example: 5000
 *                           numberPlate:
 *                             type: string
 *                             example: "51A-12340"
 *       400:
 *         description: Invalid report ID supplied
 *       404:
 *         description: Report not found
 */
const mockTotal = [
  {
    title: "Last mount",
    total: "$30,000",
    percentage: "+34.5%"
  },
  {
    title: "Total sales",
    total: "$400,000",
    percentage: "+34.5%"
  },
  {
    title: "Total trips",
    total: "1,200",
    percentage: "+34.5%"
  },
];

function generateRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

export async function GET(request, { params }) {
  const idReport = (await params).idReport
  let data = []
  switch(idReport) {
    case "1":
      data = mockTotal
      break
    case "2":
      data = Array.from({ length: 10 }, (_, index) => ({
        kms15: generateRandom(7500,2500),
        numberPlate: `51A-1234${index}`,
      }));
      break
    case "3":
      data = Array.from({ length: 10 }, (_, index) => ({
        kms15: generateRandom(7500,2500),
        numberPlate: `51A-1234${index}`,
      }));
      break
    default:
      break
  }
  return Response.json({ data: data })
}