import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../utils/validators/validators';
import styleButton from '../../../common/button/Button.module.scss';
import styleTextarea from '../../../common/textarea/Textarea.module.scss';
import s from './NewComment.module.scss';

const NewCommentForm = (props) => {
  return (
    <form className={s.myMessage + ' input-group mb-3'} onSubmit={props.handleSubmit}>
      <Field
        name="text"
        component="textarea"
        placeholder="Post a comment"
        className={`${styleTextarea.classic} ${styleTextarea.comment} form-control`}
        validate={[required]}
      />
      <button className={styleButton.black}>Send</button>
    </form>
  );
};

const NewComment = (props) => {
  const NewCommentReduxForm = reduxForm({ form: `postComment${props.post_id}`, shouldValidate: () => true })(NewCommentForm);
  const addComment = (values) => {
    props.addComment(props.post_id, values.text);
  };

  return (
    <div className={s.wrapper}>
      <img src={props.dataForMe.avatar} alt="myAvatar" />
      <NewCommentReduxForm onSubmit={addComment} />
    </div>
  );
};

export default NewComment;
