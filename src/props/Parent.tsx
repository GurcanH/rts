import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => {
        console.log("clicked");
      }}
    >
      edede
    </ChildAsFC>
  );
};

export default Parent;
