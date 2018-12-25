import React, { Component } from 'react';

type Props = {
  setForm: (form: string) => void,
  setName: (name: string) => void,
  setStrength: (strength: string) => void,
  setFrequency: (frequency: string) => void,
  setRemark: (remark: string) => void,
  setSubmitted: (submitted: boolean) => void
};

class PrescribeDrugs extends React.Component<Props, any> {

  constructor(props: Props, state: any) {
    super(props);
    console.log('in PrescribeDrugs constructor');
    console.log(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1> Prescribe Drugs </h1>
      </div>
    );
  }
}

export default (PrescribeDrugs);
