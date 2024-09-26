import { useState } from "react";

export default function FormContainer({ children, title }) {
  const [isShowContent, setIsShowContent] = useState(false);
  return (
    <>
      <div className="formHeaderContainer">
        <h2>{title}</h2>
        <button
          onClick={() => setIsShowContent(!isShowContent)}
          className={!isShowContent ? "buttonDown" : undefined}
        >
          <svg
            style={{ width: 30 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>chevron-up</title>
            <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
          </svg>
        </button>
      </div>
      <div className={isShowContent ? "formEditList" : "hidden"}>
        {children}
      </div>
    </>
  );
}
