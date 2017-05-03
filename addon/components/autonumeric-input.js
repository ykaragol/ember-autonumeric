import Ember from 'ember';
import layout from '../templates/components/autonumeric-input';
import autoNumeric from 'AutoNumeric';


export default Ember.Component.extend({
  layout,
  init(){
    this._super(...arguments);
    console.log('asd');
    Ember.run.scheduleOnce('afterRender', this, ()=>{
      this.$('input').autoNumeric('init', autoNumeric.getLanguages().French);
    });
  }
});
