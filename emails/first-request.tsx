import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Head } from "@react-email/head";
import { Font } from "@react-email/font";

export default function FirstRequest({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  return (
    <Html>
      <Text
        style={{
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {name} first request!🎉
      </Text>

      <Text>
        Congrats on logging your first request for your project <b>{name}</b> to
        LogDrop!
      </Text>
      <Text>
        You can now explore the{" "}
        <a href={`https://logdrop.co/${slug}/overview`}>dashboard</a> and
        visualize your data.
      </Text>
      <br />

      <Text>
        Cheers,
        <br />
        Akinkunmi
      </Text>
    </Html>
  );
}
