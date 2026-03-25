import { redirect } from "next/navigation";

/** Ancienne URL — préférer `/all-projects`. */
export default function AllProjectAliasPage() {
  redirect("/all-projects");
}
