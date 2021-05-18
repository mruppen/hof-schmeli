import PlainTeaser from "components/plainTeaser";
import preact from "preact";

export default function DorfZitat(): preact.VNode {
  return (
    <PlainTeaser links={[{ to: "/gemeinschaft", label: "Ich möchte helfen" }]}>
      «Um ein Kind grosszuziehen braucht es ein ganzes Dorf»
    </PlainTeaser>
  );
}
