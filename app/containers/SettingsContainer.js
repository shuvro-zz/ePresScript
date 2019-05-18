// @flow

import React, {Component} from 'react';
import { connect } from 'react-redux';
import Settings from '../components/Settings';
import {fetchTreatment , saveTreatment} from "../features/treatment";
import {saveSettings} from "../features/settings";

const mapStateToProps = state => ({
  securityState: state.securityState,
  systemEnvState: state.systemEnvState,
  settingsState: state.settingsState
});

const mapDispatchToProps = {
  fetchTreatment , saveTreatment, saveSettings
};

class SettingsContainer extends Component {
  constructor(props) {
    super(props);

    // if the accessToken is valid, redirect to homepage
    //const { accessTokenIsValid, navigateToAlias } = this.props;
  }

  render() {
    const {
       securityState , systemEnvState, settingsState, saveSettings
    } = this.props;
    console.log("Settings Container");
    console.log(this.props);
    return (
      <Settings
        securityState={securityState}
        systemEnvState={systemEnvState}
        settingsState={settingsState}
        saveSettings={saveSettings}
      />
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SettingsContainer);
