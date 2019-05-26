import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 5:50PM" avatarImg={faker.image.avatar()} content="react is cool!"/>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail author="James" timeAgo="Today at 12:00PM" avatarImg={faker.image.avatar()} content="DAMN"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Name" timeAgo="Yesterday at 9:00AM" avatarImg={faker.image.avatar()} content="....."/>
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
