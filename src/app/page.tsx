import Main from "@/components/Main";
import { getThemeInCookie } from "./layout";

export default function Home() {
  return <Main cookieTheme={getThemeInCookie()} />;
}
