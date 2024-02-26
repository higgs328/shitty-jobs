import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class JobCardComponent extends Component {
  @service store;
  @tracked isFlipped = false;

  @action
  toggleFavorite() {
    const { id } = this.args.job;
    const favorite = this.store.peekRecord('favorite', id);
    if (favorite) {
      favorite.destroyRecord();
    } else {
      const isFavorite = true;
      this.store
        .createRecord('favorite', {
          id,
          isFavorite,
        })
        .save();
    }
    this.args.job.toggleProperty('isFavorite');
  }

  @action
  flip() {
    this.isFlipped = !this.isFlipped;
  }
}
