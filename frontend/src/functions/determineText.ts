const determineText = (mode: string | null) => {
  if (mode === "edit") return "Review Plan";
  return "Next Step"
};

export default determineText;