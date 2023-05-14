import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function Guest() {
  const [guest, setGuest] = useState(1);

  return (
    <div>
      <button>
        <Plus
          onClick={() => setGuest((prev) => prev + 1)}
          className="h-5 w-5"
        />
      </button>
      <span>{guest}</span>
      <button onClick={() => setGuest((prev) => (prev > 1 ? prev - 1 : prev))}>
        <Minus className="h-5 w-5" />
      </button>
    </div>
  );
}

export default Guest;
