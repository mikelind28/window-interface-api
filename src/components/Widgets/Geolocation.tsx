import { useState } from "react";
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Header4 from "../Elements/Header4";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";
import WidgetDescription from "../Elements/WidgetDescripiton";

type LocationType = {
  latitude: number;
  longitude: number;
  accuracy: number;
};

export default function Geolocation() {
  const [location, setLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
    accuracy: 0,
  });

  function handleClick() {
    function success(pos: { coords: GeolocationCoordinates }) {
      const crd = pos.coords;

      setLocation({
        latitude: crd.latitude,
        longitude: crd.longitude,
        accuracy: crd.accuracy,
      });
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
    <WidgetContainer>
      <Header3>
        <code>navigator</code>
        <code>.geolocation</code>
        <code>.getCurrentPosition()</code>
      </Header3>

      <Header4>
        Latitude: <Paragraph>{location.latitude}</Paragraph>
      </Header4>

      <Header4>
        Longitude: <Paragraph>{location.longitude}</Paragraph>
      </Header4>

      <Header4>
        Accuracy:{" "}
        <Paragraph>
          {location.accuracy.toFixed(0)} <Span1>meters</Span1>
        </Paragraph>
      </Header4>

      <Button handleClick={handleClick}>Get Location</Button>

      <p className="text-sm leading-5 text-neutral-500">
        *May not work with certain privacy settings.
      </p>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The <code>Navigator.geolocation</code> read-only property returns a Geolocation object that gives Web content access to the location of the device. This allows a website or app to offer customized results based on the user's location.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation"
          >
            Navigator: geolocation property - Web APIs | MDN
          </a>
        </cite>
        <div className='h-4' />
        <blockquote>
          <p className="span-3">
            The <code>getCurrentPosition()</code> method of the Geolocation interface is used to get the current position of the device.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition"
          >
            Geolocation: getCurrentPosition() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
