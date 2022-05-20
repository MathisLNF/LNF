import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", api => {
  api.modifyClass("component:topic-list-item", {
    pluginId: "discourse-air",
    expandPinned: true
  })
})
<script type="text/discourse-plugin" version="0.12.3">
    api.changeWidgetSetting('home-logo', 'href', 'figma.com')
</script>
