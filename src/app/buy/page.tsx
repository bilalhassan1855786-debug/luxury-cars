// src/app/buy/page.tsx

import { Suspense } from "react";
import BuyClient from "../buy/BuyClient";

export default function BuyPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <BuyClient />
    </Suspense>
  );
}