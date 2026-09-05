
import RFQForm from "@/components/forms/RFQForm"
export const metadata={ title: "Request a Quote - RFQ" }
export default function Page(){
  return (
    <div className="mx-auto max-w-[900px] px-6 py-12">
      <h1 className="text-4xl font-bold">Request a Quote - B2B RFQ</h1>
      <div className="mt-10"><RFQForm/></div>
    </div>
  )
}
