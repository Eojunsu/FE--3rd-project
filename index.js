import React from "react";
import '/style.css';


const App = () => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open);
    };

    return(

      <div className="contaitner">  
        <div>
            <button onClick={handleOpen}>위치</button>
            {open? (
                <ul className="location">
                    <li className="location1">
                        <button>서울</button>
                    </li>
                    <li className="location2">
                        <button>제주도</button>
                    </li>
                </ul>
            ):null}
            {open? <div>Is Open </div> : <div> Is Closed </div>}
        </div>

        <div>
           <button onClick={handleOpen}>가격</button>
            {open? (
           <ul className="price">
            <li className="price1">
             <button>3000원대</button>
            </li>
            <li className="price2">
             <button>4000원대</button>
            </li>
            <li className="price3">
             <button>5000원대</button>
            </li>
           </ul>
            ):null}
           {open? <div>Is Open </div> : <div> Is Closed </div>}

          </div>

          <div>
           <button onClick={handleOpen}>키워드</button>
            {open? (
           <ul className="keyword">
            <li className="keyword1">
             <button>예쁜</button>
            </li>
            <li className="keyword2">
             <button>편안한</button>
            </li>
            <li className="keyword3">
             <button>아기자기한</button>
            </li>
            <li className="keyword4">
             <button>공부하기 좋은</button>
            </li>
            <li className="keyword5">
             <button>디저트가 맛있는</button>
            </li>
           </ul>
            ):null}
           {open? <div>Is Open </div> : <div> Is Closed </div>}

          </div>

         

          <button type="submit">검색</button>

           <div className="까페1">
            <div className="cafeimage1">
             <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140719_139%2Fgamzadesign_1405735770421ni4Tz_JPEG%2Fblog_me_20140719_110537.jpg&type=sc960_832" alt="예쁜까페"></img>
            </div>
            <h3>예쁜까페</h3>
            <h3>서울시 서초구 방배3동 988-5</h3>
           </div>

           <div className="까페2">
            <div className="cafeimage2">
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjRfMzQg%2FMDAxNTk4Mjc5MTMxNTYz.BEYm7QO6BYfep1fnCYNfMzsxK9YXDAGmVz2Ier7BNdYg.AI6ycaXHYWN3XUuyvI_3QX4c48nP8wq8dNHYXjbH2gMg.JPEG.upoxiue%2F47D75C3F-F51E-4413-96FC-B50B175CB71D.jpeg&type=ff332_332" alt="디저트가 맛있는 까페"/>
            </div>
            <h3>디저트가 맛있는 까페</h3>
            <h3>제주특별시 서귀포동 1004-202</h3>
           </div>

           <div className="까페3">
            <div className="cafeimage3">
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjVfMzkg%2FMDAxNTI0NjMzMzI0NDA2.NMEv9cvJTrjx-uR0lvqOWvWQBJ_dq4wBzXH9E2tv1S8g.PI30lj6_uy7zu3mqnogS-hbBsgD88Ny2OkLR88M_Q3og.JPEG.superrocketeer%2F2018-04-22-20-31-18.jpg&type=ff332_332" alt="공부하기 좋은 까페"/>
            </div>
            <h3>공부하기 좋은 까페</h3>
            <h3>서울특별시 합정동 14902</h3>
           </div>




        </div>

    )
            }
 
export default index;