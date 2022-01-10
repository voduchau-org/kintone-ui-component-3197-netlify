import "./index.ts";
import { html } from "lit-html";

export default {
  title: "base/error/desktop",
  argTypes: {}
};
const Template = args => {
  return html`
    <kuc-base-error .guid="${args.guid}" .text="${args.value}"></kuc-base-error>
  `;
};

export const Base = Template.bind({});
Base.args = {
  guid: "baseerror-id",
  value: "Error occured!"
};
