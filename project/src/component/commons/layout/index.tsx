import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Header from "./header";


const BodyWrapper = styled.div``;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHidden =
    router.asPath.includes("log_in") ||
    router.asPath.includes("new") ||
    router.asPath.includes("edit") ||
    router.asPath.includes("sign_up");

  return (
    <>
    <Header/>
      <BodyWrapper>
        <div>{props.children}</div>
      </BodyWrapper>
    </>
  );
}
