import React, { useRef } from "react";

function CreateArea(props) {
  const inputTitle = useRef(null);
  const inputContent = useRef(null);

  return (
    <div>
      <form>
        <input name="title" type="text" placeholder="Title" ref={inputTitle} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          ref={inputContent}
        />
        <button
          onClick={(e) => {
            props.onAdd({
              title: inputTitle.current.value,
              content: inputContent.current.value
            });
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
