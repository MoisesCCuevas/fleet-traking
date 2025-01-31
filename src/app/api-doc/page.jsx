
/**
 * IndexPage component fetches the API documentation and renders it using the ReactSwagger component.
 *
 * @async
 * @function IndexPage
 * @returns {Promise<JSX.Element>} A section element containing the ReactSwagger component with the API documentation spec.
 */
import { getApiDocs } from "@lib/swagger";
import ReactSwagger from "./swagger";

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="bg-white text-black w-screen h-screen">
      <ReactSwagger spec={spec} />
    </section>
  );
}
