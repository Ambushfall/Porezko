import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    host_permissions: [
      // 'https://lpa.gov.rs/jisportal/wus/obveznik/*/wusdatalist',
      'https://nbs.rs/QRcode/api/qr/v1/gen/500'
    ],
    browser_specific_settings:{
      gecko: {
        // @ts-ignore - WXT doesn't support this field yet
        data_collection_permissions: {
          required: ['none'],
        },
      }
    }
  }
})
