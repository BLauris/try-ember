import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 1, name: 'Lauris'},
      {id: 2, name: 'Greg'}
    ]
  }
});
