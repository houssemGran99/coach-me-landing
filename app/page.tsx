import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

const TITLE = "Coach Me – Votre séance d'entraînement en 30 secondes";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Coach Me aide les entraîneurs de football de Tunisie à préparer une séance chronométrée à partir d'exercices relus, à les visionner en animation et à les partager par lien.",
  openGraph: {
    title: TITLE,
    description: "Des exercices animés, une séance chronométrée, un lien à partager. Pour les entraîneurs d'académies de football.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function Home() {
  return <Landing />;
}
