import {
  defineDocumentType,
  defineNestedType,
  makeSource,
  type FieldDefs,
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

const basicFields: FieldDefs = {
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
  tags: {
    type: 'list',
    of: { type: 'string' },
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: { ...basicFields },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace(/posts\/?/, ''),
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    ...basicFields,
    link: {
      type: 'nested',
      of: Link,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) =>
        project._raw.flattenedPath.replace(/projects\/?/, ''),
    },
  },
}));

export default makeSource({
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
  contentDirPath: './src/content',
  documentTypes: [Post, Project],
});
