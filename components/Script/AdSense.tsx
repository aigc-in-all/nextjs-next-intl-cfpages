import Script from "next/script";

type AdSenseProps = {
    pid: string;
}

const AdSense = ({ pid }: AdSenseProps) => {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    )
}

export default AdSense;
