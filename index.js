updateIncludes();

const updateIncludes = () => {
  const allInclude = document.querySelectorAll("include");
  for (let i = 0; i < allInclude.length; i++) {
    const x = allInclude[i];
    const location = x.getAttribute("location");

    fetch(location)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        x.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
};

export default updateIncludes;
