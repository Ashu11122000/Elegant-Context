import { APP_CONFIG } from "./config/appConfig";

function App() {
  return (
    <div className="min-h-screen bg-luxury-cream flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl font-heading text-luxury-black">
          <h1 className="text-5xl font-heading text-luxury-black">
            {APP_CONFIG.name}
          </h1>
          <p className="mt-4 text-gray-600">
            Version {APP_CONFIG.version}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;