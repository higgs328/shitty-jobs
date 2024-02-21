import Model, { attr } from '@ember-data/model';
import { dasherize } from '@ember/string';

export default class JobModel extends Model {
  @attr additionalInformation;
  @attr agency;
  @attr businessTitle;
  @attr careerLevel;
  @attr civilServiceTitle;
  @attr divisionWorkUnit;
  @attr fullTimePartTimeIndicator;
  @attr jobCategory;
  @attr jobDescription;
  @attr jobId;
  @attr level;
  @attr minimumQualRequirements;
  @attr numberOfPositions;
  @attr postingDate;
  @attr postingType;
  @attr postingUpdated;
  @attr preferredSkills;
  @attr processDate;
  @attr residencyRequirement;
  @attr salaryFrequency;
  @attr salaryRangeFrom;
  @attr salaryRangeTo;
  @attr titleClassification;
  @attr titleCodeNo;
  @attr toApply;
  @attr workLocation;

  get currencyFormatter() {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
  }

  get salaryRangeFromLabel() {
    return this.currencyFormatter.format(parseInt(this.salaryRangeFrom));
  }

  get salaryRangeToLabel() {
    return this.currencyFormatter.format(parseInt(this.salaryRangeTo));
  }

  get salaryLabel() {
    if (this.salaryRangeFromLabel === this.salaryRangeToLabel) {
      return this.salaryRangeToLabel;
    }
    return `${this.salaryRangeFromLabel} - ${this.salaryRangeToLabel}`;
  }

  get salaryFrequencyLabel() {
    if (this.salaryFrequency === 'Annual') {
      return 'a year';
    }
    if (this.salaryFrequency === 'Daily') {
      return 'a day';
    }
    if (this.salaryFrequency === 'Hourly') {
      return 'an hour';
    }
    return '';
  }

  get salaryGroup() {
    if (this.salaryFrequency === 'Annual') {
      if (this.salaryRangeTo > 200000) {
        return 200000;
      }
      if (this.salaryRangeTo > 180000) {
        return 180000;
      }
      if (this.salaryRangeTo > 160000) {
        return 160000;
      }
      if (this.salaryRangeTo > 140000) {
        return 140000;
      }
      if (this.salaryRangeTo > 120000) {
        return 120000;
      }
      if (this.salaryRangeTo > 100000) {
        return 100000;
      }
      if (this.salaryRangeTo > 80000) {
        return 80000;
      }
      if (this.salaryRangeTo > 60000) {
        return 60000;
      }
      if (this.salaryRangeTo > 40000) {
        return 40000;
      }
    }
    return 0;
  }

  get fullTimePartTimeLabel() {
    if (this.fullTimePartTimeIndicator === 'F') {
      return 'full-time';
    }
    if (this.fullTimePartTimeIndicator === 'P') {
      return 'part-time';
    }
    return 'not-specified';
  }

  get isExamRequired() {
    if (this.titleClassification === 'Competitive-1') {
      return true;
    } else {
      return false;
    }
  }

  get examLabel() {
    if (this.isExamRequired) {
      return 'exam may be required';
    } else {
      return 'no exam required';
    }
  }

  get postingCDateAge() {
    const pDate = new Date(this.postingDate);
    const cDate = new Date();
    const tDiff = cDate - pDate;
    return Math.floor(tDiff / (1000 * 60 * 60 * 24));
  }

  get postingUDateAge() {
    const pDate = new Date(this.postingUpdated);
    const cDate = new Date();
    const tDiff = cDate - pDate;
    return Math.floor(tDiff / (1000 * 60 * 60 * 24));
  }

  get postingAgeLabel() {
    const cDate = this.postingCDateAge >= 60 ? '60+' : this.postingCDateAge;
    const uDate = this.postingUDateAge >= 60 ? '60+' : this.postingUDateAge;
    if (cDate !== uDate) {
      return `posted ${cDate} days ago. updated ${uDate} days ago.`;
    } else {
      return `posted ${cDate} days ago.`;
    }
  }

  get properties() {
    const props = {};
    this.eachAttribute((attr) => {
      props[dasherize(attr)] = this[attr];
    });
    return props;
  }
}
