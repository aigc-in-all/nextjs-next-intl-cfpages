import { getDomain, isDevelopment } from "@/lib/utils";
import Script from "next/script";

const Plausible: React.FC = () => {
    if (isDevelopment()) return null;

    return (
        <Script
            src="https://app.pageview.app/js/script.js"
            data-domain={getDomain()}
            strategy="lazyOnload"
        />
    )
};

export default Plausible;