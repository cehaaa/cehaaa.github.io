const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Reff",
  description:
    "A tiny macOS menu bar app that shows time-synced Spotify lyrics on your MacBook Touch Bar.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "macOS 12 or later",
  softwareVersion: "1.0",
  url: "https://cehaaa.github.io/reff/",
  downloadUrl: "https://cehaaa.github.io/reff/Reff-1.0.dmg",
  fileSize: "306 KB",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Christian Gouw",
    url: "https://cehaaa.github.io/",
  },
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schema);
document.head.appendChild(script);
