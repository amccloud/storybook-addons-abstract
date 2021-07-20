import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID, PANEL_ID, PARAM_KEY } from "./constants";
import { Panel } from "./panel";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    title: "Abstract",
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Panel />
      </AddonPanel>
    ),
    paramKey: PARAM_KEY
  });
});
