
/**
 * @swagger
 * /api/getTracking:
 *   get:
 *     summary: Retrieve a list of vehicle tracking data
 *     description: Returns a list of 20 vehicles with random latitude and longitude values, kilometers, and number plates.
 *     responses:
 *       200:
 *         description: A JSON array of vehicle tracking data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idVehicle:
 *                         type: integer
 *                         description: The ID of the vehicle
 *                         example: 0
 *                       lat:
 *                         type: number
 *                         format: float
 *                         description: The latitude of the vehicle
 *                         example: 19.508450
 *                       lng:
 *                         type: number
 *                         format: float
 *                         description: The longitude of the vehicle
 *                         example: -99.236721
 *                       kms:
 *                         type: integer
 *                         description: The kilometers traveled by the vehicle
 *                         example: 100
 *                       numberPlate:
 *                         type: string
 *                         description: The number plate of the vehicle
 *                         example: "51A-12340"
 */
export async function GET() {
  const generateRandom = () => (Math.random() - 0.5) * 0.3;  
  const data = Array.from({ length: 20 }, (_, index) => ({
      idVehicle: index,
      lat: 19.508450 + generateRandom(),
      lng: -99.236721 + generateRandom(),
      kms: 100 + index,
      numberPlate: `51A-1234${index}`,
  }));
  return Response.json({ data: data })
}