module.exports = {
    distDir: 'build',
    images: {
      domains: ['192.168.0.205','https://storage.googleapis.com/'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'img.youtube.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }