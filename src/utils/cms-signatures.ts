interface Pattern {
  description: string;
  regex: RegExp;
  weight: number;
}

interface URLPattern {
  description: string;
  regex: RegExp;
  weight: number;
}

interface CMSSignature {
  name: string;
  patterns: Pattern[];
  urlPatterns?: URLPattern[];
}

export const CMS_SIGNATURES: Record<string, CMSSignature> = {
  aem: {
    name: 'Adobe Experience Manager',
    patterns: [
      { description: 'AEM clientlibs', regex: /\/etc\.clientlibs\//i, weight: 40 },
      { description: 'AEM DAM path', regex: /\/content\/dam\//i, weight: 30 },
      { description: 'AEM analytics', regex: /cq-analytics/i, weight: 30 },
      { description: 'AEM WCM foundation', regex: /wcm\/foundation/i, weight: 30 },
      { description: 'AEM commons', regex: /cq-commons/i, weight: 20 }
    ]
  },
  astro: {
    name: 'Astro',
    patterns: [
      { description: 'Astro assets directory', regex: /_astro\//i, weight: 40 },
      { description: 'Astro island component', regex: /astro-island/i, weight: 50 },
      { description: 'Astro script handling', regex: /astro:scripts/i, weight: 30 },
      { description: 'Astro page directive', regex: /astro:page/i, weight: 30 },
      { description: 'Astro meta generator tag', regex: /<meta[^>]*generator[^>]*Astro/i, weight: 50 }
    ]
  },
  bigcommerce: {
    name: 'BigCommerce',
    patterns: [
      { description: 'BigCommerce product', regex: /bigcommerce\.com\/product/i, weight: 40 },
      { description: 'BigCommerce CDN', regex: /cdn11\.bigcommerce\.com/i, weight: 50 },
      { description: 'BigCommerce API', regex: /bigcommerce-api/i, weight: 30 },
      //eslint-disable-next-line
      { description: 'BigCommerce identifier', regex: /\_\_bigcommerce_/i, weight: 30 }
    ]
  },
  contentful: {
    name: 'Contentful',
    patterns: [
      { description: 'Contentful space reference', regex: /contentful\.com\/spaces\//i, weight: 50 },
      { description: 'Contentful asset', regex: /ctfasset/i, weight: 40 },
      { description: 'Contentful delivery API', regex: /contentful-delivery/i, weight: 30 },
      { description: 'Contentful management API', regex: /contentful-management/i, weight: 30 }
    ]
  },
  drupal: {
    name: 'Drupal',
    patterns: [
      { description: 'Drupal JavaScript file', regex: /drupal\.js/i, weight: 30 },
      { description: 'Drupal themes directory', regex: /sites\/all\/themes/i, weight: 30 },
      { description: 'Drupal modules directory', regex: /sites\/all\/modules/i, weight: 30 },
      { description: 'Drupal meta generator tag', regex: /<meta[^>]*generator[^>]*Drupal/i, weight: 50 },
      { description: 'Drupal jQuery plugin', regex: /jquery\.once\.js/i, weight: 20 }
    ]
  },
  episerver: {
    name: 'Episerver',
    patterns: [
      { description: 'Episerver identifier', regex: /episerver/i, weight: 40 },
      { description: 'Episerver prefix', regex: /epi-/i, weight: 30 },
      { description: 'EPiServer reference', regex: /EPiServer/i, weight: 30 },
      { description: 'Episerver CMS', regex: /epi-cms/i, weight: 30 },
      { description: 'Episerver forms', regex: /epi-forms/i, weight: 20 }
    ]
  },
  gatsby: {
    name: 'Gatsby',
    patterns: [
      { description: 'Gatsby browser runtime', regex: /gatsby-browser/i, weight: 30 },
      { description: 'Gatsby server-side rendering', regex: /gatsby-ssr/i, weight: 30 },
      { description: 'Gatsby image component', regex: /gatsby-image/i, weight: 30 },
      { description: 'Gatsby route handling', regex: /___gatsby/i, weight: 40 },
      { description: 'Gatsby page data', regex: /page-data\.json/i, weight: 30 }
    ]
  },
  hubspot: {
    name: 'HubSpot',
    patterns: [
      { description: 'HubSpot identifier', regex: /hubspot/i, weight: 40 },
      { description: 'HubSpot script', regex: /hs-script/i, weight: 30 },
      { description: 'HubSpot menu', regex: /hs-menu/i, weight: 30 },
      { description: 'HubSpot form', regex: /hs-form/i, weight: 30 },
      { description: 'HubSpot CTA', regex: /hs-cta/i, weight: 20 }
    ]
  },
  joomla: {
    name: 'Joomla',
    patterns: [
      { description: 'Joomla component path', regex: /\/components\/com_/i, weight: 30 },
      { description: 'Joomla module path', regex: /\/modules\/mod_/i, weight: 30 },
      { description: 'Joomla meta generator tag', regex: /<meta[^>]*generator[^>]*Joomla/i, weight: 50 },
      { description: 'Joomla UI framework', regex: /media\/jui\//i, weight: 20 }
    ]
  },
  kentico: {
    name: 'Kentico',
    patterns: [
      { description: 'Kentico identifier', regex: /kentico/i, weight: 40 },
      { description: 'Kentico CMS pages', regex: /CMSPages/i, weight: 30 },
      { description: 'Kentico CMS scripts', regex: /CMSScripts/i, weight: 30 },
      { description: 'Kentico admin controls', regex: /CMSAdminControls/i, weight: 30 },
      { description: 'Kentico resource handler', regex: /GetResource.ashx/i, weight: 20 }
    ]
  },
  magento: {
    name: 'Magento',
    patterns: [
      { description: 'Magento frontend assets', regex: /static\/frontend\/Magento/i, weight: 40 },
      { description: 'Magento cookies', regex: /mage\/cookies/i, weight: 30 },
      { description: 'Magento initialization', regex: /magento-init/i, weight: 30 },
      { description: 'Magento meta generator tag', regex: /<meta[^>]*generator[^>]*Magento/i, weight: 50 }
    ]
  },
  nextjs: {
    name: 'Next.js',
    patterns: [
      { description: 'Next.js static assets', regex: /_next\/static/i, weight: 40 },
      { description: 'Next.js data script', regex: /__NEXT_DATA__/i, weight: 50 },
      { description: 'Next.js font optimization', regex: /next\/font/i, weight: 30 },
      { description: 'Next.js image optimization', regex: /_next\/image/i, weight: 30 },
      { description: 'Next.js dynamic routing pattern', regex: /\[\[...(.+)\]\]/i, weight: 20 }
    ],
    urlPatterns: [
      { description: 'Vercel deployment', regex: /\.vercel\.app$/i, weight: 30 }
    ]
  },
  nuxt: {
    name: 'Nuxt.js',
    patterns: [
      { description: 'Nuxt.js assets directory', regex: /_nuxt\//i, weight: 40 },
      { description: 'Nuxt.js state', regex: /__NUXT__/i, weight: 50 },
      { description: 'Nuxt.js router link', regex: /nuxt-link/i, weight: 30 },
      { description: 'Nuxt.js loading component', regex: /nuxt-loading/i, weight: 30 }
    ]
  },
  opencart: {
    name: 'OpenCart',
    patterns: [
      { description: 'OpenCart identifier', regex: /opencart/i, weight: 40 },
      { description: 'OpenCart product route', regex: /route=product/i, weight: 30 },
      { description: 'OpenCart checkout route', regex: /route=checkout/i, weight: 30 },
      { description: 'OpenCart catalog view', regex: /catalog\/view/i, weight: 30 },
      { description: 'OpenCart cart', regex: /common\/cart/i, weight: 20 }
    ]
  },
  prestashop: {
    name: 'PrestaShop',
    patterns: [
      { description: 'PrestaShop identifier', regex: /prestashop/i, weight: 40 },
      { description: 'PrestaShop prefix', regex: /ps_/i, weight: 30 },
      { description: 'PrestaShop element prefix', regex: /presta-/i, weight: 30 },
      { description: 'PrestaShop admin', regex: /prestashop-admin/i, weight: 30 },
      { description: 'PrestaShop frontend', regex: /ps-front/i, weight: 20 }
    ]
  },
  prismic: {
    name: 'Prismic',
    patterns: [
      { description: 'Prismic JavaScript library', regex: /prismic-js/i, weight: 40 },
      { description: 'Prismic API endpoint', regex: /prismic\.io\/api/i, weight: 50 },
      { description: 'Prismic DOM library', regex: /prismic-dom/i, weight: 30 },
      { description: 'Prismic repository', regex: /prismicio/i, weight: 30 }
    ]
  },
  remix: {
    name: 'Remix',
    patterns: [
      { description: 'Remix assets', regex: /build\/_assets/i, weight: 40 },
      { description: 'Remix runtime', regex: /remix-run/i, weight: 50 },
      { description: 'Remix router', regex: /remix-router/i, weight: 30 },
      { description: 'Remix server runtime', regex: /remix-server-runtime/i, weight: 30 }
    ]
  },
  sanity: {
    name: 'Sanity',
    patterns: [
      { description: 'Sanity client', regex: /sanity\.io\/client/i, weight: 40 },
      { description: 'Sanity plugin', regex: /sanity-plugin/i, weight: 30 },
      { description: 'Sanity CDN', regex: /cdn\.sanity\.io/i, weight: 50 },
      { description: 'Sanity project ID', regex: /projectId: ["']\w+["']/i, weight: 30 }
    ],
    urlPatterns: [
      { description: 'Sanity Studio', regex: /\.sanity\.studio$/i, weight: 100 }
    ]
  },
  shopify: {
    name: 'Shopify',
    patterns: [
      { description: 'Shopify CDN', regex: /cdn\.shopify\.com/i, weight: 50 },
      { description: 'Shopify section', regex: /shopify\.section/i, weight: 30 },
      { description: 'Shopify Buy SDK', regex: /shopify-buy/i, weight: 30 },
      { description: 'Shopify store URL', regex: /myshopify\.com/i, weight: 40 }
    ],
    urlPatterns: [
      { description: 'Shopify store domain', regex: /\.myshopify\.com$/i, weight: 100 }
    ]
  },
  sitefinity: {
    name: 'Sitefinity',
    patterns: [
      { description: 'Sitefinity identifier', regex: /sitefinity/i, weight: 40 },
      { description: 'Sitefinity prefix', regex: /sf_/i, weight: 30 },
      { description: 'Sitefinity Telerik', regex: /Telerik.Sitefinity/i, weight: 30 },
      { description: 'Sitefinity view', regex: /sfView/i, weight: 30 },
      { description: 'Sitefinity fields', regex: /sfFields/i, weight: 20 }
    ]
  },
  sitecore: {
    name: 'Sitecore',
    patterns: [
      { description: 'Sitecore identifier', regex: /sitecore/i, weight: 40 },
      { description: 'Sitecore media prefix', regex: /\/~/i, weight: 30 },
      { description: 'Sitecore site', regex: /sc_site/i, weight: 30 },
      { description: 'Sitecore edit ribbon', regex: /scWebEditRibbon/i, weight: 30 },
      { description: 'Sitecore form', regex: /scForm/i, weight: 20 }
    ]
  },
  strapi: {
    name: 'Strapi',
    patterns: [
      { description: 'Strapi runtime', regex: /strapi-runtime/i, weight: 40 },
      { description: 'Strapi upload endpoint', regex: /\/api\/upload\//i, weight: 30 },
      { description: 'Strapi provider', regex: /strapi-provider/i, weight: 30 },
      { description: 'Strapi content manager', regex: /\/content-manager\//i, weight: 30 }
    ]
  },
  storyblok: {
    name: 'Storyblok',
    patterns: [
      { description: 'Storyblok JavaScript client', regex: /storyblok-js-client/i, weight: 40 },
      { description: 'Storyblok API endpoint', regex: /storyblok\.com\/api/i, weight: 50 },
      { description: 'Storyblok rich text renderer', regex: /storyblok-rich-text-renderer/i, weight: 30 },
      //eslint-disable-next-line
      { description: 'Storyblok component', regex: /\_storyblok/i, weight: 30 }
    ]
  },
  svelte: {
    name: 'SvelteKit',
    patterns: [
      { description: 'SvelteKit immutable assets', regex: /_app\/immutable/i, weight: 40 },
      { description: 'SvelteKit identifier', regex: /svelte-kit/i, weight: 50 },
      { description: 'SvelteKit preload', regex: /sveltekit-preload/i, weight: 30 },
      { description: 'SvelteKit internal', regex: /__sveltekit/i, weight: 30 }
    ]
  },
  umbraco: {
    name: 'Umbraco',
    patterns: [
      { description: 'Umbraco identifier', regex: /umbraco/i, weight: 40 },
      { description: 'Umbraco request helper', regex: /umbRequestHelper/i, weight: 30 },
      { description: 'Umbraco prefix', regex: /UMB_/i, weight: 30 },
      { description: 'Umbraco forms', regex: /umbraco-forms/i, weight: 30 },
      { description: 'Umbraco cache', regex: /umbCache/i, weight: 20 }
    ]
  },
  woocommerce: {
    name: 'WooCommerce',
    patterns: [
      { description: 'WooCommerce blocks', regex: /wc-blocks/i, weight: 30 },
      { description: 'WooCommerce JavaScript', regex: /woocommerce\\.js/i, weight: 40 },
      { description: 'WooCommerce API', regex: /wc-api/i, weight: 30 },
      { description: 'WooCommerce class', regex: /is-woocommerce/i, weight: 30 }
    ]
  },
  wordpress: {
    name: 'WordPress',
    patterns: [
      { description: 'WordPress content directory', regex: /wp-content/i, weight: 30 },
      { description: 'WordPress includes directory', regex: /wp-includes/i, weight: 30 },
      { description: 'WordPress meta generator tag', regex: /<meta[^>]*generator[^>]*WordPress/i, weight: 50 },
      { description: 'WordPress REST API endpoint', regex: /\/wp-json\//i, weight: 40 },
      { description: 'WordPress embed functionality', regex: /wp-embed/i, weight: 20 }
    ],
    urlPatterns: [
      { description: 'WordPress.com hosted site', regex: /\.wordpress\.com$/i, weight: 100 }
    ]
  }
};