import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-stone-950 text-stone-100">
      {/* Luxury Background Layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_30%),linear-gradient(to_bottom,#0c0a09,#111827,#0c0a09)]" />

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-400/5 blur-3xl" />
      </div>

      {/* Top Premium Border Glow */}
      <div className="absolute inset-x-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.01]" />

        <div className="relative z-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;