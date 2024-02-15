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
    return `${this.salaryRangeFromLabel} - ${this.salaryRangeToLabel}`;
  }

  get salaryFrequencyLabel() {
    if (this.salaryFrequency === 'Annual') {
      return 'a year';
    } else {
      return 'a hour';
    }
  }

  get fullTimePartTimeLabel() {
    if (this.fullTimePartTimeIndicator === 'F') {
      return 'full-time';
    } else {
      return 'part-time';
    }
  }

  get isExamRequired() {
    if (this.titleClassification.toUpperCase().startsWith('NON-COMP')) {
      return false;
    } else {
      return true;
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
