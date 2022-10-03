import React from 'react';
import {ColumnAdd,RowAdd} from './GridContext';

export default function Task({ ...args }) {
  console.log(`change :  ${args.color} ${args["border-thinkness"]} ${args["border-color"]}`);

  //헤더 색상 변경
  document.querySelectorAll("th").forEach(p => p.style.background = args.color);

  //border 조절
  document.querySelectorAll("th, tr, td").forEach(p =>
     p.style["border"] = `${args["border-thinkness"]}px solid ${args["border-color"]}`);

  return (
    <div>
      <table class="tg">
        <thead>
          <tr>
            {ColumnAdd(["Index", "이름","희망 분야"])}
          </tr>
        </thead>
        <tbody>
          {RowAdd([0, "어피치","풀스택"])}
          {RowAdd([1, "라이언","프론트앤드"])}
          {RowAdd([2, "무지","백앤드"])}
        </tbody>
      </table>
    </div>
  );
}