import AuthLayout from "../layouts/AuthLayout";
import GitHubButton from "../components/GitHubButton";
import Head from "next/head";

const Login = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Login • ReqLog</title>
      </Head>
      <GitHubButton
        action={() => {
          window.open(`api/auth/github`, "_self");
        }}
      />
    </AuthLayout>
  );
};

export default Login;
