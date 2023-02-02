import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "some description",
    imageUrl:
      "https://media.istockphoto.com/id/1400544506/photo/modern-manhattan-skyscraper.jpg?b=1&s=170667a&w=0&k=20&c=mmX5a4avkPuewNIzOu2Gyy-X2rLfqdc3YZjU6v7Otxc=",
    address: "20 W 34th St, New York",
    Location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building #2",
    description: "some description #2",
    imageUrl:
      "https://media.istockphoto.com/id/1400544506/photo/modern-manhattan-skyscraper.jpg?b=1&s=170667a&w=0&k=20&c=mmX5a4avkPuewNIzOu2Gyy-X2rLfqdc3YZjU6v7Otxc=",
    address: "20 W 34th St, New York",
    Location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
