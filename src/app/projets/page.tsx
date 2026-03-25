import { redirect } from "next/navigation";

/** La liste « tous les projets » (maquette Figma) vit sur `/all-projects`. */
export default function ProjetsIndexPage() {
  redirect("/all-projects");
}
