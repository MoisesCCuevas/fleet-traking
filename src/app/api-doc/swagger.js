
/**
 * React component to render Swagger UI.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.spec - The Swagger specification object.
 * @returns {JSX.Element} The rendered Swagger UI component.
 */
"use client"
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function ReactSwagger({spec}) {
  return <SwaggerUI spec={spec} />;
}

export default ReactSwagger;
