import { useState } from "react";
import type { Style } from "../../types/types";
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Header4 from "../Elements/Header4";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

type GeolocationType = {
    style: Style;
}

type LocationType = {
    latitude: number;
    longitude: number;
    accuracy: number;
}

export default function Geolocation({ style }: GeolocationType) {
    const { buttonClass, containerClass, h3Class, h4Class, pClass, spanClass1 } = style;

    const [location, setLocation] = useState<LocationType>({
        latitude: 0,
        longitude: 0,
        accuracy: 0
    });

    function handleClick() {
        function success(pos: { coords: GeolocationCoordinates; }) {
            const crd = pos.coords;
            
            setLocation({
                latitude: crd.latitude,
                longitude: crd.longitude,
                accuracy: crd.accuracy
            })
        }
        
        function error({ code, message }: GeolocationPositionError) {
            console.warn(`ERROR(${code}): ${message}`);
        }
        
        const options = {
            maximumAge: Infinity,
            timeout: Infinity,
            enableHighAccuracy: true,
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    return (
        <WidgetContainer style={containerClass}>
            <Header3 style={h3Class}>
                <code>navigator</code>
                <code>.geolocation</code>
                <code>.getCurrentPosition()</code>
            </Header3>

            <Header4 style={h4Class}>
                Latitude: <Paragraph style={pClass}>{location.latitude}</Paragraph>
            </Header4>

            <Header4 style={h4Class}>
                Longitude: <Paragraph style={pClass}>{location.longitude}</Paragraph>
            </Header4>

            <Header4 style={h4Class}>
                Accuracy: <Paragraph style={pClass}>{(location.accuracy).toFixed(0)} <Span1 style={spanClass1}>meters</Span1></Paragraph>
            </Header4>
            
            <Button style={buttonClass} handleClick={handleClick}>
                Get Location
            </Button>

            <p className="text-sm text-neutral-500 leading-5">*May not work with certain privacy settings.</p>
        </WidgetContainer>
    );
}