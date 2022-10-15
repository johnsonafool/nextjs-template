import { useState } from "react";
import Hey from "./subtitle";

export default function Title() {
  const [title, setTile] = useState<String>("Hello");
  return (
    <h1>
      {title}
      <Hey></Hey>
    </h1>
  );
}

export enum TitleEnum {
  wow = 1,
}
