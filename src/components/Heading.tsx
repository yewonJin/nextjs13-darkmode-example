import { Theme } from "@/hooks/useTheme";

type Props = {
  theme: Theme;
};

export default function Heading(props: Props) {
  const { theme } = props;

  // 쿠키가 있고 클라이언트 컴포넌트이 렌더링 되기 전
  if (!theme) return <h2></h2>;

  return <h2>{theme === "dark" ? "다크 모드" : "라이트 모드"}</h2>;
}
