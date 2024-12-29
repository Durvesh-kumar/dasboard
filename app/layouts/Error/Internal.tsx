import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function InternalError() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Website Error: 500 Internal Server Error</AlertTitle>
        <AlertDescription>
          Somthing went wrong! please try agian.
        </AlertDescription>
        <div className="flex items-center mt-28 justify-end">
          <Link
            href={`${process.env.RELOAD_WEBSITE}`}
            className={buttonVariants()}
          >
            <ArrowLeft /> Reload
          </Link>
        </div>
      </Alert>
    </div>
  );
}
