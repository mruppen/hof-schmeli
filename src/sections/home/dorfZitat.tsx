import preact from "preact";
import PlainTeaser from "../../components/plainTeaser";

export default function DorfZitat(): preact.VNode {
  return (
    <PlainTeaser links={[{ to: "/gemeinschaft", label: "Ich möchte helfen" }]}>
      «Um ein Kind grosszuziehen braucht es ein ganzes Dorf»
    </PlainTeaser>
  );
}
