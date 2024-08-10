import React from "react";

interface HeyProps {
  name: string;
}

export default function Hey({ name }: HeyProps): JSX.Element {
  return <div>My name, {name}!</div>;
}
