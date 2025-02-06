"use strict";

const updateIncludes = async () => {
  const allInclude = document.querySelectorAll("include");
  const cache = new Map();

  const fetchContent = async (location) => {
    if (cache.has(location)) {
      return cache.get(location);
    }
    const response = await fetch(location);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.text();
    cache.set(location, data);
    return data;
  };

  const promises = Array.from(allInclude).map(async (element) => {
    const location = element.getAttribute("location");
    const args = JSON.parse(element.getAttribute("args") || "{}");
    try {
      let data = await fetchContent(location);
      for (const key in args) {
        data = data.replaceAll(`*${key}`, args[key]);
      }
      element.innerHTML = data;
      const scripts = element.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        document.head.appendChild(newScript).parentNode.removeChild(newScript);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  await Promise.all(promises);
};

updateIncludes();

export default updateIncludes;