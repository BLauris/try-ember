import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      {id: 1, name: 'Lauris'},
      {id: 2, name: 'Greg'}
    ].findBy('id', params.order_id);
  }
});
