/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
            },
          ],
        },
      ].filter(Boolean),
    );

    return config;
  },
};

export default withVanillaExtract(nextConfig);
