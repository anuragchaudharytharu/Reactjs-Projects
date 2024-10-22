export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-red-900 text-[24px]">404 Error: Page Not Found</h1>
      <p>Could not find the requested resource</p>
    </div>
  );
}
