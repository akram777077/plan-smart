const detectNextRoute = (currentParam: string) => {
  switch(currentParam) {
    case "goal": return "/new-plan/time"
    case "time": return "/new-plan/subject"
    case "subject": return "/new-plan/pinpoint"
    case "pinpoint": return "/new-plan/review"
    default: return "/new-plan/goal";
  };
};

export default detectNextRoute;