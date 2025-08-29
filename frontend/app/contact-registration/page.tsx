import { ConvergenceLayout } from "@/components/convergence-layout"
import { ContactRegistration } from "@/components/contact-registration"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function ContactManagementPage() {
  const cookieStore = await cookies() // await the Promise
  const token = cookieStore.get("token")?.value // now get() works

  if (!token) {
    redirect("/login") // server-side redirect
  }


  return (
    <ConvergenceLayout>
      <ContactRegistration />
    </ConvergenceLayout>
  )
}
