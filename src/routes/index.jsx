import { createFileRoute } from "@tanstack/react-router";
import Form from "../Form";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Form />;
}
