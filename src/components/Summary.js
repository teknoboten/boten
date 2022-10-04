import React from "react";
import { summary } from "../rzm";

export default function Summary() {

  return (
    <div className="section">
    <h1>Summary</h1>
    {summary.map((p, index) => <p key={index+1}>{p}</p>)}
    </div>
  )
}