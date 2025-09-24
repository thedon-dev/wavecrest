import { Helmet } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout({ title, description }) {
  const location = useLocation();

  const rawPath = location.pathname.split("/").filter(Boolean).pop() || "home";

  const pageName = rawPath
    .replace(/-/g, " ")
    .replace(/\band\b/gi, "&")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title ? `${title} | MyApp` : "MyApp"}</title>
        <meta
          name="description"
          content={description || "Default description of MyApp"}
        />
      </Helmet>

      <div className="bg-blue-500 py-3 px-[5%] lg:px-[10%]">
        <div className="2xl:container mx-auto">
          <p className="text-white text-3xl font-bold">{pageName}</p>
        </div>
      </div>

      <main className=" 2xl:container mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
