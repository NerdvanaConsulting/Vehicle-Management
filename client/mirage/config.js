/************************************************
 * Application:  Vehicle Manager
 * File:  mirage/config.js
 * Author: Nerdvana Consulting
 * Creation Date: 27 Dec 2018
 * Requirement 22 - Sample Data
 * Purpose: Baseline sample data for mirage to test views
 * Modification History:
 * - 27 Dec 2018 - Initial build (no modifications)
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
          vehMake: 'Ford',
          vehModel: 'Pinto',
          vehYear: '1990',
          vehColor: 'Blue',
        }
      },{
        type: 'vehicle',
        id: 2,
        attributes: {
          vin: '53C8I6G2VC9930284',
          vehMake: 'Chevrolet',
          vehModel: 'Malibu',
          vehYear: '1986',
          vehColor: 'Sea Green',
        }
      },{
        type: 'vehicle',
        id: 3,
        attributes: {
          vin: '97D8I6G2VC3530209',
          vehMake: 'Porsche',
          vehModel: 'Boxer',
          vehYear: '1996',
          vehColor: 'SIlver',
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
