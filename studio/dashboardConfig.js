export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed344af7ee67e483bbfdc1e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-22vwpf2v',
                  apiId: 'ca10897c-faef-47de-84dc-f4b16c94f568'
                },
                {
                  buildHookId: '5ed344af58c052c427c15edc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-kas41k1q',
                  apiId: '0c918380-e113-4e7b-81bb-82f880614e89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickramsay19/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-kas41k1q.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
