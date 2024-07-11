import { Loader2 } from "lucide-react";

function Loading() {
  return (
    <div className="animate-pulse flex items-center justify-center">
      <div className="animate-spin">
        <Loader2 />
      </div>
    </div>
  );
}

export default Loading;
