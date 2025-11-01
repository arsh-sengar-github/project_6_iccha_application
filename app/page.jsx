import Search from "@/components/custom/search";
import { Lightbulb, Funnel, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 w-screen h-screen flex flex-col gap-4 md:p-32 md:gap-16">
      <div>
        <h1 className="capitalize text-4xl text-center font-bold">Namer</h1>
        <p className="text-lg text-gray-500 text-center font-semibold">
          Name your ideas, with the blessing of Iccha.
        </p>
        <Search />
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-8">
        <div>
          <Lightbulb className="text-primary" size={25} />
          <h2 className="text-lg font-semibold">Get Names</h2>
          <p className="text-sm text-gray-500">
            Let Iccha breathe life into your imagination. Share your thoughts,
            themes, or ambitions, and watch as unique names take shape — each
            reflecting your idea’s essence. Whether you seek something bold,
            serene, or timeless, Iccha helps you discover words that belong to
            your vision.
          </p>
        </div>
        <div>
          <Funnel className="text-primary" size={25} />
          <h2 className="text-lg font-semibold">Purify Names</h2>
          <p className="text-sm text-gray-500">
            Refine what resonates. Iccha helps you sort through your ideas — by
            tone, length, meaning, or availability — so only the names that
            truly capture your intent remain. It’s not about quantity, but
            clarity — finding the one that feels unmistakably right.
          </p>
        </div>
        <div>
          <Heart className="text-primary" size={25} />
          <h2 className="text-lg font-semibold">Love Names</h2>
          <p className="text-sm text-gray-500">
            Keep what speaks to your heart. Save your favorite names, revisit
            them later, and build your brand identity at your own pace. With
            Iccha, every idea you cherish stays close — waiting for the perfect
            moment to become real.
          </p>
        </div>
      </div>
    </div>
  );
}
