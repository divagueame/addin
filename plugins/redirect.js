export default function ({ route, redirect }) {
  console.log("route!");
  console.log(route);
  console.log("redit");
  console.log(redirect);
  if (route.path === "/index.html") {
    // return redirect("/");
    window.location.href = "/";
  }
  if (route.path === "/meow") {
    console.log("omeooww!");
    window.location.href = "/";
    // redirect(301, "/");
    console.log("after meow!");
  }
}
