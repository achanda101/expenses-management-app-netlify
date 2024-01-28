import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react";
import sharedStyles from '~/styles/shared.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [ { rel: "stylesheet", href: cssBundleHref } ] : []),
  { rel: "stylesheet", href: sharedStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


// ErrorBoundary will be implemented by Remix
// instead of the "App" component if an error
// is thrown anywhere in the app.
export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <title>Error page</title>
        </head>
        <body>
          <main className="error">
            <h1>An error occurred!</h1>
            <p>{error.status} {error.statusText}</p>
            <p>{error.data.message}</p>
            <p>Back to <Link to="/">Safety!</Link></p>
          </main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  } else if (error instanceof Error) {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <title>Error page</title>
        </head>
        <body>
          <main className="error">
            <h1>An error occurred!</h1>
            <p>(instanceOf Error)</p>
            <p>{error.message}</p>
            <p>The stack trace is:</p>
            <p>{error.stack}</p>
            <br />
            <p>Back to <Link to="/">Safety!</Link></p>
          </main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  } else {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
          <title>Error page</title>
        </head>
        <body>
          <main className="error">
            <h1>An error occurred!</h1>
            <p>Unknown Error</p>
            <p>Back to <Link to="/">Safety!</Link></p>
          </main>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
}

export const meta: MetaFunction = ({ error }) => {
  return [
    { title: error ? "Ooops! An error" : "Expenses Management App" },
    { name: "description", content: "App built following Academind's Udemy course on Remix" },
  ];
};
