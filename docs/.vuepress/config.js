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
          '/video-develop-basic/009-rails-routes.md',
          '/video-develop-basic/010-resources-routes.md',
          '/video-develop-basic/011-active-record.md',
          '/video-develop-basic/012-model-validate.md',
          '/video-develop-basic/013-add-field.md',
          '/video-develop-basic/014-new-users.md',
          '/video-develop-basic/015-session.md',
          '/video-develop-basic/016-relation.md',
          '/video-develop-basic/017-rails-frontend.md',
          '/video-develop-basic/018-link-to.md',
          '/video-develop-basic/019-form-for.md',
          '/video-develop-basic/020-helper.md',
          '/video-develop-basic/021-login-for-pages.md',
        ]
      }
    ]
  }
};
