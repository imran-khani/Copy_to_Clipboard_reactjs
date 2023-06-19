import { useState, useEffect } from "react";

const useCopyToClipboard = () => {
  const [isCopied, setCopied] = useState("");
  const [showCopied, setShow] = useState(false);

  useEffect(() => {
    let timer;

    if (isCopied) {
      timer = setTimeout(() => {
        setShow(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isCopied, showCopied]);

  const handleCopy = async () => {
    const trimmedValue = isCopied.trim();
    try {
      trimmedValue && (await navigator.clipboard.writeText(isCopied));
      setShow(true);
    } catch (error) {
      console.log(error);
      setShow(false);
    }
  };

  const handlePasted = async () => {
    try {
      const getValue = await navigator.clipboard.readText();
      if (!getValue) {
        setCopied(
          "There is no items in clipboard to paste here. first copy something and then try pasting it here"
        );
      }
      setCopied((a) => a + " " + getValue);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleCopy,
    isCopied,
    setCopied,
    showCopied,
    handlePasted,
  };
};

export default useCopyToClipboard;
