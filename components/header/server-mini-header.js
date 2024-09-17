import MiniHeader from "./mini-header";
import { getPrefLangCookie } from "@/actions/language-actions";

export default async function ServerMiniHeader() {
  const prefLangCookie = getPrefLangCookie();

  return <MiniHeader prefLangCookie={prefLangCookie} />;
}
