const determineText = (mode: string | null) => {
  if (mode === "edit") return "Build Your Plan";
  return "Next Step"
};

export default determineText;