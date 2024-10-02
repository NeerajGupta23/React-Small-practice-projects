

export default function AddButton(props) {

  return (
    <div>
      <button
        className="bg-blue-400 border-[3px] pb-1 px-4 text-[40px] relative -top-16 left-16 rounded-md font-medium hover:bg-blue-500"
      >
        <a href="">
          {props.children}
        </a>
      </button>
    </div>
  );
}
