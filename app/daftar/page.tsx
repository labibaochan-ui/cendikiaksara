import { redirect } from "next/navigation";
import { links } from "@/lib/links";

export default function RegisterPage() {
  redirect(links.jotform);
}
