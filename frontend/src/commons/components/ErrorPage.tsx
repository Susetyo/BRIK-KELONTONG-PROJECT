import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div id="error-page">
        <h1 className="text-5xl bold text-center">Oops!</h1>
        <p className="mt-2">Sorry, an unexpected error has occurred.</p>
        <p className="text-center">
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </div>
  );
}