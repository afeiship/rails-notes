module.exports = {
  base: '/rails-notes/',
  title: 'Rails notes.',
  host: '0.0.0.0',
  description: 'Rails notes.',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: [
          '/video-develop-basic/001-about-rails.md',
          '/video-develop-basic/002-rails-env.md',
          '/video-develop-basic/003-new-project.md',
          '/video-develop-basic/004-mvc.md',
          '/video-develop-basic/005-rails-generate.md',
          '/video-develop-basic/006-rails-resources.md',
          '/video-develop-basic/007-rest-actions.md',
          '/video-develop-basic/008-weibo-posts.md',
        ]
      }
    ]
  }
};
