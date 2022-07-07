import { TeslaVehicle } from '../../../types/api';

export default <TeslaVehicle>{
  model: 'S',
  name: 'Model S',
  variants: {
    model_s: {
      max_speed_mph: 155,
      speed_mph_zero_to_sixty: 3.1,
      base_price: 104990,
      colors: {
        pwmc: {
          name: 'Pearl White Multi-Coat',
          price: 0,
          hex: '#fafbf5'
        },
        sb: {
          name: 'Solid Black',
          price: 1500,
          hex: '#000'
        },
        msc: {
          name: 'Midnight Silver Metallic',
          price: 1500,
          hex: '#aaa9ad'
        },
        dbm: {
          name: 'Deep Blue Metallic',
          price: 1500,
          hex: '#'
        }
      },
      wheels: {
        tempest: {
          size: 19,
          price: 0,
          range_epa: 405
        },
        arachnid: {
          size: 21,
          price: 4500,
          range_epa: 4375
        }
      },
      imgs: [
        'images/models/s/pwmc-tempest.jfif'
      ]
    }
  }
};

// "model_s_plaid": {
//   max_speed_mph: 200,
//   speed_mph_zero_to_sixty: 1.99,
//   base_price: 135990,
// }
