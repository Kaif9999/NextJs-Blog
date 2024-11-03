import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import { author, description } from './project files/siteMetaData'

const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/**/*.mdx`,
    fields: {
        title: {
            type: 'string',
          
        },
        publishedAt: {
            type: 'date',
            required: true,
        },
        updatedAt: {
            type: 'date',
        }, 
        description: {
            type: 'string',
            required: true,
        },
        image :{ type:'image'},
        isPublished: {
            type: 'boolean',
            required: true,
        },
        author: {
            type: 'string',
          
        },
        tags:{
            type:'list',
            of:{
                type:'string'
            },
        }
    },
    computedFields:{
        url: {
            type: 'string',
            resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
    }

}))

 
export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Blog]
})