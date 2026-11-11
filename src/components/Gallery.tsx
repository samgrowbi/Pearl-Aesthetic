import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import { useTreatment } from "@/context/TreatmentContext";

const images = [
  gallery1,
  gallery2,
  gallery3,
];

// EMS / Body Cavitation page uses body-specific photos in place of the first two images
const EMS_IMAGES = [
  "https://pub-eb17aaa123fc4145b1ee4c15fc2e5771.r2.dev/Med%20Spa/Body/Screenshot%202026-11-11%20at%205.17.35%E2%80%AFPM.png",
  "https://pub-eb17aaa123fc4145b1ee4c15fc2e5771.r2.dev/Med%20Spa/Body/Screenshot%202026-11-11%20at%205.18.30%E2%80%AFPM.png",
  gallery3,
];

export function Gallery() {
  const treatment = useTreatment();
  const slug = treatment?.slug ?? "";
  const isBody = slug.includes("ems") || slug.includes("body");
  const galleryImages = isBody ? EMS_IMAGES : images;

  return (
    <section className="py-4 md:py-6 bg-white" dir="ltr">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <img
              key={`gallery-${i}`}
              src={src}
              alt="Our spa"
              loading="lazy"
              className="w-full h-40 md:h-56 lg:h-64 rounded-xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
