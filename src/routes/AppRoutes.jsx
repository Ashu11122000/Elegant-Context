import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

function AppRoutes() {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
}

export default AppRoutes;