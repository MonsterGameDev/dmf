import "./home-page.scss";

if (process.env.NODE_ENV === "production") {
  console.log("We are in prod build");
} else if (process.env.NODE_ENV === "development") {
  console.log("We are in dev build");
}
