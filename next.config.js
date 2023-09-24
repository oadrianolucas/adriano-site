/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt"], // Adicione aqui os idiomas suportados
    defaultLocale: "en", // Idioma padrão
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
