import React from "react";
import ReactDOM from "react-dom";
const image = "https://picsum.photos/200";
const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black",
};
customStyle.color = "orange";
{
  /*We can change the style of a JSX element on fly by this way */
}
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <h2 style={{ color: "pink" }}> I love noodles</h2> {/*Inline styling -->*/}
    <h3 style={customStyle}> I like all types of noodles</h3>
    {/*Inline styling  is used to update the syle of a react element on fly -->*/}
    <div>
      <img
        className="imgcls"
        src="https://imgs.search.brave.com/lhmD1aLumGTekv8aqk4aQsU1oXzMWCx2cPL3vvX0dxg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzg2LzUyLzc2/LzM2MF9GXzU4NjUy/NzY3Ml9vNWJJZWY2/V1FQRlRvdmJUbFo3/eWhqYjZBVjBNMGlT/Ry5qcGc"
        alt="noodle"
      />
      {/* In jsx image tag should be closed*/}
      <img
        className="imgcls"
        src="https://imgs.search.brave.com/c_5buIbCiKt6kgMYwmuLyPORqtRmZ1cxTFWZvxVtOaA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/NzgwMTI4L3Bob3Rv/L3JhbWVuLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz04NzBU/bk40U1kzYkpxSU5D/R0ktN3g1OXNyMGJO/RGg5bnZYZkRTbTEz/U05BPQ"
        alt="noodle"
      />
      <img
        className="imgcls"
        src="https://imgs.search.brave.com/o-FoOVZegEX-pW5bFhTa_So67U5E-DlyIFJtv5S82_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2Lzc5LzA4LzUz/LzM2MF9GXzY3OTA4/NTM4M19JbVVMcGE3/OGdVSW13UlJva21H/bHdldnFFTVdWakVs/cS5qcGc"
        alt="noodle"
      />
    </div>
    <div>
      <img src={image + "?grayscale"} alt="noodle" />
      {/*Here we use javascript to set the attribute */}
    </div>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
