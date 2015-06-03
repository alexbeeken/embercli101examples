import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('friend');
  },
  activate: function() {
    var model = this.modelFor('friends/new')

    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
  deactivate: function() {
    console.log("========deactivate hook called============")
  },
   actions: {
    save: function() {
      console.log('+-- save action bubbled up to friends new route');

      return true;
    },
    cancel: function() {
      console.log('+-- cancel action bubbled up to friends new route');

      return true;
    }
  }
});
