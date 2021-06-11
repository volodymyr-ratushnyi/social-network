import React from 'react';
import Button from '../../common/button/Button';
import Input from '../../common/input/Input';
import s from './ProfileInfo.module.scss';
class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  getValueFromInput = (e) => {
    this.setState({
      status: e,
    });
  };
  switchEditMode = () => {
    if (this.state.editMode && this.state.status !== this.props.status) this.props.updateStatus(this.state.status);
    this.setState({
      editMode: !this.state.editMode,
      status: this.props.status,
    });
  };
  render() {
    return this.state.editMode ? (
      <Input
        type="text"
        className="classic"
        placeholder=""
        getValueFromInput={this.getValueFromInput}
        onBlur={this.switchEditMode}
        value={this.state.status}
        autoFocus={true}
      />
    ) : this.props.status ? (
      <span onDoubleClick={this.switchEditMode}>{this.props.status}</span>
    ) : (
      <Button text="What's on your mind?" cls="blue" className={s.btnStatus} onClick={this.switchEditMode} />
    );
  }
}
export default ProfileStatus;
