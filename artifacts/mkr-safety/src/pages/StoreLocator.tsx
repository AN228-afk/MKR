import { SEOHead } from "@/components/SEOHead";

export default function StoreLocator() {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const placeId = "ChIJo_c0R1M9rjsRWUwguZ4b_JQ";
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`;

    return (
        <>
            <SEOHead
                title="Store Locator - MKR Safety Solutions"
                description="Find MKR Safety Solutions office location in Bangalore. Visit our showroom for invisible grills and safety solutions."
                canonical="/store-locator"
            />
            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-2xl font-bold text-foreground mb-2">Visit MKR Safety Solutions</h1>
                <p className="text-muted-foreground mb-6">H.No.24/1, 18th A Cross Road, Muthyala Nagar, Mathikere, Bangalore, Karnataka, India</p>
                <div className="w-full rounded-xl overflow-hidden border border-border" style={{ aspectRatio: "16/9" }}>
                    {apiKey ? (
                        <iframe
                            title="MKR Safety Solutions location map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src={mapSrc}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                            Map unavailable
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
