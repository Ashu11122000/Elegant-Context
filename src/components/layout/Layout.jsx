import PropTypes from "prop-types";

import Footer from "./Footer";
import Header from "./Header";
import TopBanner from "./TopBanner";

function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <TopBanner />
            <Header />

            <main className="flex-1">{children}</main>

            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;