import React from 'react';
import s from './NewPost.module.scss';
import styleButton from '../../common/button/Button.module.scss';
import { BsPencilSquare } from 'react-icons/bs';
import { ImImages } from 'react-icons/im';
import { IoIosVideocam } from 'react-icons/io';
import { RiMap2Line } from 'react-icons/ri';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
const maxLength500 = maxLength(500);
const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="text" className="form-control" placeholder="Write what you wish" validate={[required, maxLength500]} />
      <BsPencilSquare className={s.icon} />
      <ImImages className={s.icon} />
      <IoIosVideocam className={s.icon} />
      <RiMap2Line className={s.icon} />
      <button className={'btn btn-primary ' + styleButton.blue}>Publish</button>
    </form>
  );
};
const NewPostReduxForm = reduxForm({
  form: 'NewPost',
})(NewPostForm);
const NewPost = (props) => {
  const addPost = (data) => {
    props.addPost(data);
    props.reset('NewPost');
  };
  return (
    <div className={s.wrapper}>
      <img src={props.dataForMe.avatar} alt="" />
      <NewPostReduxForm onSubmit={addPost} />
    </div>
  );
};

export default NewPost;
