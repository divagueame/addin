export default function ({ route, redirect }) {
  console.log("route!");
  console.log(route);
  console.log("redit");
  console.log(redirect);
  if (route.path === "/index.html") {
    // return redirect("/");
    window.location.href = "/addin";
  }
  if (route.path === "/meow") {
    console.log("omeooww!");
    window.location.href = "/addin";
    // redirect(301, "/");
    console.log("after meow!");
  }
}
