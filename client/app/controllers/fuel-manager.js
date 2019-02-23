import Controller from '@ember/controller';

export default Controller.extend({
   actions: {
      filterById(param) {
         if (param !== '') {
            return this.store.query('fillups', { vehicle: param });
      } else {
         return this.store.findAll('fillups');
      }
   }
}
});
