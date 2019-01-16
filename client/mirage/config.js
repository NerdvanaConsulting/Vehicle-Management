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

  let vehicles = [{
        type: 'vehicle',
        id: '1',
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
        id: '2',
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
        id: '3',
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
        id: '4',
        attributes: {
          vin: '97D8I6G2VC3530209',
          vehmake: 'BMW',
          vehmodel: 'BMW3 Sedan',
          vehyear: '2015',
          vehcolor: 'Pink',
          vehmileage: 1200,
          vehimage: 'https://upload.wikimedia.org/wikipedia/commons/6/62/2017_Nissan_LEAF_%28ZE0_MY17%29_hatchback_%282018-11-02%29_01.jpg'
        }
      },{
        type: 'vehicle',
        id: '5',
        attributes: {
          vin: 'JM3I6G2VC3530209',
          vehmake: 'Peterbilt',
          vehmodel: 'Big rig 18',
          vehyear: '2018',
          vehcolor: 'Steel Blue',
          vehmileage: 15000,
          vehimage: 'https://upload.wikimedia.org/wikipedia/commons/6/62/2017_Nissan_LEAF_%28ZE0_MY17%29_hatchback_%282018-11-02%29_01.jpg'
        }
      },{
        type: 'vehicle',
        id: '6',
        attributes: {
          vin: '53KI6G2VC3539999',
          vehmake: 'Lamborghini',
          vehmodel: 'Countach',
          vehyear: '2018',
          vehcolor: 'Steel Blue',
          vehmileage: 350000,
          vehimage: 'https://upload.wikimedia.org/wikipedia/commons/6/62/2017_Nissan_LEAF_%28ZE0_MY17%29_hatchback_%282018-11-02%29_01.jpg'
        }
  }];
    
  this.get('/vehicles', function(db, request) {
    if(request.queryParams.id !== undefined) {
      let filteredVehicles = vehicles.filter(function(i) {
        return i.attributes.id.indexOf(request.queryParams.id) !== -1;
      });
      return { data: filteredVehicles };
    } else {
      return { data: vehicles };
    }
  });

  this.get('/vehicles/:id', function(db , request) {
    return { data: vehicles.find((vehicle) => request.params.id === vehicle.id) };
  });


  // These comments are here to help you get started. Feel free to delete them.

  let fillups = [
    {
      type: 'fillup',
      id: '1',
      attributes: {
        filldate: '01/01/2019',
        mileage: 36000,
        trip: 340,
        amount: 12.9,
        rate: 2.079,
        total: 26.81,
        mpg: 26.35,
        vehicle: '1'
      }
    },{
      type: 'fillup',
      id: '2',
      attributes: {
        filldate: '01/03/2019',
        mileage: 36500,
        trip: 500,
        amount: 13.9,
        rate: 2.059,
        total: 28.62,
        mpg: 35.97,
        vehicle: '2'
      }        
    },{
      type: 'fillup',
      id: '3',
      attributes: {
        filldate: '01/03/2019',
        mileage: 36500,
        trip: 500,
        amount: 13.9,
        rate: 2.059,
        total: 28.62,
        mpg: 35.97,
        vehicle: '2'
      }        
    },{
      type: 'fillup',
      id: '4',
      attributes: {
        filldate: '01/05/2019',
        mileage: 36500,
        trip: 500,
        amount: 13.9,
        rate: 2.059,
        total: 28.62,
        mpg: 35.97,
        vehicle: '4'
      }        
    },{
      type: 'fillup',
      id: '5',
      attributes: {
        filldate: '01/06/2019',
        mileage: 37000,
        trip: 500,
        amount: 13.9,
        rate: 2.059,
        total: 28.62,
        mpg: 35.97,
        vehicle: '3'
      }        
    },{
      type: 'fillup',
      id: '6',
      attributes: {
        filldate: '01/07/2019',
        mileage: 37500,
        trip: 500,
        amount: 13.9,
        rate: 2.059,
        total: 28.62,
        mpg: 35.97,
        vehicle: '4'
      }        
    }];

    this.get('/fillups', function(db, request) {
      if(request.queryParams.id !== undefined) {
        let filteredFillups = fillups.filter(function(i) {
          return i.attributes.vehicle.indexOf(request.queryParams.id) !== -1;
        })
        return { data: filteredFillups };
      } else {
        return {data: fillups };
      }
    });
    this.get('/fillups/:vehicle', function(db, request) {
      return { data: fillups.find((fillup) => request.params.vehicle = vehicle) };
    });
    this.get('/fillups/:id', function(db, request) {
      return { data: fillups.find((fillup) => request.params.id = fillup.id) };
    });

    //THis is a test to see if I can serve images with a get to that location.
    this.get('/public/assets/images', function(db, request) {
      return { data: request };
    });
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing


}
