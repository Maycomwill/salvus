import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="flex animate-pulse items-center justify-center">
      <div className="animate-spin">
        <Loader2 />
      </div>
    </div>
  );
}

export default Loading;
