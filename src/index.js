import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCart from './ApprovalCart';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCart>
                <div style={{textAlign: 'center'}}>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>                
            </ApprovalCart>
            <ApprovalCart>
                <CommentDetail 
                    image="https://www.seekpng.com/png/full/356-3562377_personal-user.png" 
                    author="Sam" 
                    date="27.01.21" 
                    text="Nice blog post!"
                />
            </ApprovalCart>
            <ApprovalCart>
                <CommentDetail 
                    image="https://cduk.lk/wp-content/uploads/2020/10/man-300x300-1.png" 
                    author="Alex" 
                    date="15.12.20" 
                    text="I'm very happy!"
                />
            </ApprovalCart>
            <ApprovalCart>
                <CommentDetail 
                    image="http://hotprintdesign.com/wp-content/uploads/2019/02/Sani-Sebastian.png" 
                    author="Jane" 
                    date="18.04.20" 
                    text="Yaba daba du!"
                />
            </ApprovalCart>
        </div>
        
    );
};

ReactDOM.render(<App />, document.querySelector('#root')) 