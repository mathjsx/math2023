import React, { useState } from "react";
import { MathJax } from "better-react-mathjax";
import { range, zeros } from "./util.js";

// Matrix function
export const Matrix = (elems, nrow, ncol = 1, name, editable = true) => {
  const _nrow = nrow;
  const _ncol = ncol;
  const [_elems, setElems] = useState([
    ...elems,
    ...zeros(Math.max(nrow * ncol - elems.length))
  ]);
  const _row = (i) => _elems.slice(i * _ncol, (i + 1) * _ncol);
  const _elem = (i, j) => _elems[j + i * _ncol];
  const _col = (i) => range(nrow).reduce((p, j) => [...p, _elem(j, i)], []);
  const _name = name;
  const _texElems = "\\[".concat(
    (_name ? `${_name}=` : "matrix =").concat(
      `\\left(\\begin{array}{${Array(_ncol).fill("c").join("")}}`.concat(
        range(_nrow)
          .map((i) =>
            range(_ncol)
              .map((j) => _elem(i, j))
              .join("&&")
          )
          .join("\\\\")
          .concat("\\end{array}\\right)\\]")
      )
    )
  );
  const [editing, setEditing] = useState(false);
  const handleClick = () => {
    if (!editable) return;
    setEditing(!editing);
  };
  const handleChange = (i, j, e) => {
    setElems([
      ..._elems.slice(0, j + i * _ncol),
      e,
      ..._elems.slice(j + i * _ncol + 1)
    ]);
  };
  return {
    elems: _elems,
    elem: _elem,
    nrow: _nrow,
    ncol: _ncol,
    row: _row,
    col: _col,
    rows: range(_nrow).map((i) => _row(i)),
    cols: range(_ncol).map((i) => _col(i)),
    name: _name,
    disp: editing ? (
      <div className="matrix-edit">
        <div onClick={handleClick}>{_name}=</div>
        {range(_ncol).map((i) => (
          <div className="matrix-row">
            {_col(i).map((v, j) => (
              <div className="matrix-cell">
                <input
                  value={v}
                  maxlength="4"
                  onChange={(e) => handleChange(j, i, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    ) : (
      <div onClick={handleClick}>
        <MathJax>{_texElems}</MathJax>
      </div>
    )
  };
};

// element wise product of 2 arrays (vectors)
export const prod = (a, b) => {
  if (a.length !== b.length) return undefined;
  return a.map((e, i) => e * b[i]);
};

// sum of 1 array (vector)
export const sum = (a) => a?.reduce((p, e) => p + e, 0);

// inner product of 2 arrays (vectors)
export const sumProd = (a, b) => sum(prod(a, b));

// inner product of 2 Matrix
export const mult = (a, b) => {
  if (a.ncol !== b.nrow) return undefined;
  return Matrix(
    range(a.nrow).reduce(
      (p, i) => [
        ...p,
        ...range(b.ncol).reduce(
          (q, j) => [...q, sumProd(a.row(i), b.col(j))],
          []
        )
      ],
      []
    ),
    a.nrow,
    b.ncol,
    a.name.concat(b.name),
    false
  );
};
