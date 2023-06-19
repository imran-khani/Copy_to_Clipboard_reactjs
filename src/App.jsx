import "./App.css";

import useCopyToClipboard from "./lib/useCopyToClipboard";

const App = () => {
  const { handleCopy, isCopied, setCopied, showCopied, handlePasted } =
    useCopyToClipboard();

  return (
    <div className="flex flex-col h-screen mx-auto justify-center items-center gap-5">
      <h1>React Copy To Clipboard and Paste to Textarea App</h1>
      <textarea
        name="textarea"
        cols="80"
        rows="10"
        className={`border-gray-300 border resize-none focus-within:outline-none ${
          showCopied && "border-indigo-500"
        } p-3 `}
        value={isCopied}
        onChange={(e) => setCopied(e.target.value)}
        onPaste={(e) => {
          e.preventDefault();
          handlePasted();
        }}
      />

      <div className="flex gap-5">
        <button
          className="bg-indigo-500 text-white rounded px-3 py-2"
          onClick={handleCopy}
        >
          {showCopied ? "Copied" : "Copy"}
        </button>

        <button
          className="bg-indigo-500 text-white rounded px-3 py-2"
          onClick={handlePasted}
        >
          Paste
        </button>
      </div>
    </div>
  );
};

export default App;
