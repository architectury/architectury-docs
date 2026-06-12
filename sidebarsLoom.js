// @ts-check

/**
 * Sidebar for the Architectury Loom docs instance.
 *
 * Pages are listed in the same order as the original docs. "Gradle Configurations"
 * lives in the Plugin instance, so it is referenced here as a cross-section link.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  loomSidebar: [
    'introduction',
    'using_neo',
    'neoforge_migration',
    'using_libraries',
    'access_transformer',
    'mixins',
    'using_mcp',
    'fg_mixin_refmaps',
    'datagen',
    'regen_run_configs',
    'debug_log_level',
    {
      type: 'link',
      label: 'Gradle Configurations',
      href: '/plugin/gradle_configurations',
    },
    'architectury_common_json',
  ],
};

export default sidebars;
