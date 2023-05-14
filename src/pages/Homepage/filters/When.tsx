import { useState } from "react";
import { DateRangePicker } from "react-date-range";

function When({ range, handleChange }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen((prev) => !prev)}>
        When
      </button>

      {open && (
        <DateRangePicker
          moveRangeOnFirstSelection={false}
          onChange={handleChange}
          ranges={range}
        />
      )}
    </div>
  );
}

export default When;
