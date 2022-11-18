const features = [
  { name: "Origin", description: "Anscare, Inc." },
  {
    name: "Material",
    description: "100% Chitosan non-woven",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  {
    name: "Benefits",
    description:
      "100% Chitosan non-woven Excellent effect on rapid hemorrhage control, High absorption rate, more than 14 times , Provides a moist surrounding for wound care"
  },
  { name: "Includes", description: "Flexible and conformable to tissue surfaces, Excellent biocompatibility, Antibacterial, Easy to remove" },
  {
    name: "Application",
    description:
      "EMS, Wilderness rescue, Industrial and Occupational safety, Sports, Personal and Home care. For use as a temporary external dressing to control moderate to severe bleeding and manage external abrasions, lacerationns",
  },
];

export default function ProductFeatures() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Descriptive Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            Anscare ChitoClot Gauze is composed of 100% chitosan non-woven. Its
            hemostatic performance is significantly more effective compared to
            other commercial products impregnated or coated with hemostatic
            agents. ChitoClot Gauze maintains its structural integrity even
            after blood absorption, and is designed specifically for battlefield
            and emergency medical professionals for quick control of severe
            hemorrhage. ChitoClot Gauze also provides a moist [WL1] surrounding
            for wound care purposes."
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-6">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://www.anscare.com/uploads/images/products/Hemostasis/products_hemorrhagemanagement_gauze_4.jpg.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://www.anscare.com/uploads/images/products/Hemostasis/products_hemorrhagemanagement_gauze_5.jpg.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://www.anscare.com/uploads/images/products/Hemostasis/products_hemorrhagemanagement_gauze_6.jpg.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://www.anscare.com/uploads/images/products/Hemostasis/products_hemorrhagemanagement_gauze_7.jpg.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://www.anscare.com/uploads/images/products/Hemostasis/products_hemorrhagemanagement_gauze_8.jpg.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://www.anscare.com/uploads/images/products/Hemostasis/products_hemorrhagemanagement_gauze_9.jpg.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
