console.log("middlware redir");
export default function ({ route, redirect }) {
  console.log("see");
  console.log(route.path);
  if (route.path === "/index.html") {
    return redirect("/");
  }
}
