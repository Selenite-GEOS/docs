import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { loadEnv, type Plugin } from "vite";
import starlightTypeDoc, {
  createStarlightTypeDocPlugin,
  typeDocSidebarGroup,
  type StarlightTypeDocOptions,
} from "starlight-typedoc";
import {} from 'typedoc'
import { execSync } from "child_process";
import fs from "fs";
import type { StarlightPlugin } from "@astrojs/starlight/types";
const {
  SITE_ORIGIN,
  BASE_PATH = "/",
  SIMPLIFIED_URL,
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");
if (SITE_ORIGIN) console.log("SITE_ORIGIN", SITE_ORIGIN);
else
  console.warn(
    "SITE_ORIGIN is not specified. A sitemap will not be generated."
  );
console.log("BASE_PATH", BASE_PATH);
console.log("SIMPLIFIED_URL", SIMPLIFIED_URL);
const dev = import.meta.env.MODE === "development";

const [testStarlightTypeDoc, testTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [commonsStarlightTypeDoc, commonsTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [graphEditorStarlightTypeDoc, graphEditorTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();

function getRepo({ repoUrl, output }: { repoUrl: string; output: string }) {
const dir = `tmp/${output}`;
  console.log("Getting sources from", repoUrl, "into", dir);
  if (fs.existsSync(dir)) {
    execSync("git pull", { cwd: dir });
  } else
    execSync(
      `git clone ${repoUrl} ${dir}`
    );
  execSync(`cd ${dir} && bun install`);
}
function typedocRepo({
  repoUrl,
  output,
  options
}: {
  repoUrl: string;
  output: string;
  options?: Partial<StarlightTypeDocOptions>
}): StarlightPlugin {
getRepo({ repoUrl, output });
  return createStarlightTypeDocPlugin()[0]({
    entryPoints: [`tmp/${output}/src/lib`],
    tsconfig: `tmp/${output}/tsconfig.json`,
    //   watch: true,
    output: `developper/api/${output}`,
    pagination: true,
    typeDoc: {
      entryPointStrategy: "expand",
      plugin: [
        "typedoc-plugin-mdn-links",
        "typedoc-plugin-frontmatter",
        "./src/plugins/frontmatter.js",
      ],
      // entryFileName: "@selenite/commons",
      // navigation: {
      // 	excludeReferences: true,
      // },
      exclude: ["**/*.test.ts"],
      skipErrorChecking: true,
      outputFileStrategy: "modules",
      categorizeByGroup: true,
      useCodeBlocks: true,
    },
    sidebar: {
      collapsed: true,
      label: "Commons",
    },
    ...options,
  });
}
// https://astro.build/config
export default defineConfig({
  site: SITE_ORIGIN,
  base: BASE_PATH,
  integrations: [
    // {
    //   name: "get-selenite-sources",
    //   hooks: {
    //     "astro:config:setup": () => {
    //       console.log("yo");
    //       if (fs.existsSync("tmp/commons")) {
    //         execSync("git pull", { cwd: "tmp/commons" });
    //         console.log("pull");
    //       } else
    //         execSync(
    //           "git clone https://github.com/Selenite-GEOS/commons.git tmp/commons"
    //         );
    //       execSync("cd tmp/commons && bun install");
    //     },
    //   },
    // },
    starlight({
      title: "Selenite Docs",
      logo: {
        light: "@assets/selenite-logo-black.svg",
        dark: "@assets/selenite-logo-white.svg",
      },
      plugins: [
        // Generate the documentation.
        typedocRepo({
          repoUrl: "https://github.com/Selenite-GEOS/commons.git",
          output: "commons",
        }),
        typedocRepo({
          repoUrl: "https://github.com/Selenite-GEOS/graph-editor.git",
          output: "graph-editor",
          options: {
            entryPoints: ["tmp/graph-editor/src/lib/graph-editor"],
          },
        }),
        // testStarlightTypeDoc({
        //   entryPoints: ["tmp/test/src/lib"],
        //   tsconfig: "tmp/test/tsconfig.json",
        //   //   watch: true,
        //   output: "developper/api/test",
        //   pagination: true,
        //   typeDoc: {
        //     entryPointStrategy: "expand",
        //     // entryFileName: "@selenite/commons",
        //     // navigation: {
        //     // 	excludeReferences: true,
        //     // },
        //     outputFileStrategy: "modules",
        //     categorizeByGroup: true,
        //     useCodeBlocks: true,
        //   },
        //   sidebar: {
        //     collapsed: true,
        //     label: "Test",
        //   },
        // }),
      ],
      // 	< link rel = "preconnect" href = "https://fonts.googleapis.com" >
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      // 	<link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet">
      editLink: true
        ? {
            baseUrl: "https://github.com/Selenite-GEOS/docs/edit/main/",
          }
        : undefined,
      // social: {
      // 	github: 'https://github.com/withastro/starlight',
      // },
      sidebar: [
        {
          label: "General",
          autogenerate: { directory: "general" },
          translations: {
            fr: "Général",
          },
        },
        {
          label: "Simplified interface",
          autogenerate: { directory: "simplified-interface" },
          translations: {
            fr: "Interface simplifiée",
          },
        },
        {
          label: "Advanced interface",
          autogenerate: { directory: "advanced-interface" },
          translations: {
            fr: "Interface avancée",
          },
        },
        {
          label: "Developper",
          items: [
            {
              label: "Components",
              link: "/developper/components",
            },
            {
              label: "API",
              autogenerate: {
                directory: "developper/api",
              },
              collapsed: true,
            },
          ],
          collapsed: true,
          translations: {
            fr: "Développeur",
          },
        },
        // Add the generated sidebar group to the sidebar.
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        //   translations: {
        //     fr: "Référence",
        //   },
        // },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        fr: {
          label: "Français",
        },
      },
      components: {
        Head: "./src/components/starlight/Head.astro",
        SiteTitle: "./src/components/starlight/SiteTitle.astro",
      },
    }),
  ],
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
  server: {
    port: 4444,
  },
});
