import { useState } from "react";
import "./App.css";

function App() {
  // const [num1, setNum1] = useState("후평똥 맛집");
  // const [num2, setNum2] = useState("퇴계동 맛집");
  // const [num3, setNum3] = useState("react 독학");
  const [num, setNum] = useState([
    "후평동 맛집",
    "퇴계동 맛집",
    "자바스크립트 독학",
  ]);

  const [likeCounter, setLikeCounter] = useState(0);
  const [unLikeCounter, setUnLikeCounter] = useState(0);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);

  const likeHandle = () => {
    setLikeCounter(likeCounter + 1);
  };
  const unLikeHandle = () => {
    setUnLikeCounter(unLikeCounter - 1);
  };
  const onChangeHandle = () => {
    let copy = [...num]; //deep카피!!
    copy[1] = "여자코트 추천";
    setNum(copy);
  };

  const onSortNum = () => {
    let newOrder = [...num].sort();
    setNum(newOrder);
  };
  const modalHandler = () => {
    setModal(!modal);
    // if (modal === false) {
    //   setModal(true);
    // } else setModal(false);
  };
  return (
    <div className="App">
      <button onClick={onSortNum}>가 - 나 정렬</button>
      <div className="nav">
        <h1>React Blog</h1>
      </div>

      {num.map((list, i) => {
        return (
          <div className="blog" key={i}>
            <h4
              onClick={() => {
                modalHandler();
                setTitle(i);
              }}
            >
              {list}
            </h4>
            <span onClick={likeHandle}>👍🏻</span>
            {likeCounter}
            <span onClick={unLikeHandle}>👎🏻</span>
            {unLikeCounter}
            <p>2월 17일 작성</p>
          </div>
        );
      })}

      {modal === true ? (
        <Modal title={title} onChange={onChangeHandle} num={num} />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.num[props.title]}</h4>
      <p>내용</p>
      <p>상세 내용</p>
      <button onClick={props.onChange}>여자코트 추천으로 변경</button>
    </div>
  );
};

export default App;
