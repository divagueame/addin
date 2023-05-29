console.log("Carga office plugin");

export default ({ app }) => {
  if (process.client) {
    const script = document.createElement("script");
    script.src = "https://appsforoffice.microsoft.com/lib/1/hosted/office.js";
    script.async = false;
    document.head.appendChild(script);
  }
};

