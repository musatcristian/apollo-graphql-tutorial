import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom/extend-expect";
import { RenderOptions, render } from "@testing-library/react";
import React, { ComponentProps, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

const renderApollo = (
  node: React.ReactElement,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: Pick<
    ComponentProps<typeof MockedProvider>,
    "mocks" | "addTypename" | "defaultOptions" | "cache" | "resolvers"
  >
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options
  );
};

export const renderWithRouterGenerator =
  (renderer: Partial<typeof render>) =>
  (node: ReactNode, options: RenderOptions) => {
    return (renderer as typeof render)(
      <BrowserRouter>{node}</BrowserRouter>,
      options
    );
  };

export const renderWithRouter = renderWithRouterGenerator(render);

export const renderApolloWithRouter = renderWithRouterGenerator(renderApollo);

export * from "@testing-library/react";
export { renderApollo };
