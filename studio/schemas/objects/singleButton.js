export default {
  name: "singleButton",
  type: "object",
  title: "Single button",
  fields: [
    {
      name: "singleButtonText",
      type: "string",
      title: "Button text",
      initialValue: "Make a referral",
    },
    {
      name: "target",
      type: "reference",
      title: "Target",
      validation: (Rule) => Rule.required(),
      to: [{ type: "page" }],
    },
  ],
};
