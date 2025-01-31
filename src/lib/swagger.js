/**
 * Generates the Swagger API documentation specification.
 *
 * This function creates the Swagger specification for the FleetTracking API
 * using the `createSwaggerSpec` function from the `next-swagger-doc` library.
 *
 * @async
 * @function getApiDocs
 * @returns {Promise<Object>} The Swagger API documentation specification.
 */
import { createSwaggerSpec } from "next-swagger-doc";

export async function getApiDocs(){
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "FleetTracking API",
        version: "1.0",
      },
      components: {},
      security: [],
    },
  });
  return spec;
};
