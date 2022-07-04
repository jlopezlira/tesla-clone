

export interface TeslaVehicle {
  model: string;
  name: string;
  variants: {
    [key: string]: ModelAttributes;
  };
}

interface ModelAttributes {
  max_speed_mph: number;
  speed_mph_zero_to_sixty: number;
  base_price: number;
  wheels: WheelAttributes;
  colors: ColorAttributes;
  // img url will be structured as: images/models/<model>/<color>-<wheel>.foo
  // e.g images/models/s/pwmc-tempest.jfif
  imgs: string[];
}

interface WheelAttributes {
  [key: string]: {
    size: number;
    price: number;
    range_epa: number;
  };
}

interface ColorAttributes {
  [key: string]: {
    name: string;
    price: number;
    hex: string;
  };
}