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

  const promises = Array.from(allInclude).map(async (x) => {
    const location = x.getAttribute("location");
    try {
      const data = await fetchContent(location);
      x.innerHTML = data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  await Promise.all(promises);
};

updateIncludes();

export default updateIncludes;