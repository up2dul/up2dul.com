import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';

const Link = defineNestedType(() => ({
  name: 'Link',
  fields: {
    demo: {
      type: 'string',
    },
    repo: {
      type: 'string',
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    createdAt: {
      type: 'date',
      required: true,
    },
    link: {
      type: 'nested',
      of: Link,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => `${project._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
  contentDirPath: './src/content/projects',
  documentTypes: [Project],
});
