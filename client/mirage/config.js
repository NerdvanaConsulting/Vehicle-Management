/************************************************
 * Application:  Vehicle Manager
 * File:  mirage/config.js
 * Author: Nerdvana Consulting
 * Creation Date: 27 Dec 2018
 * Requirement 22 - Sample Data
 * Purpose: Baseline sample data for mirage to test views
 * Modification History:
 * - 27 Dec 2018 - Initial build (no modifications)
 * - 29 Dec 2018 - Added additional attributes for image/year/mileage
 ***********************************************/
export default function() {
  this.namespace = '/api';

  this.get('/vehicles', function() {
    return {
      data: [{
        type: 'vehicle',
        id: 1,
        attributes: {
          vin: '41C8H6G2VB8930212',
          vehmake: 'Ford',
          vehmodel: 'Pinto',
          vehyear: '1990',
          vehcolor: 'Blue',
          vehmileage: 150000,
          vehimage: 'https://upload.wikimedia.org/wikipedia/commons/6/62/2017_Nissan_LEAF_%28ZE0_MY17%29_hatchback_%282018-11-02%29_01.jpg'
        }
      },{
        type: 'vehicle',
        id: 2,
        attributes: {
          vin: '53C8I6G2VC9930284',
          vehmake: 'Chevrolet',
          vehmodel: 'Malibu',
          veh_mear: '1986',
          vehcolor: 'Sea Green',
          vehmileage: 243950,
          vehimage: 'https://upload.wikimedia.org/wikipedia/commons/6/62/2017_Nissan_LEAF_%28ZE0_MY17%29_hatchback_%282018-11-02%29_01.jpg'
        }
      },{
        type: 'vehicle',
        id: 3,
        attributes: {
          vin: '97D8I6G2VC3530209',
          vehmake: 'Porsche',
          vehmodel: 'Boxer',
          vehyear: '1996',
          vehcolor: 'SIlver',
          vehmileage: 102500.9,
          vehimage: 'https://upload.wikimedia.org/wikipedia/commons/6/62/2017_Nissan_LEAF_%28ZE0_MY17%29_hatchback_%282018-11-02%29_01.jpg'
        }
      },{
        type: 'vehicle',
        id: 4,
        attributes: {
          vin: '97D8I6G2VC3530209',
          vehmake: 'BMW',
          vehmodel: 'BMW3 Sedan',
          vehyear: '2015',
          vehcolor: 'Pink',
          vehmileage: 1200,
          vehimage: 'https://upload.wikimedia.org/wikipedia/commons/6/62/2017_Nissan_LEAF_%28ZE0_MY17%29_hatchback_%282018-11-02%29_01.jpg'
        }
      }]
    };
  });
  this.get('/vehicles/:id', function() {});
  this.post('/vehicles', function() {});
  this.put('/vehicles/:id', function() {});
  this.del('/vehicles/:id', function() {});


  // These comments are here to help you get started. Feel free to delete them.


  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing


}
