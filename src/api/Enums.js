/* @flow */

import Enum from '../Enum';

export const PropertyTypes = new Enum({
  APARTMENT: { value: 1, description: 'Apartment' },
  HOUSE: { value: 2, description: 'House' },
  BED_AND_BREAKFAST: { value: 3, description: 'Bed & Breakfast' },
  LOFT: { value: 35, description: 'Loft' },
  TOWNHOUSE: { value: 36, description: 'Townhouse' },
  CONDOMINIUM: { value: 37, description: 'Condominium' },
  BUNGALOW: { value: 38, description: 'Bungalow' },
  CABIN: { value: 4, description: 'Cabin' },
  VILLA: { value: 11, description: 'Villa' },
  CASTLE: { value: 5, description: 'Castle' },
  TREEHOUSE: { value: 9, description: 'Treehouse' },
  BOAT: { value: 8, description: 'Boat' },
  PLANE: { value: 28, description: 'Plane' },
  CAMPER_RV: { value: 32, description: 'Camper/RV' },
  IGLOO: { value: 12, description: 'Igloo' },
  LIGHTHOUSE: { value: 10, description: 'Lighthouse' },
  YURT: { value: 15, description: 'Yurt' },
  TIPI: { value: 16, description: 'Tipi' },
  CAVE: { value: 18, description: 'Cave' },
  ISLAND: { value: 19, description: 'Island' },
  CHALET: { value: 22, description: 'Chalet' },
  EARTH_HOUSE: { value: 23, description: 'Earth House' },
  HUT: { value: 24, description: 'Hut' },
  TRAIN: { value: 25, description: 'Train' },
  TENT: { value: 34, description: 'Tent' },
  OTHER: { value: 33, description: 'Other' },
});

export const RoomTypes = new Enum({
  ENTIRE_HOME: { value: 'entire_home', description: 'Entire home/apt' },
  PRIVATE_ROOM: { value: 'private_room', description: 'Private room' },
  SHARED_ROOM: { value: 'shared_room', description: 'Shared room' },
});

export const BedTypes = new Enum({
  AIRBED: { value: 'airbed', description: 'Airbed' },
  FUTON: { value: 'futon', description: 'Futon' },
  PULL_OUT_SOFA: { value: 'pull_out_sofa', description: 'Pull-out Sofa' },
  COUCH: { value: 'couch', description: 'Sofa' },
  REAL_BED: { value: 'real_bed', description: 'Real Bed' },
});

export const CommonAmenities = new Enum({
  ESSENTIALS: { value:40 , description: 'Essentials' },
  TV: { value:1 , description: 'TV' },
  CABLE_TV: { value:2 , description: 'Cable TV' },
  AIR_CONDITIONING: { value:5 , description: 'Air Conditioning' },
  HEATING: { value:30 , description: 'Heating' },
  KITCHEN: { value:8 , description: 'Kitchen' },
  INTERNET: { value:3 , description: 'Internet' },
  WIRELESS_INTERNET: { value:4 , description: 'Wireless Internet' },
  CHECK_IN_24_HOUR: { value:43 , description: '24-Hour Check-in' },
});

export const ExtraAmenities = new Enum({
  SPA: { value:25 , description: 'Spa' },
  WASHER: { value: 33, description: 'Washer' },
  POOL: { value: 7, description: 'Pool' },
  DRYER: { value: 34, description: 'Dryer' },
  BREAKFAST: { value: 16, description: 'Breakfast' },
  FREE_PARKING_ON_PREMISES: { value: 9, description: 'Free Parking on Premises' },
  GYM: { value: 15, description: 'Gym' },
  LIFT_IN_BUILDING: { value: 21, description: 'Lift in Building' },
  INDOOR_FIREPLACE: { value: 27, description: 'Indoor Fireplace' },
  BUZZER_WIRELESS_INTERCOM: { value: 28, description: 'Buzzer/Wireless Intercom' },
  DOORMAN: { value: 14, description: 'Doorman' },
  SHAMPOO: { value: 41, description: 'Shampoo' },
  HANGERS: { value: 44, description: 'Hangers' },
  HAIR_DRYER: { value: 45, description: 'Hair Dryer' },
  IRON: { value: 46, description: 'Iron' },
  LAPTOP_FRIENDLY_WORKSPACE: { value: 46, description: 'Laptop Friendly Workspace' },
});

export const HomeSafetyAmenities = new Enum({
  SMOKE_DETECTOR: { value: 35, description: 'Smoke Detector' },
  CARBON_MONOXIDE_DETECTOR: { value: 36, description: 'Carbon Monoxide Detector' },
  FIRST_AID_KIT: { value: 37, description: 'First Aid Kit' },
  SAFETY_CARD: { value: 38, description: 'Safety Card' },
  FIRE_EXTINGUISHER: { value: 39, description: 'Fire Extinguisher' },
});

export const HostPreferencesAmenities = new Enum({
  SMOKING_ALLOWED: { value: 11, description: 'Smoking Allowed' },
  PETS_ALLOWED: { value: 12, description: 'Pets Allowed' },
  SUITABLE_FOR_EVENTS: { value: 32, description: 'Suitable for Events' },
});
