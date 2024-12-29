import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
import { buttonVariants } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"
export default function ServerPage({pageName, error}:{pageName:string, error:any}) {
  return (
    <div className="flex items-center justify-center">
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>This page is&asp;t working</AlertTitle>
      <AlertDescription>
        `${process.env.WEBSITE_NAME}` is currenty unable to handle this request.
        <div className="text-3xl font-bold mt-3">HTTP ERROR: 500</div>

        <div className="mt-3">{error}</div>
      </AlertDescription>
      <div className="flex items-center justify-end mt-96">
         <Link href={`/${pageName}`} className={buttonVariants()} >Reload</Link>
      </div>
    </Alert>
    </div>
  )
}
