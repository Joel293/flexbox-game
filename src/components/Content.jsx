import { useState } from "react";
import parse from "html-react-parser";

const Content = () => {
  const [styles, setStyles] = useState({
    direction: "row",
    align: "flex-start",
    justify: "flex-start",
    gap: "1",
    boxes: "5",
  });
  let boxArr = [];

  const { direction, align, justify, gap, boxes } = styles;

  const props = {
    flexDirection: `${direction}`,
    alignItems: align,
    justifyContent: justify,
    gap: `${gap}rem`,
  };

  const handleInputChange = (e) => {
    setStyles({
      ...styles,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setStyles({
      direction: "row",
      align: "flex-start",
      justify: "flex-start",
      gap: "1",
      boxes: "5",
    });
  };

  const generateBoxes = () => {
    for (let i = 0; i < Number(boxes); i++) {
      boxArr[i] = `<div key={${i}} className='box'>${i + 1}</div>`;
    }
  };

  generateBoxes();

  return (
    <div className="bg">
      <section className="props">
        <h3 className="props__heading">Props</h3>
        <div className="props__flex contenedor">
          <div className="props__field">
            <label className="props__label">Flex direction</label>
            <select
              className="props__select"
              name="direction"
              onChange={(e) => handleInputChange(e)}
              value={direction}
              title="direction"
            >
              <option value={"row"}>Row</option>
              <option value={"row-reverse"}>Row-Reverse</option>
              <option value={"column"}>Column</option>
              <option value={"column-reverse"}>Column-Reverse</option>
            </select>
          </div>

          <div className="props__field">
            <label className="props__label">Align items</label>
            <select
              className="props__select"
              name="align"
              onChange={(e) => handleInputChange(e)}
              value={align}
              title="align"
            >
              <option value={"flex-start"}>Flex-Start</option>
              <option value={"center"}>Center</option>
              <option value={"flex-end"}>Flex-End</option>
              <option value={"stretch"}>Stretch</option>
            </select>
          </div>

          <div className="props__field">
            <label className="props__label">Justify Content</label>
            <select
              className="props__select"
              name="justify"
              onChange={(e) => handleInputChange(e)}
              value={justify}
              title="justify"
            >
              <option value={"flex-start"}>Flex-Start</option>
              <option value={"center"}>Center</option>
              <option value={"flex-end"}>Flex-End</option>
              <option value={"space-around"}>Space-Around</option>
              <option value={"space-between"}>Space-Between</option>
              <option value={"space-evenly"}>Space-Evenly</option>
              <option value={"stretch"}>Stretch</option>
            </select>
          </div>

          <div className="props__field">
            <label className="props__label">Spacing / Gap</label>
            <input
              className="props__input"
              type="number"
              name="gap"
              value={gap}
              min={0}
              onChange={(e) => handleInputChange(e)}
              title="gap"
              placeholder="1,2..."
            />
          </div>

          <div className="props__field">
            <label className="props__label">Num boxes</label>
            <input
              className="props__input"
              type="number"
              name="boxes"
              value={boxes}
              min={0}
              max={60}
              onChange={(e) => handleInputChange(e)}
              title="num boxes"
              placeholder="num 1,2,3"
            />
          </div>

          <input
            type="button"
            className="props__button"
            value="Reset"
            onClick={handleReset}
          />
        </div>
      </section>

      <div className="content">
        <h3 className="content__heading">Flex-box</h3>
        <div style={props} className="content__flex contenedor">
          {boxArr.map((box) => parse(box))}
        </div>
      </div>
    </div>
  );
};

export default Content;
