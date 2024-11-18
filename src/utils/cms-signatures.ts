interface Pattern {
  regex: RegExp;
  weight: number;
  description: string;
}

interface CMSSignature {
  patterns: Pattern[];
  name: string;
}

export const CMS_SIGNATURES: Record<string, CMSSignature> = {
  wordpress: {
    name: 'WordPress',
    patterns: [
      { regex: /wp-content/i, weight: 30, description: 'WordPress content directory' },
      { regex: /wp-includes/i, weight: 30, description: 'WordPress includes directory' },
      { regex: /<meta[^>]*generator[^>]*WordPress/i, weight: 50, description: 'WordPress meta generator tag' },
      { regex: /\/wp-json\//i, weight: 40, description: 'WordPress REST API endpoint' },
      { regex: /wp-embed/i, weight: 20, description: 'WordPress embed functionality' }
    ]
  },
  drupal: {
    name: 'Drupal',
    patterns: [
      { regex: /drupal.js/i, weight: 30, description: 'Drupal JavaScript file' },
      { regex: /sites\/all\/themes/i, weight: 40, description: 'Drupal themes directory' },
      { regex: /<meta[^>]*generator[^>]*Drupal/i, weight: 50, description: 'Drupal meta generator tag' },
      { regex: /jquery.once/i, weight: 20, description: 'Drupal jQuery plugin' },
      { regex: /sites\/default\/files/i, weight: 30, description: 'Drupal files directory' }
    ]
  },
  joomla: {
    name: 'Joomla',
    patterns: [
      { regex: /\/media\/jui\//i, weight: 30, description: 'Joomla UI directory' },
      { regex: /<meta[^>]*generator[^>]*Joomla/i, weight: 50, description: 'Joomla meta generator tag' },
      { regex: /com_content/i, weight: 30, description: 'Joomla content component' },
      { regex: /mod_[a-z0-9_]+/i, weight: 20, description: 'Joomla module pattern' },
      { regex: /template=[\w\d-_]+/i, weight: 20, description: 'Joomla template parameter' }
    ]
  },
  magento: {
    name: 'Magento',
    patterns: [
      { regex: /skin\/frontend\//i, weight: 40, description: 'Magento frontend skin directory' },
      { regex: /js\/mage/i, weight: 30, description: 'Magento JavaScript directory' },
      { regex: /Mage.Cookies/i, weight: 40, description: 'Magento cookie handling' },
      { regex: /<script[^>]*mage\/[^>]*>/i, weight: 30, description: 'Magento script includes' },
      { regex: /catalog\/product/i, weight: 20, description: 'Magento product catalog' }
    ]
  },
  shopify: {
    name: 'Shopify',
    patterns: [
      { regex: /cdn.shopify.com/i, weight: 40, description: 'Shopify CDN' },
      { regex: /shopify.com\/s\//i, weight: 40, description: 'Shopify store URL pattern' },
      { regex: /Shopify.theme/i, weight: 30, description: 'Shopify theme object' },
      { regex: /shopify-section/i, weight: 30, description: 'Shopify section marker' },
      { regex: /shopify-payment-button/i, weight: 30, description: 'Shopify payment button' }
    ]
  },
  wix: {
    name: 'Wix',
    patterns: [
      { regex: /static.wixstatic.com/i, weight: 40, description: 'Wix static content' },
      { regex: /_wix_/i, weight: 30, description: 'Wix identifier' },
      { regex: /wix-dropdown/i, weight: 20, description: 'Wix dropdown component' },
      { regex: /wix-image/i, weight: 20, description: 'Wix image component' },
      { regex: /wix-sentinel/i, weight: 30, description: 'Wix sentinel script' }
    ]
  },
  ghost: {
    name: 'Ghost',
    patterns: [
      { regex: /ghost-theme/i, weight: 40, description: 'Ghost theme identifier' },
      { regex: /ghost.io/i, weight: 30, description: 'Ghost.io domain' },
      { regex: /<meta[^>]*generator[^>]*Ghost/i, weight: 50, description: 'Ghost meta generator tag' },
      { regex: /ghost-script/i, weight: 30, description: 'Ghost script reference' },
      { regex: /ghost-viewport/i, weight: 20, description: 'Ghost viewport class' }
    ]
  },
  webflow: {
    name: 'Webflow',
    patterns: [
      { regex: /webflow.com/i, weight: 40, description: 'Webflow domain' },
      { regex: /webflow.js/i, weight: 30, description: 'Webflow JavaScript' },
      { regex: /w-nav/i, weight: 20, description: 'Webflow navigation component' },
      { regex: /wf-/i, weight: 20, description: 'Webflow prefix' },
      { regex: /<html[^>]*webflow/i, weight: 40, description: 'Webflow HTML marker' }
    ]
  },
  squarespace: {
    name: 'Squarespace',
    patterns: [
      { regex: /static1.squarespace.com/i, weight: 40, description: 'Squarespace static content' },
      { regex: /<meta[^>]*generator[^>]*Squarespace/i, weight: 50, description: 'Squarespace meta generator' },
      { regex: /squarespace-headers/i, weight: 30, description: 'Squarespace headers' },
      { regex: /sqs-block/i, weight: 30, description: 'Squarespace block' },
      { regex: /squarespace.com/i, weight: 20, description: 'Squarespace domain' }
    ]
  },
  contentful: {
    name: 'Contentful',
    patterns: [
      { regex: /contentful.com/i, weight: 40, description: 'Contentful domain' },
      { regex: /ctfl-/i, weight: 30, description: 'Contentful prefix' },
      { regex: /contentful-widget/i, weight: 30, description: 'Contentful widget' },
      { regex: /contentful-entry/i, weight: 30, description: 'Contentful entry' },
      { regex: /contentful-space/i, weight: 20, description: 'Contentful space reference' }
    ]
  },
  strapi: {
    name: 'Strapi',
    patterns: [
      { regex: /strapi-content/i, weight: 40, description: 'Strapi content marker' },
      { regex: /strapi.io/i, weight: 30, description: 'Strapi domain' },
      { regex: /strapi-runtime/i, weight: 30, description: 'Strapi runtime' },
      { regex: /strapi-wrapper/i, weight: 20, description: 'Strapi wrapper element' },
      { regex: /_strapi_/i, weight: 20, description: 'Strapi identifier' }
    ]
  },
  woocommerce: {
    name: 'WooCommerce',
    patterns: [
      { regex: /woocommerce/i, weight: 40, description: 'WooCommerce identifier' },
      { regex: /wc-api/i, weight: 30, description: 'WooCommerce API' },
      { regex: /wc-ajax/i, weight: 30, description: 'WooCommerce AJAX' },
      { regex: /wc_cart/i, weight: 30, description: 'WooCommerce cart' },
      { regex: /wc-checkout/i, weight: 20, description: 'WooCommerce checkout' }
    ]
  },
  bigcommerce: {
    name: 'BigCommerce',
    patterns: [
      { regex: /bigcommerce.com/i, weight: 40, description: 'BigCommerce domain' },
      { regex: /bc-sf-filter/i, weight: 30, description: 'BigCommerce search filter' },
      { regex: /bigcommerce-analytics/i, weight: 30, description: 'BigCommerce analytics' },
      { regex: /bc-core/i, weight: 30, description: 'BigCommerce core' },
      { regex: /data-cart/i, weight: 20, description: 'BigCommerce cart data' }
    ]
  },
  prestashop: {
    name: 'PrestaShop',
    patterns: [
      { regex: /prestashop/i, weight: 40, description: 'PrestaShop identifier' },
      { regex: /ps_/i, weight: 30, description: 'PrestaShop prefix' },
      { regex: /presta-/i, weight: 30, description: 'PrestaShop element prefix' },
      { regex: /prestashop-admin/i, weight: 30, description: 'PrestaShop admin' },
      { regex: /ps-front/i, weight: 20, description: 'PrestaShop frontend' }
    ]
  },
  opencart: {
    name: 'OpenCart',
    patterns: [
      { regex: /opencart/i, weight: 40, description: 'OpenCart identifier' },
      { regex: /route=product/i, weight: 30, description: 'OpenCart product route' },
      { regex: /route=checkout/i, weight: 30, description: 'OpenCart checkout route' },
      { regex: /catalog\/view/i, weight: 30, description: 'OpenCart catalog view' },
      { regex: /common\/cart/i, weight: 20, description: 'OpenCart cart' }
    ]
  },
  kentico: {
    name: 'Kentico',
    patterns: [
      { regex: /kentico/i, weight: 40, description: 'Kentico identifier' },
      { regex: /CMSPages/i, weight: 30, description: 'Kentico CMS pages' },
      { regex: /CMSScripts/i, weight: 30, description: 'Kentico CMS scripts' },
      { regex: /CMSAdminControls/i, weight: 30, description: 'Kentico admin controls' },
      { regex: /GetResource.ashx/i, weight: 20, description: 'Kentico resource handler' }
    ]
  },
  umbraco: {
    name: 'Umbraco',
    patterns: [
      { regex: /umbraco/i, weight: 40, description: 'Umbraco identifier' },
      { regex: /umbRequestHelper/i, weight: 30, description: 'Umbraco request helper' },
      { regex: /UMB_/i, weight: 30, description: 'Umbraco prefix' },
      { regex: /umbraco-forms/i, weight: 30, description: 'Umbraco forms' },
      { regex: /umbCache/i, weight: 20, description: 'Umbraco cache' }
    ]
  },
  sitecore: {
    name: 'Sitecore',
    patterns: [
      { regex: /sitecore/i, weight: 40, description: 'Sitecore identifier' },
      { regex: /\/~/i, weight: 30, description: 'Sitecore media prefix' },
      { regex: /sc_site/i, weight: 30, description: 'Sitecore site' },
      { regex: /scWebEditRibbon/i, weight: 30, description: 'Sitecore edit ribbon' },
      { regex: /scForm/i, weight: 20, description: 'Sitecore form' }
    ]
  },
  hubspot: {
    name: 'HubSpot',
    patterns: [
      { regex: /hubspot/i, weight: 40, description: 'HubSpot identifier' },
      { regex: /hs-script/i, weight: 30, description: 'HubSpot script' },
      { regex: /hs-menu/i, weight: 30, description: 'HubSpot menu' },
      { regex: /hs-form/i, weight: 30, description: 'HubSpot form' },
      { regex: /hs-cta/i, weight: 20, description: 'HubSpot CTA' }
    ]
  },
  sitefinity: {
    name: 'Sitefinity',
    patterns: [
      { regex: /sitefinity/i, weight: 40, description: 'Sitefinity identifier' },
      { regex: /sf_/i, weight: 30, description: 'Sitefinity prefix' },
      { regex: /Telerik.Sitefinity/i, weight: 30, description: 'Sitefinity Telerik' },
      { regex: /sfView/i, weight: 30, description: 'Sitefinity view' },
      { regex: /sfFields/i, weight: 20, description: 'Sitefinity fields' }
    ]
  },
  episerver: {
    name: 'Episerver',
    patterns: [
      { regex: /episerver/i, weight: 40, description: 'Episerver identifier' },
      { regex: /epi-/i, weight: 30, description: 'Episerver prefix' },
      { regex: /EPiServer/i, weight: 30, description: 'EPiServer reference' },
      { regex: /epi-cms/i, weight: 30, description: 'Episerver CMS' },
      { regex: /epi-forms/i, weight: 20, description: 'Episerver forms' }
    ]
  },
  acquia: {
    name: 'Acquia',
    patterns: [
      { regex: /acquia/i, weight: 40, description: 'Acquia identifier' },
      { regex: /acquia-/i, weight: 30, description: 'Acquia prefix' },
      { regex: /acquiadam/i, weight: 30, description: 'Acquia DAM' },
      { regex: /acquia-site/i, weight: 30, description: 'Acquia site' },
      { regex: /acquia-content/i, weight: 20, description: 'Acquia content' }
    ]
  },
  aem: {
    name: 'Adobe Experience Manager',
    patterns: [
      { regex: /\/etc\.clientlibs\//i, weight: 40, description: 'AEM clientlibs' },
      { regex: /\/content\/dam\//i, weight: 30, description: 'AEM DAM path' },
      { regex: /cq-analytics/i, weight: 30, description: 'AEM analytics' },
      { regex: /wcm\/foundation/i, weight: 30, description: 'AEM WCM foundation' },
      { regex: /cq-commons/i, weight: 20, description: 'AEM commons' }
    ]
  }
};