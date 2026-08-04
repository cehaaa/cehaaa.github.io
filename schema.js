const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christian Gouw",
  jobTitle: "Frontend Engineer",
  email: "mailto:christiangouw168@gmail.com",
  worksFor: {
    "@type": "Organization",
    name: "Tech In Asia",
    url: "https://techinasia.com",
  },
  sameAs: [
    "https://github.com/cehaaa",
    "https://linkedin.com/in/christianchristiann",
  ],
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(schema);
document.head.appendChild(script);
