import { useState } from 'react';
import { Data } from './data';

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  // const [isQuestionSelect, setIsQuestionSelect] = useState(false);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  function handleMultiSelection(getCurrentId) {
    let copyMutiple = [...multiple];
    const findIndexOfCurrentId = copyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMutiple.push(getCurrentId);
    else copyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMutiple);
  }

  console.log(selected, multiple);

  return (
    <div className="flex flex-col items-center justify-center gap-[50px] w-[600px]">
      <button
        className="bg-orange-800 px-[10px] rounded-[8px] py-[5px] text-[18px]"
        onClick={() => setEnableMultiSelection((prev) => !prev)}
      >
        {enableMultiSelection
          ? 'Disable MultiSelection'
          : 'Enable MultiSelection'}
      </button>
      <div className="flex flex-col gap-[10px]">
        {Data && Data.length > 0 ? (
          Data.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                className="flex justify-between items-center gap-[50px] bg-orange-800 py-[10px] px-[20px] cursor-pointer"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3 className="text-[18px]">{dataItem.question}</h3>

                <span className="font-bold text-[24px]">+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="bg-black py-[10px] px-[20px] text-[16px]">
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}

{
  /* <div key={dataItem.id}>
  <div
    className="flex justify-between items-center gap-[50px] bg-orange-800 py-[10px] px-[20px] cursor-pointer"
    onClick={() => {
      handleSingleSelection(dataItem.id);
      setIsQuestionSelect((prevState) => !prevState);
    }}
  >
    <h3 className="text-[18px]">{dataItem.question}</h3>
    {isQuestionSelect ? (
      <span className="font-bold text-[24px]">-</span>
    ) : (
      <span className="font-bold text-[24px]">+</span>
    )}
  </div>
</div>; */
}
