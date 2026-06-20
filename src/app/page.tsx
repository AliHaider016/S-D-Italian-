import { Suspense } from "react";
import { HeroSection } from "./components/HeroSection";
import {
  FeaturedSelection,
  FeaturedCategories,
} from "./components/FeaturedSelection";

import { FocusBanner } from "./components/FocusBanner";
import { CollectionShowcase } from "./components/CollectionShowcase";
import { FW26Banner } from "./components/FW26Banner";
import { StorySection } from "./components/StorySection";
import { MustHaveSection } from "./components/MustHaveSection";
import { ArchiveSection } from "./components/ArchiveSection";
import { getProducts, getCollection } from "@/lib/shopify/client";

export default async function Home() {
  const products = await getProducts(16);
  const mainSs26 = await getCollection("main-ss26");
  const travelSs26 = await getCollection("travel-capsule-ss26");

  return (
    <div>
      {/* Hero Banner */}
      <HeroSection />

      {/* New In - Featured Selection with Tabs */}
      <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
        <FeaturedSelection
          mainSs26Products={mainSs26?.products || []}
          travelSs26Products={travelSs26?.products || []}
        />
      </Suspense>

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Focus Collections - Two pics side by side */}
      <CollectionShowcase />

      {/* Travel Capsule FW26 Banner */}
      <FW26Banner />

      {/* Focus Category - Travel Capsule FW26 */}
      <FocusBanner
        image="https://8pm.it/cdn/shop/files/Progetto_senza_titolo_-_2026-05-27T103438.806.png?v=1779870892&width=2000"
        title="Travel Capsule FW26"
        linkText="Travel Capsule FW26"
        href="/collections/travel-capsule-fw26"
        reversed
      />

      {/* Our Story */}
      <StorySection />

      {/* Must Have */}
      <MustHaveSection />

      {/* Archive / Sale Section */}
      <ArchiveSection products={products} />
    </div>
  );
}
