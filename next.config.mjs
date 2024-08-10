/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const nextConfig = {};

const withVanillaExtract = createVanillaExtractPlugin();

export default withVanillaExtract(nextConfig);
