import Controller from '@ember/controller';

export default Controller.extend({
   actions: {
      filterById(param) {
         if (param !== '') {
            return this.store.query('vehicles', { id: param });
      } else {
         return this.store.findAll('vehicles');
      }
   }
}
});
