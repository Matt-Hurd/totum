import L from "leaflet";
import { Thing } from "../../models";

const potentialIcons = [
  "addison",
  "armor",
  "bargainer",
  "bubbulfrog",
  "camera",
  "cave",
  "chasm",
  "construct",
  "crystal",
  "earthwake",
  "fabric",
  "frox",
  "gacha",
  "gleeok",
  "hinox",
  "korok",
  "korokEnd",
  "korokPlatform",
  "korokSidePlatform",
  "korokStart",
  "lightroot",
  "map",
  "molduga",
  "picture",
  "schema",
  "schematic",
  "shrine",
  "talus",
  "tear",
  "tower",
  "well",
  "will",
  "x",
];

const icons = potentialIcons.reduce(
  (accum, obj) => {
    accum[obj] = L.icon({
      iconUrl: process.env.PUBLIC_URL + "/assets/images/route_icons/" + obj + ".png",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });
    return accum;
  },
  {} as Record<string, L.Icon>,
);

const defaultIcon = L.icon({
  iconUrl: process.env.PUBLIC_URL + "/assets/images/route_icons/blank.png",
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

export const getIconForThing = (thing: Thing) => {
  const icon = icons[thing.icon];
  if (icon === undefined) {
    return defaultIcon;
  }
  return icon;
};
