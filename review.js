import React from 'react';

const review = () => {
    return (
        <div>
            <input type="text"
                   className="review"
                   placeholder='리뷰를 적어주세요'>리뷰적기</input>
            <button type="button"
                    className="buttonforreview">게시</button>
            {feedComments.map((commentArr, i) => {
                return(
                    <CommentList
                        userName={userName}
                        userComment={commentArr}
                        key={i}
                        />  
                );
            })}        
        </div>
    );
};

export default review;