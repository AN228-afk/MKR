import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";

interface StoreLocatorConfig {
    locations: Array<{
        title: string;
        address1: string;
        address2: string;
        coords: { lat: number; lng: number };
        placeId: string;
    }>;
    mapOptions: {
        center: { lat: number; lng: number };
        fullscreenControl: boolean;
        mapTypeControl: boolean;
        streetViewControl: boolean;
        zoom: number;
        zoomControl: boolean;
        maxZoom: number;
        mapId: string;
    };
    mapsApiKey: string;
    capabilities: {
        input: boolean;
        autocomplete: boolean;
        directions: boolean;
        distanceMatrix: boolean;
        details: boolean;
        actions: boolean;
    };
}

export default function StoreLocator() {
    useEffect(() => {
        // Load the Google Maps Extended Component Library
        const script = document.createElement("script");
        script.type = "module";
        script.src =
            "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.15/index.min.js";
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

        if (!apiKey) {
            console.error("Google Maps API key is not configured");
            return;
        }

        const config: StoreLocatorConfig = {
            locations: [
                {
                    title: "MKR SAFETY SOLUTIONS",
                    address1: "H.No.24/1, 18th a cross Road, Muthyala nagar, Mathikere",
                    address2: "Bangalore, Karnataka, India",
                    coords: { lat: 13.0381072, lng: 77.5470819 },
                    placeId: "ChIJo_c0R1M9rjsRWUwguZ4b_JQ",
                },
            ],
            mapOptions: {
                center: { lat: 13.0381072, lng: 77.5470819 },
                fullscreenControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                zoom: 12,
                zoomControl: true,
                maxZoom: 17,
                mapId: "",
            },
            mapsApiKey: apiKey,
            capabilities: {
                input: true,
                autocomplete: true,
                directions: false,
                distanceMatrix: true,
                details: false,
                actions: false,
            },
        };

        // Wait for the custom element to be defined
        customElements.whenDefined("gmpx-store-locator").then(() => {
            const locator = document.querySelector("gmpx-store-locator");
            if (locator && "configureFromQuickBuilder" in locator) {
                (locator as any).configureFromQuickBuilder(config);
            }
        });
    }, []);

    return (
        <>
            <SEOHead
                title="Store Locator - MKR Safety Solutions"
                description="Find MKR Safety Solutions office locations in Bangalore. Visit our showroom for invisible grills and safety solutions."
                canonicalUrl="/store-locator"
            />
            <div className="relative w-full h-screen">
                <gmpx-store-locator
                    style={{
                        width: "100%",
                        height: "100%",
                        "--gmpx-color-surface": "#fff",
                        "--gmpx-color-on-surface": "#212121",
                        "--gmpx-color-on-surface-variant": "#757575",
                        "--gmpx-color-primary": "#1967d2",
                        "--gmpx-color-outline": "#e0e0e0",
                        "--gmpx-fixed-panel-width-row-layout": "28.5em",
                        "--gmpx-fixed-panel-height-column-layout": "65%",
                        "--gmpx-font-family-base": "'Roboto', sans-serif",
                        "--gmpx-font-family-headings": "'Roboto', sans-serif",
                        "--gmpx-font-size-base": "0.875rem",
                        "--gmpx-hours-color-open": "#188038",
                        "--gmpx-hours-color-closed": "#d50000",
                        "--gmpx-rating-color": "#ffb300",
                        "--gmpx-rating-color-empty": "#e0e0e0",
                    } as React.CSSProperties}
                />
            </div>
        </>
    );
}
