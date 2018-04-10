import { GeoPoint } from "@firebase/firestore-types";

export interface DBItem {
    h_name: string;
    h_lat: GeoPoint;
    h_long: GeoPoint;
}