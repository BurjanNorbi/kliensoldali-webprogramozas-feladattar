import { useDispatch, useSelector } from "react-redux";
import { COLORS, fillCell, selectSolutionObject, selectTable } from "../../state/nonogramSlice";
import { useGetPuzzlesQuery } from "../../state/puzzlesApiSlice";

export const GraphiLogics = () => {
  const { leftNumbers, upperNumbers } = useSelector(selectSolutionObject);
  const table = useSelector(selectTable);
  const dispatch = useDispatch();

  const data = useGetPuzzlesQuery();

  console.log(data);

  const handleLeftClick = (row, column, currentColor) => {
    dispatch(
      fillCell({
        row,
        column,
        color:
          currentColor === COLORS.WHITE ? COLORS.BLACK : currentColor === COLORS.BLACK ? COLORS.WHITE : currentColor,
      })
    );
  };

  const handleRightClick = (e, row, column, currentColor) => {
    e.preventDefault();
    dispatch(
      fillCell({
        row,
        column,
        color: currentColor === COLORS.GRAY ? COLORS.WHITE : currentColor === COLORS.WHITE ? COLORS.GRAY : currentColor,
      })
    );
  };

  if (table.length === 0) {
    return <p>Game is loading...</p>;
  }

  return (
    <table id="layout">
      <tbody>
        <tr>
          <td></td>
          <td>
            <table id="felso">
              <tbody>
                <tr>
                  {upperNumbers.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table id="bal">
              <tbody>
                {leftNumbers.map((row, i) => (
                  <tr key={i}>
                    {row.map((color, j) => (
                      <td key={j}>{color}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
          <td>
            <table id="tabla">
              <tbody>
                {table.map((row, i) => (
                  <tr key={i}>
                    {row.map((color, j) => (
                      <td
                        onClick={() => handleLeftClick(i, j, color)}
                        onContextMenu={(e) => handleRightClick(e, i, j, color)}
                        key={j}
                        className={
                          color === COLORS.WHITE
                            ? "feher"
                            : color === COLORS.GRAY
                            ? "szurke"
                            : color === COLORS.BLACK
                            ? "fekete"
                            : "feher"
                        }
                      ></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
