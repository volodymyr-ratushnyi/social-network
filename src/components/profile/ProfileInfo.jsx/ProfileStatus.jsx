import React from 'react';
import Button from '../../common/button/Button';
import s from './ProfileInfo.module.scss';
import StatusForm from './StatusForm';
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  switchEditMode = (e) => {
    this.setState({
      editMode: !this.state.editMode,
    });
    if (e.status && typeof e.status === 'string') {
      this.props.updateStatus(e.status);
      return;
    }
    if (!this.state.editMode) this.props.updateStatus(e.target.value);
  };

  render() {
    return this.state.editMode ? (
      <StatusForm switchEditMode={this.switchEditMode} status={this.props.status} onSubmit={this.switchEditMode} />
    ) : this.props.status ? (
      <span onDoubleClick={this.switchEditMode}>{this.props.status}</span>
    ) : (
      <Button text="What's on your mind?" cls="blue" className={s.btnStatus} onClick={this.switchEditMode} />
    );
  }
}
export default ProfileStatus;
