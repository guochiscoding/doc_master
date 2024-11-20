// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.12_sass@1.77.8/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import UnoCSS from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/unocss@0.60.4_postcss@8.4.40_rollup@4.19.1_vite@5.3.5_@types+node@20.14.12_sass@1.77.8_/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/unplugin-auto-import@0.17.8_@nuxt+kit@3.13.2_rollup@4.19.1_webpack-sources@3.2.3__@vueuse+cor_ayifbzaukv5evprnhfj7yvkjui/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.6_@nuxt+kit@3.13.2_rollup@4.19.1_webpack-so_fctp7nehnqaaxoylti3333l5m4/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.6_@nuxt+kit@3.13.2_rollup@4.19.1_webpack-so_fctp7nehnqaaxoylti3333l5m4/node_modules/unplugin-vue-components/dist/resolvers.js";
import { createSvgIconsPlugin } from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.3.5_@types+node@20.14.12_sass@1.77.8_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import path from "path";
import { viteMockServe } from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/vite-plugin-mock@3.0.2_esbuild@0.21.5_mockjs@1.1.0_vite@5.3.5_@types+node@20.14.12_sass@1.77.8_/node_modules/vite-plugin-mock/dist/index.mjs";
import vue from "file:///C:/Users/lenovo/Desktop/xjy-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.1.1_vite@5.3.5_@types+node@20.14.12_sass@1.77.8__vue@3.4.34_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/lenovo/Desktop/xjy-admin/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: "./",
    server: {
      port: 9e3
      //自定义端口
    },
    plugins: [
      vue(),
      UnoCSS(),
      // ...
      AutoImport({
        resolvers: [
          ElementPlusResolver()
          // 自动导入图标组件
        ]
      }),
      //mock
      viteMockServe({
        mockPath: "./src/mock"
        // localEnabled: true,
      }),
      // 主题定制
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
        // 指定自定义组件位置(默认:src/components)自动注册全局组件
        dirs: [
          "src/components/ElementPlus_components/",
          "src/components/",
          "src/**/components"
        ],
        // 生成components.d.ts
        dts: false,
        deep: true
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/svgs")],
        symbolId: "icon-[dir]-[name]"
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    //主题定制(主题覆盖)
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          // 自动导入定制化样式文件进行样式覆盖
          additionalData: `  
          @use "@/styles/element/index.scss" as *;
           @use "@/config/public.scss" as *;
          `
        }
      }
    }
    //配置代理跨域
    // server: {
    //   proxy: {
    //     [env.VITE_BASE_URL]: {
    //       target: env.VITE_URL,
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },
    //   }
    // }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW5vdm9cXFxcRGVza3RvcFxcXFx4anktYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXHhqeS1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbGVub3ZvL0Rlc2t0b3AveGp5LWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIlxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCJcbmltcG9ydCBVbm9DU1MgZnJvbSBcInVub2Nzcy92aXRlXCJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiXG5pbXBvcnQgeyB2aXRlTW9ja1NlcnZlIH0gZnJvbSBcInZpdGUtcGx1Z2luLW1vY2tcIlxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIC8vXHU2MkZGXHU1MjMwXHU5MTREXHU3RjZFXHU3Njg0XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcbiAgcmV0dXJuIHtcbiAgICBiYXNlOiBcIi4vXCIsXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiA5MDAwLCAvL1x1ODFFQVx1NUI5QVx1NEU0OVx1N0FFRlx1NTNFM1xuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBVbm9DU1MoKSxcbiAgICAgIC8vIC4uLlxuICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSwgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIC8vbW9ja1xuICAgICAgdml0ZU1vY2tTZXJ2ZSh7XG4gICAgICAgIG1vY2tQYXRoOiBcIi4vc3JjL21vY2tcIixcbiAgICAgICAgLy8gbG9jYWxFbmFibGVkOiB0cnVlLFxuICAgICAgfSksXG4gICAgICAvLyBcdTRFM0JcdTk4OThcdTVCOUFcdTUyMzZcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKHsgaW1wb3J0U3R5bGU6IFwic2Fzc1wiIH0pXSxcbiAgICAgICAgLy8gXHU2MzA3XHU1QjlBXHU4MUVBXHU1QjlBXHU0RTQ5XHU3RUM0XHU0RUY2XHU0RjREXHU3RjZFKFx1OUVEOFx1OEJBNDpzcmMvY29tcG9uZW50cylcdTgxRUFcdTUyQThcdTZDRThcdTUxOENcdTUxNjhcdTVDNDBcdTdFQzRcdTRFRjZcbiAgICAgICAgZGlyczogW1xuICAgICAgICAgIFwic3JjL2NvbXBvbmVudHMvRWxlbWVudFBsdXNfY29tcG9uZW50cy9cIixcbiAgICAgICAgICBcInNyYy9jb21wb25lbnRzL1wiLFxuICAgICAgICAgIFwic3JjLyoqL2NvbXBvbmVudHNcIixcbiAgICAgICAgXSxcbiAgICAgICAgLy8gXHU3NTFGXHU2MjEwY29tcG9uZW50cy5kLnRzXG4gICAgICAgIGR0czogZmFsc2UsXG4gICAgICAgIGRlZXA6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgICAgaWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJzcmMvYXNzZXRzL3N2Z3NcIildLFxuICAgICAgICBzeW1ib2xJZDogXCJpY29uLVtkaXJdLVtuYW1lXVwiLFxuICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy9cdTRFM0JcdTk4OThcdTVCOUFcdTUyMzYoXHU0RTNCXHU5ODk4XHU4OTg2XHU3NkQ2KVxuICAgIGNzczoge1xuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICBzY3NzOiB7XG4gICAgICAgICAgamF2YXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU1QjlBXHU1MjM2XHU1MzE2XHU2ODM3XHU1RjBGXHU2NTg3XHU0RUY2XHU4RkRCXHU4ODRDXHU2ODM3XHU1RjBGXHU4OTg2XHU3NkQ2XG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGAgIFxuICAgICAgICAgIEB1c2UgXCJAL3N0eWxlcy9lbGVtZW50L2luZGV4LnNjc3NcIiBhcyAqO1xuICAgICAgICAgICBAdXNlIFwiQC9jb25maWcvcHVibGljLnNjc3NcIiBhcyAqO1xuICAgICAgICAgIGAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy9cdTkxNERcdTdGNkVcdTRFRTNcdTc0MDZcdThERThcdTU3REZcbiAgICAvLyBzZXJ2ZXI6IHtcbiAgICAvLyAgIHByb3h5OiB7XG4gICAgLy8gICAgIFtlbnYuVklURV9CQVNFX1VSTF06IHtcbiAgICAvLyAgICAgICB0YXJnZXQ6IGVudi5WSVRFX1VSTCxcbiAgICAvLyAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgLy8gICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcbiAgICAvLyAgICAgfSxcblxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1IsU0FBUyxjQUFjLGVBQWU7QUFDclUsU0FBUyxlQUFlLFdBQVc7QUFDbkMsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsNEJBQTRCO0FBQ3JDLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFNBQVM7QUFUbUssSUFBTSwyQ0FBMkM7QUFXcE8sSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUN2QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUE7QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUE7QUFBQSxNQUVQLFdBQVc7QUFBQSxRQUNULFdBQVc7QUFBQSxVQUNULG9CQUFvQjtBQUFBO0FBQUEsUUFDdEI7QUFBQSxNQUNGLENBQUM7QUFBQTtBQUFBLE1BRUQsY0FBYztBQUFBLFFBQ1osVUFBVTtBQUFBO0FBQUEsTUFFWixDQUFDO0FBQUE7QUFBQSxNQUVELFdBQVc7QUFBQSxRQUNULFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLE9BQU8sQ0FBQyxDQUFDO0FBQUE7QUFBQSxRQUV4RCxNQUFNO0FBQUEsVUFDSjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBO0FBQUEsUUFFQSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDUixDQUFDO0FBQUEsTUFDRCxxQkFBcUI7QUFBQSxRQUNuQixVQUFVLENBQUMsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0FBQUEsUUFDekQsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNILHFCQUFxQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxVQUNKLG1CQUFtQjtBQUFBO0FBQUEsVUFFbkIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFJbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFZRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
